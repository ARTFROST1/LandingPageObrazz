'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';

type SettingsFormProps = {
  initialData: {
    email: string;
    username: string;
    full_name: string;
  };
};

export function SettingsForm({ initialData }: SettingsFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [username, setUsername] = useState(initialData.username || '');
  const [fullName, setFullName] = useState(initialData.full_name || '');

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);

    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) throw new Error('Не авторизован');

      // Find internal user ID
      const { data: dbUser } = await supabase
        .from('users')
        .select('id')
        .eq('supabase_id', authUser.id)
        .single();

      if (!dbUser) throw new Error('Пользователь не найден');

      const { error } = await supabase
        .from('users')
        .update({
          username,
          full_name: fullName,
        })
        .eq('id', dbUser.id);

      if (error) throw error;

      setMessage({ type: 'success', text: 'Настройки сохранены' });

      startTransition(() => {
        router.refresh();
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Не удалось сохранить';
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setIsSaving(false);
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push('/');
  }

  return (
    <div className="space-y-8">
      {/* Profile form */}
      <div className="bg-white rounded-2xl border border-brand-border p-6">
        <h2 className="text-lg font-bold text-brand-dark mb-6">Профиль</h2>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Email (read-only) */}
          <div>
            <label className="block text-sm font-medium text-brand-text-secondary mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={initialData.email}
              disabled
              className="w-full px-4 py-2.5 bg-gray-50 border border-brand-border rounded-xl text-brand-muted text-sm cursor-not-allowed"
            />
            <p className="text-xs text-brand-muted mt-1">Email нельзя изменить</p>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-brand-text-secondary mb-1.5">
              Имя пользователя
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              className="w-full px-4 py-2.5 bg-white border border-brand-border rounded-xl text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-brand-text-secondary mb-1.5">
              Полное имя
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Иван Иванов"
              className="w-full px-4 py-2.5 bg-white border border-brand-border rounded-xl text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
            />
          </div>

          {/* Message */}
          {message && (
            <div
              className={`text-sm px-4 py-2.5 rounded-xl ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Save button */}
          <button
            type="submit"
            disabled={isSaving || isPending}
            className="px-6 py-2.5 bg-brand-primary text-white rounded-xl text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {isSaving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </form>
      </div>

      {/* Sign out */}
      <div className="bg-white rounded-2xl border border-brand-border p-6">
        <h2 className="text-lg font-bold text-brand-dark mb-2">Сессия</h2>
        <p className="text-sm text-brand-text-secondary mb-4">
          Выход из аккаунта на этом устройстве
        </p>
        <button
          onClick={handleSignOut}
          className="px-6 py-2.5 bg-gray-100 text-brand-dark rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Выйти
        </button>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-2xl border border-red-200 p-6">
        <h2 className="text-lg font-bold text-red-600 mb-2">Опасная зона</h2>
        <p className="text-sm text-brand-text-secondary mb-4">
          Удаление аккаунта необратимо. Все данные будут потеряны.
        </p>
        <button
          disabled
          className="px-6 py-2.5 bg-red-50 text-red-600 rounded-xl text-sm font-medium opacity-50 cursor-not-allowed"
        >
          Удалить аккаунт (скоро)
        </button>
      </div>
    </div>
  );
}
