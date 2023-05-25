'use client';

import { Loading } from "@nextui-org/react";
import { useTranslations } from "next-intl";
export default function LoadingCustom() {
    const t = useTranslations('Loading');
    return <Loading size="lg">{t('note-page-loading')}</Loading>;
};