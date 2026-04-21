import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';
import ArchivePage from './pages/ArchivePage';
import { useState } from 'react';
import initialData from './utils/data';
import Navbar from "./components/Navbar";

function App() {


  function handleAdd(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function handleDelete(id) {
  setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
}

function handleToggleArchive(id) {
  setNotes((prevNotes) => prevNotes.map(note => note.id.toString() === id.toString()? { ...note, archived: !note.archived }: note
    )
  );
}
  const [notes, setNotes] = useState(initialData);
  return(
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage notes={notes} />} />
    <Route path="/notes/new" element={<AddPage onAdd={handleAdd} />} />
    <Route path="*" element={<NotFoundPage />} />  
    <Route path="/notes/:id" element={<DetailPage notes={notes} onDelete={handleDelete}onArchive={handleToggleArchive} />} />
    <Route path="/archives" element={<ArchivePage notes={notes} />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App; 