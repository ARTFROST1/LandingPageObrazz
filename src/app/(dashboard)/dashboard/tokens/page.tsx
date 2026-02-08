// Token management page

import { createServerClient } from '@/lib/supabase/server';
import { formatCurrency, formatDateTime } from '@/lib/utils';

export const metadata = {
  title: 'Токены — Obrazz',
};

export default async function TokensPage() {
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

  // Get balances
  const { data: balances } = await supabase
    .from('token_balances')
    .select('*')
    .eq('user_id', userData?.id);

  const totalBalance = balances?.reduce((sum, b) => sum + b.balance, 0) ?? 0;

  // Get recent transactions
  const { data: transactions } = await supabase
    .from('token_transactions')
    .select('*')
    .eq('user_id', userData?.id)
    .order('created_at', { ascending: false })
    .limit(20);

  const tokenPacks = [
    { id: 'pack_10', name: '10 токенов', tokens: 10, price: 99 },
    { id: 'pack_50', name: '50 токенов', tokens: 50, price: 399 },
    { id: 'pack_100', name: '100 токенов', tokens: 100, price: 699 },
    { id: 'pack_500', name: '500 токенов', tokens: 500, price: 2999 },
  ];

  const typeLabels: Record<string, string> = {
    subscription_tokens: 'Подписка',
    purchased_tokens: 'Покупка',
    bonus_tokens: 'Бонус',
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-dark">Токены</h1>
        <p className="mt-1 text-sm text-brand-text-secondary">Управляйте балансом AI-токенов</p>
      </div>

      {/* Balance Overview */}
      <div className="bg-white rounded-2xl border border-brand-border p-6 mb-8">
        <div className="text-center">
          <p className="text-sm text-brand-text-secondary mb-1">Общий баланс</p>
          <p className="text-5xl font-bold text-brand-dark">{totalBalance}</p>
          <p className="text-sm text-brand-muted mt-1">токенов</p>
        </div>

        {/* Balance breakdown */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-brand-border">
          {(balances || []).map((b) => (
            <div key={b.id} className="text-center">
              <p className="text-xs text-brand-muted">{typeLabels[b.token_type] || b.token_type}</p>
              <p className="text-lg font-semibold text-brand-dark">{b.balance}</p>
              {b.expires_at && (
                <p className="text-xs text-brand-accent">
                  до {new Date(b.expires_at).toLocaleDateString('ru-RU')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Token Packs */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-brand-dark mb-4">Купить токены</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {tokenPacks.map((pack) => (
            <div
              key={pack.id}
              className="bg-white rounded-xl border border-brand-border p-4 text-center hover:border-brand-primary hover:shadow-sm transition-all cursor-pointer"
            >
              <p className="text-2xl font-bold text-brand-dark">{pack.tokens}</p>
              <p className="text-sm text-brand-text-secondary mb-3">токенов</p>
              <p className="text-lg font-semibold text-brand-primary">
                {formatCurrency(pack.price)}
              </p>
              <p className="text-xs text-brand-muted mt-1">
                {formatCurrency(Math.round(pack.price / pack.tokens))}/токен
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <h2 className="text-lg font-semibold text-brand-dark mb-4">История транзакций</h2>
        {!transactions || transactions.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-xl border border-brand-border">
            <p className="text-brand-muted">Транзакций пока нет</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-brand-border overflow-hidden">
            <table className="min-w-full divide-y divide-brand-border">
              <thead className="bg-brand-light">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-brand-muted uppercase">Дата</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-brand-muted uppercase">Операция</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-brand-muted uppercase">Описание</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-brand-muted uppercase">Сумма</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {transactions.map((tx) => (
                  <tr key={tx.id}>
                    <td className="px-4 py-3 text-sm text-brand-text-secondary">{formatDateTime(tx.created_at)}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        tx.operation === 'credit' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {tx.operation === 'credit' ? '+' : '−'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-brand-dark">{tx.description || tx.reason}</td>
                    <td className="px-4 py-3 text-sm text-right font-medium">
                      <span className={tx.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                        {tx.amount > 0 ? `+${tx.amount}` : tx.amount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
