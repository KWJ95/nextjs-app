"use clients";

import { Dropdown } from "@nextui-org/react";
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

  // function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
  function onSelectChange(event: any) {
    startTransition(() => {
      // router.replace(`/${event.target.value}${pathname}`);
      router.replace(`/${event}${pathname}`);
    });
  }

  return (
    // <div className="nav-item dropdown">
    //   <p className="nav-link fw-bold">{t("label")}</p>
    //   <select
    //     defaultValue={locale}
    //     disabled={isPending}
    //     onChange={onSelectChange}
    //   >
    //     {["en", "bm", "zh-hans"].map((cur) => (
    //       <option key={cur} value={cur}>
    //         {t(cur)}
    //       </option>
    //     ))}
    //   </select>
    // </div>

    <Dropdown>
      <Dropdown.Button flat>
        {t("label")}
      </Dropdown.Button>
      <Dropdown.Menu
        selectionMode="single"
        disallowEmptySelection
        selectedKeys={locale}
        onAction={onSelectChange}>
      {["en", "bm", "zh-hans"].map((cur) => (
        <Dropdown.Item key={cur}>
          {t(cur)}
        </Dropdown.Item>
      ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
