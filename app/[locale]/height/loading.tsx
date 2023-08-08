"use client";
import { Skeleton } from "@nextui-org/react";
import { useTranslations } from "next-intl";
export default function LoadingHeight() {
  const t = useTranslations("Loading");
  return (
    <>
      <Skeleton>
        {t("height-page-loading")}
      </Skeleton>
    </>
  );
}
