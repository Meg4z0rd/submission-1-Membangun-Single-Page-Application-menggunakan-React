import { useParams, useNavigate } from "react-router-dom";

function DetailPage({ notes, onDelete, onArchive }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = notes.find(n => n.id.toString() === id.toString());

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

return (
  <div className="detail-page">
    <h1>{note.title}</h1>
    <p>{new Date(note.createdAt).toLocaleDateString()}</p>
    <p>{note.body}</p>

    {/* FLOATING BUTTON */}
    <div className="floating-action">
      <button
        className="archive-btn"
        onClick={() => {
          onArchive(id);
          navigate("/");
        }}
      >
        {note.archived ? "↩️" : "📦"}
      </button>

      <button
        className="delete-btn"
        onClick={() => {
          onDelete(id);
          navigate("/");
        }}
      >
        🗑️
      </button>
    </div>
  </div>
);
}

export default DetailPage