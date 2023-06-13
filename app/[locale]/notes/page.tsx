"use client";
import { Suspense, useState, useEffect } from "react";
import { Text, Card, Grid, Spacer, Container } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import CreateNote from "./CreateNote";
import Link from "next/link";
import LoadingCustom from "./loading";
import styles from "./Notes.module.css";

async function getNotes() {
  const url =
    "http://127.0.0.1:8090/api/collections/note_collection/records?page=1&perPage=30";
  const res = await fetch(url, {
    next: { revalidate: 10 },
    cache: "reload",
  });
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    };

    fetchNotes();
  }, []);

  const t = useTranslations("Notes");
  // const notes = await getNotes();
  return (
    <Container>
      <Text h1>{t("title")}</Text>
      {/* <LoadingCustom /> */}
      <Suspense fallback={<LoadingCustom />}>
        <Grid.Container
          gap={2}
          alignItems="flex-start"
          justify-content="flex-start"
        >
          {notes?.map((note) => {
            return (
              <Grid md={3} lg={2} key={crypto.randomUUID()}>
                <Note key={note.id} note={note} />
              </Grid>
            );
          })}
        </Grid.Container>
      </Suspense>
      <Spacer y={1} />
      <CreateNote />
    </Container>
  );
}

function Note({ note }: any) {
  const { id, title, content, created, updated } = note || {};
  return (
    <Link href={`/notes/${id}`} className={styles.link}>
      <Card
        css={{
          mw: "300px",
          padding: "0.2rem 1rem",
          backgroundColor: "#ffff00",
        }}
      >
        <Card.Header>
          <Text h4>{title}</Text>
        </Card.Header>
        <Card.Body>
          <Text h5>{content}</Text>
          <Text>{updated > created ? updated : created}</Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
