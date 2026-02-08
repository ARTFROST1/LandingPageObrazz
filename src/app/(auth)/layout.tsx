// Auth layout — centered card for login/signup pages

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            Obrazz
          </h1>
          <p className="text-sm text-brand-muted mt-1">
            Ваш AI-стилист
          </p>
        </div>

        {/* Auth card */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
