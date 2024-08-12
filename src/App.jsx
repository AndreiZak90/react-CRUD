import { useState, useRef, useEffect } from "react";
import "./App.css";
import BoxNodes from "./Components/BoxNodes";
import NewNote from "./Components/NewNote";
import UpdateNodeBox from "./Components/UpdateNoteBox";
const URL = "http://localhost:7070/notes";

function App() {
  const [notes, setNotes] = useState({ notes: [] });
  const get = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setNotes((prevState) => ({ ...prevState, notes: data })));
  };
  const post = (textValue) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(textValue),
    }).then((res) => {
      if (res.status === 204) {
        get();
      }
    });
  };

  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      get();
    }
  }, []);

  return (
    <>
      <div className="container">
        <UpdateNodeBox fun={get} />
        <BoxNodes not={notes} fun={get} />
        <NewNote fn={post} />
      </div>
      <div className="link_rek">
        <a target="_blank" href="https://icons8.com/icon/REaAov7RbGMN/update">
          Обновить
        </a>{" "}
        иконка от{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </>
  );
}

export default App;
