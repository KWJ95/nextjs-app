"use client";
import { Text, Card, Spacer, Container } from "@nextui-org/react";

export default function NoteTemplate({ note }: any) {
  const { id, title, content, created, updated } = note || {};
  return (
    <Container>
      <Text h1>notes/{id}</Text>
      <Spacer y={1} />
      <Card
        css={{
          mw: "400px",
          padding: "0.2rem 1rem",
          backgroundColor: "#ffff00",
        }}
      >
        <Card.Header>
          <Text h3>{title}</Text>
        </Card.Header>
        <Card.Body>
          <Text h5>{content}</Text>
          <Text>Latest changed: {updated > created ? updated : created}</Text>
        </Card.Body>
      </Card>
      <Spacer y={1} />
    </Container>
  );
}
