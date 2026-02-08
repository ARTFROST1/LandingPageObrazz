// User settings page

import { SettingsForm } from '@/components/dashboard/SettingsForm';
import { createServerClient } from '@/lib/supabase/server';

export const metadata = {
  title: 'Настройки — Obrazz',
};

export default async function SettingsPage() {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: userData } = await supabase
    .from('users')
    .select('*')
    .eq('supabase_id', user.id)
    .single();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-dark">Настройки</h1>
        <p className="mt-1 text-sm text-brand-text-secondary">Управляйте данными профиля</p>
      </div>

      <div className="max-w-2xl">
        <SettingsForm
          initialData={{
            email: userData?.email || user.email || '',
            username: userData?.username || '',
            full_name: userData?.full_name || '',
          }}
        />
      </div>
    </div>
  );
}
