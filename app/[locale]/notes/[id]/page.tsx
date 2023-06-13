import { Suspense } from "react";
import styles from "../Notes.module.css";
import NoteTemplate from "./NoteTemplate";
import UpdateNote from "./UpdateNote";
import LoadingEditNote from "./loading";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/note_collection/records/${noteId}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <>
      <Suspense fallback={<LoadingEditNote />}>
        <NoteTemplate key={note.id + note.updated}  note={note} />
        <UpdateNote key={note.id} note={note} />
      </Suspense>
    </>
  );
}
