"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Text,
  Textarea,
  Button,
  Input,
  Row,
  Card,
  Spacer,
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
    <Card css={{ mw: "350px", justifyContent: "center" }}>
      <Card.Header>
        <Text h3>{t("card-header")}</Text>
      </Card.Header>
      <Card.Body>
        <form onSubmit={create}>
          <Row>
            <Input
              type="text"
              placeholder={t("ph-title")}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              width="inherit"
            />
          </Row>
          <Spacer />
          <Row>
            <Textarea
              placeholder={t("ph-content")}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              width="inherit"
            />
          </Row>
          <Spacer />
          <Row css={{ justifyContent: "center" }}>
            <Button type="submit">{t("card-btn")}</Button>
          </Row>
        </form>
      </Card.Body>
    </Card>
  );
}
