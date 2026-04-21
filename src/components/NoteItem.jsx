import { Link } from "react-router-dom";

function NoteItem({ note }) {
  return (
    <div className="note-item">
      <Link to={`/notes/${note.id}`}>
        <h3>{note.title}</h3>
      </Link>

      <p className="note-date">
        {new Date(note.createdAt).toLocaleDateString()}
      </p>

      <p>{note.body}</p>
    </div>
  );
}

export default NoteItem;