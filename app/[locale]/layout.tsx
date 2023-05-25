"use client";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import LocaleSwitcher from "../components/LocaleSwitcher";
import Navigation from "../components/Navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bm" }, { locale: "zh-hans" }];
}
export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;

  try {
    // messages = (await import(`../../messages/${locale}.json`)).default;
    messages = (await import(`../../i18n/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <main>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
              <div className="container-fluid">
                <Navigation />
                <LocaleSwitcher />
              </div>
            </nav>
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
