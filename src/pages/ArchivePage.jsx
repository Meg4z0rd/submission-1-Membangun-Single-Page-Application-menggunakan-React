import NoteList from "../components/NoteList";
import EmptyMessage from "../components/EmptyMessage";

function ArchivePage({ notes }) {
  const archivedNotes = notes.filter(note => note.archived);

  return (
    <div>
      <h2>Arsip Catatan</h2>

      {archivedNotes.length === 0 ? (
        <EmptyMessage message="Arsip kosong" />
      ) : (
        <NoteList notes={archivedNotes} />
      )}
    </div>
  );
}

export default ArchivePage;