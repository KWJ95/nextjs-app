'use client';
import { Container, Loading } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function LoadingEditNote() {
    const t = useTranslations('Loading');
    return (
        <Container css={{justifyContent:"center"}}>
            <Loading size="lg">{t('note-edit-loading')}</Loading>
        </Container>

    );
};
