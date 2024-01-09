import React from "react";
import MakeNotes from "./components/MakeNotes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="note-app__body">
        <MakeNotes />
        <hr />
      </div>
      <div className="note-app__footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
