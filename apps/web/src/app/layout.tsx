import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korea Bike Tour Guide",
  description:
    "Your complete guide to cycling across Korea — routes, tips, and everything you need for an unforgettable bike tour.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* Glassmorphism Navigation */}
          <header
            className="sticky top-0 z-50"
            style={{
              background: "rgba(253, 249, 243, 0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(193, 200, 195, 0.1)",
            }}
          >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
              <Link
                href="/"
                className="font-display text-lg font-bold tracking-[-0.04em] text-primary uppercase"
              >
                Korea Bike Tour
              </Link>

              <ul className="flex items-center gap-8">
                {[
                  { label: "Routes", href: "/routes" },
                  { label: "Tips", href: "/tips" },
                  { label: "About", href: "/about" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-body text-sm text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
