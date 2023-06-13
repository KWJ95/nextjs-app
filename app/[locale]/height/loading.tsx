"use client";
import { Loading } from "@nextui-org/react";
import { useTranslations } from "next-intl";
export default function LoadingHeight() {
  const t = useTranslations("Loading");
  return (
    <>
      <Loading
        size="lg"
        css={{
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {t("height-page-loading")}
      </Loading>
    </>
  );
}
