import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPage({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    onAdd({
      id: +new Date() + "",
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    });

    navigate("/");
  }

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Tambah Catatan</h2>

        <input
          type="text"
          placeholder="Judul catatan..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Isi catatan..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="6"
        />

        <button type="submit">Tambah Catatan</button>
      </form>
    </div>
  );
}

export default AddPage;