import { useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

export default function Navigation() {
    const t = useTranslations("Navigation");
    const navigation = [
        { title: t('home'), link: "/" },
        { title: t('notes'), link: "/notes" },
        { title: t('height_comparison'), link: "/height" },
      ];
    const asPath = usePathname();

    return (
        navigation?.map((item, index) => {
            return (
              <Link
                className={
                  asPath === item.link ? "nav-link active" : "nav-link"
                }
                key={index}
                href={item.link}
              >
                {item.title}
              </Link>
            );
          })
    );
};
