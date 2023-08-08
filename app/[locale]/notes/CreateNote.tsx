"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  Spacer
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const t = useTranslations("Notes");
  const router = useRouter();

  const create = async () => {
    await fetch(
      "http://127.0.0.1:8090/api/collections/note_collection/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );

    setTitle("");
    setContent("");

    router.refresh();
  };
  return (
    <Card className="max-w-[350] justifyContent: center">
      <CardHeader>
        <h3>{t("card-header-create")}</h3>
      </CardHeader>
      <CardBody>
        <form onSubmit={create}>
          <Input
            type="text"
            placeholder={t("ph-title")}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            width="inherit"
          />
          <Spacer y={1} />
          <Textarea
            placeholder={t("ph-content")}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            width="inherit"
          />
          <Spacer y={1} />
          <Button type="submit">{t("card-create-btn")}</Button>
        </form>
      </CardBody>
    </Card>
  );
}
