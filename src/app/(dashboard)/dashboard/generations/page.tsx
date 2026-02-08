// AI generations gallery

import { GenerationCard } from '@/components/dashboard/GenerationCard';
import { createServerClient } from '@/lib/supabase/server';
import { formatDateTime } from '@/lib/utils';

export const metadata = {
  title: 'AI-генерации — Obrazz',
};

export default async function GenerationsPage() {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: userData } = await supabase
    .from('users')
    .select('id')
    .eq('supabase_id', user.id)
    .single();

  const { data: generations } = await supabase
    .from('ai_generations')
    .select('*')
    .eq('user_id', userData?.id)
    .order('created_at', { ascending: false });

  const typeLabels: Record<string, string> = {
    virtual_try_on: 'Virtual Try-On',
    fashion_model: 'Fashion Model',
    variation: 'Вариации',
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-dark">AI-генерации</h1>
        <p className="mt-1 text-sm text-brand-text-secondary">
          История всех ваших AI-генераций
        </p>
      </div>

      {!generations || generations.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-brand-border">
          <div className="text-5xl mb-4">✨</div>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Пока нет генераций</h3>
          <p className="text-brand-text-secondary mb-6">
            Создайте первую AI-генерацию в мобильном приложении
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {generations.map((gen) => (
            <GenerationCard
              key={gen.id}
              id={gen.id}
              type={typeLabels[gen.generation_type] || gen.generation_type}
              status={gen.status}
              outputImages={gen.output_image_urls || []}
              createdAt={formatDateTime(gen.created_at)}
              tokensCost={gen.tokens_cost}
            />
          ))}
        </div>
      )}
    </div>
  );
}
