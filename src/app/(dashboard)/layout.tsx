// Dashboard layout with sidebar — protected by middleware

import { MobileHeader } from '@/components/dashboard/MobileHeader';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Desktop Sidebar */}
      <Sidebar user={user} />

      {/* Mobile Header */}
      <MobileHeader user={user} />

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
