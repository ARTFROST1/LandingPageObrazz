'use client';

import { cn } from '@/lib/utils';
import type { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigation = [
  { name: 'Главная', href: '/dashboard' },
  { name: 'AI-генерации', href: '/dashboard/generations' },
  { name: 'Токены', href: '/dashboard/tokens' },
  { name: 'Подписка', href: '/dashboard/subscription' },
  { name: 'Настройки', href: '/dashboard/settings' },
];

export function MobileHeader({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div className="sticky top-0 z-40 flex h-14 items-center gap-x-4 bg-white border-b border-brand-border px-4">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-brand-muted"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <Link href="/" className="flex-1">
          <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            Obrazz
          </span>
        </Link>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
          {(user.email?.[0] || 'U').toUpperCase()}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white shadow-xl">
            <div className="flex h-14 items-center justify-between px-4 border-b border-brand-border">
              <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Obrazz
              </span>
              <button type="button" className="-m-2.5 p-2.5 text-brand-muted" onClick={() => setIsOpen(false)}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== '/dashboard' && pathname.startsWith(item.href));

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'block rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                          isActive
                            ? 'bg-brand-primary/10 text-brand-primary'
                            : 'text-brand-text-secondary hover:bg-brand-light hover:text-brand-dark',
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-brand-border">
              <div className="flex items-center gap-x-3 px-3 py-3 rounded-xl bg-brand-light">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                  {(user.email?.[0] || 'U').toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-brand-dark truncate">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
