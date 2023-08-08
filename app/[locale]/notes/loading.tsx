"use client";
import { Card, Skeleton } from "@nextui-org/react";
import { useTranslations } from "next-intl";
export default function CardCustom() {
  const t = useTranslations("Card");
  return (
    <Skeleton>
      <Card>
        {t("note-page-loading")}
      </Card>
    </Skeleton>
  );
}
