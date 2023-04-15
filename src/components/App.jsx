import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import NoteList from "../notes";

function App() {
  return (
    <div className="App">
      <Header />
      {NoteList.map(note =>
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
