import Header from "./header";
import Footer from "./footer";
import Note from "./note";
function App() {
  return (
    <div className="App">
      <Header />
      <Note title="Title1" content="content1" />
      <Note title="Title2" content="content2" />
      <Footer />
    </div>
  );
}

export default App;
