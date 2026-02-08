// Dashboard home page

import { RecentGenerations } from '@/components/dashboard/RecentGenerations';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { createServerClient } from '@/lib/supabase/server';
import Link from 'next/link';

export const metadata = {
  title: 'Личный кабинет — Obrazz',
};

export default async function DashboardPage() {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Get user data from our users table
  const { data: userData } = await supabase
    .from('users')
    .select('*')
    .eq('supabase_id', user.id)
    .single();

  // Get token balance
  const { data: balances } = await supabase
    .from('token_balances')
    .select('balance, token_type')
    .eq('user_id', userData?.id);

  const totalTokens = balances?.reduce((sum, b) => sum + b.balance, 0) ?? 0;

  // Get subscription
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userData?.id)
    .single();

  // Get recent generations
  const { data: generations } = await supabase
    .from('ai_generations')
    .select('*')
    .eq('user_id', userData?.id)
    .order('created_at', { ascending: false })
    .limit(6);

  // Get stats
  const { count: totalGenerations } = await supabase
    .from('ai_generations')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userData?.id);

  const { count: successfulGenerations } = await supabase
    .from('ai_generations')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userData?.id)
    .eq('status', 'completed');

  const planLabel = subscription?.plan?.includes('pro') ? 'Pro' : 'Free';

  return (
    <div>
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">
            Добро пожаловать{userData?.full_name ? `, ${userData.full_name}` : ''}!
          </h1>
          <p className="mt-1 text-sm text-brand-text-secondary">
            Ваш AI-стилист готов к работе
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link href="/" className="text-sm text-brand-muted hover:text-brand-dark transition-colors">
            ← На сайт
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard title="Баланс токенов" value={totalTokens} icon="coins" linkHref="/dashboard/tokens" linkLabel="Пополнить" />
        <StatsCard title="Подписка" value={planLabel} icon="badge" variant={planLabel === 'Pro' ? 'success' : 'default'} linkHref="/dashboard/subscription" linkLabel={planLabel === 'Pro' ? 'Управление' : 'Улучшить'} />
        <StatsCard title="Всего генераций" value={totalGenerations || 0} icon="sparkles" subtitle={`${successfulGenerations || 0} успешных`} />
        <StatsCard title="В этом месяце" value={0} icon="calendar" />
      </div>

      {/* Recent Generations */}
      <RecentGenerations generations={generations || []} />
    </div>
  );
}
