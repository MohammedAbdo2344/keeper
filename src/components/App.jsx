import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import NoteList from "../notes";

function CreateNote(note){
  return (
    <Note
      key={note.id}
      title={note.title}
      content={note.content}
    />
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      {NoteList.map(CreateNote)}
      <Footer />
    </div>
  );
}

export default App;
