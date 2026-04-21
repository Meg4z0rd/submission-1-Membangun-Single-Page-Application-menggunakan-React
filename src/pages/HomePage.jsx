import { Link } from "react-router-dom";
import { useState } from "react";
import NoteList from "../components/NoteList";
import EmptyMessage from "../components/EmptyMessage";
import SearchBar from "../components/SearchBar";

function HomePage({ notes }) {

  // 🔹 STATE untuk search
  const [keyword, setKeyword] = useState("");

  // 🔹 FILTER data (aktif + search)
  const filteredNotes = notes
    .filter(note => !note.archived)
    .filter(note =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );

return (
  <div className="container">
    <h2>Daftar Catatan</h2>

    <SearchBar keyword={keyword} onChange={setKeyword} />

    {filteredNotes.length === 0 ? (
      <EmptyMessage message="Tidak ada catatan" />
    ) : (
      <NoteList notes={filteredNotes} />
    )}
  </div>
);
}

export default HomePage;