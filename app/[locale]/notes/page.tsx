"use client";
import { Suspense, useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Spacer } from "@nextui-org/react";
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
    <>
      <h1>{t("title")}</h1>
      <Suspense fallback={<LoadingCustom />}>
        <div
          // gap={2}
          // alignItems="flex-start"
          justify-content="flex-start"
        >
          {notes?.map((note) => {
            return (
              <div /* md={3} lg={2} */ key={crypto.randomUUID()}>
                <Note key={note.id} note={note} />
              </div>
            );
          })}
        </div>
      </Suspense>
      <Spacer y={1} />
      <CreateNote />
    </>
  );
}

function Note({ note }: any) {
  const { id, title, content, created, updated } = note || {};
  return (
    <Link href={`/notes/${id}`} className={styles.link}>
      <Card>
        <CardHeader>
          <h4>{title}</h4>
        </CardHeader>
        <CardBody>
          <h5>{content}</h5>
          <p>{updated > created ? updated : created}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
