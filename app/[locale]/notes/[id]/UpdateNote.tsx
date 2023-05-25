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
  Container,
} from "@nextui-org/react";

export default function UpdateNote({ note }: any) {
  const id = note.id;
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const router = useRouter();

  const update = async () => {
    await fetch(
      `http://127.0.0.1:8090/api/collections/note_collection/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );
    router.refresh();
  };

  return (
    <Container>
      <Card css={{ mw: "350px", justifyContent: "center" }}>
        <Card.Header>
          <Text h3>Edit note ({id})</Text>
        </Card.Header>
        <Card.Body>
          <form onSubmit={update}>
            <Row>
              <Input
                type="text"
                placeholder="Title"
                value={title}
                width="inherit"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Row>
            <Spacer />
            <Row>
              <Textarea
                placeholder="Content"
                value={content}
                width="inherit"
                onChange={(e) => setContent(e.target.value)}
              />
            </Row>
            <Spacer />
            <Row css={{ justifyContent: "center" }}>
              <Button type="submit">Edit note</Button>
            </Row>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}
