"use clients";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      router.replace(`/${event.target.value}${pathname}`);
    });
  }

  return (
    <div className="nav-item dropdown">
      <p>{t("label")}</p>
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {["en", "bm", "zh-hans"].map((cur) => (
          <option key={cur} value={cur}>
            {t(cur)}
          </option>
        ))}
      </select>
    </div>
  );
}
