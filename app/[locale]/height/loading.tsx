'use client';
import { Loading } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
export default function LoadingHeight() {
    const t = useTranslations('Loading');
    return <Loading>{t('height-page-loading')}</Loading>;
};
