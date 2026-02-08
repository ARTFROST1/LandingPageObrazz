// Subscription management page

import { createServerClient } from '@/lib/supabase/server';
import { formatCurrency, formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Подписка — Obrazz',
};

export default async function SubscriptionPage() {
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

  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userData?.id)
    .single();

  const isPro = subscription?.plan?.includes('pro') && subscription?.status === 'active';

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      period: '',
      tokens: 0,
      features: [
        'Управление гардеробом',
        'Создание образов',
        '3 бонусных токена при регистрации',
      ],
      current: !isPro,
    },
    {
      id: 'pro_monthly',
      name: 'Pro',
      price: 499,
      period: '/месяц',
      tokens: 100,
      features: [
        'Всё из Free',
        '100 AI-токенов в месяц',
        'Virtual Try-On',
        'Fashion Models',
        'Clothing Variations',
        'Приоритетная поддержка',
      ],
      current: subscription?.plan === 'pro_monthly',
      popular: true,
    },
    {
      id: 'pro_yearly',
      name: 'Pro годовой',
      price: 3999,
      period: '/год',
      tokens: 100,
      features: [
        'Всё из Pro',
        '100 AI-токенов в месяц',
        'Скидка ~33%',
        '12 месяцев по цене 8',
      ],
      current: subscription?.plan === 'pro_yearly',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-dark">Подписка</h1>
        <p className="mt-1 text-sm text-brand-text-secondary">Управляйте планом подписки</p>
      </div>

      {/* Current Plan Info */}
      {isPro && subscription && (
        <div className="bg-white rounded-2xl border border-brand-border p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/10 text-brand-primary">
                АКТИВНА
              </span>
              <h3 className="text-lg font-semibold text-brand-dark mt-2">
                {subscription.plan === 'pro_yearly' ? 'Pro (годовая)' : 'Pro (месячная)'}
              </h3>
              {subscription.current_period_end && (
                <p className="text-sm text-brand-text-secondary">
                  Следующее списание: {formatDate(subscription.current_period_end)}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm text-brand-muted">
                {subscription.auto_renew ? 'Автопродление включено' : 'Автопродление выключено'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl border p-6 ${
              plan.popular ? 'border-brand-primary shadow-lg' : 'border-brand-border'
            } ${plan.current ? 'ring-2 ring-brand-primary' : ''}`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Популярный
              </span>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-brand-dark">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-brand-dark">
                  {plan.price === 0 ? 'Бесплатно' : formatCurrency(plan.price)}
                </span>
                {plan.period && <span className="text-brand-muted">{plan.period}</span>}
              </div>
              {plan.tokens > 0 && (
                <p className="text-sm text-brand-primary mt-1">{plan.tokens} токенов/месяц</p>
              )}
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-brand-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              disabled={plan.current}
              className={`w-full py-3 rounded-full text-sm font-semibold transition-all ${
                plan.current
                  ? 'bg-brand-light text-brand-muted cursor-not-allowed'
                  : plan.popular
                    ? 'bg-brand-dark text-white hover:opacity-90'
                    : 'bg-white text-brand-dark border border-brand-border hover:border-brand-dark'
              }`}
            >
              {plan.current ? 'Текущий план' : plan.price === 0 ? 'Текущий план' : 'Выбрать'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
