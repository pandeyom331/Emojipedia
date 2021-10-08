import React, { useState } from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
import style from "./App.module.css";

function EmojiData(emojipedia) {
  return (<Card
    key={emojipedia.name}
    emoji={emojipedia.emoji}
    name={emojipedia.name}
    meaning={emojipedia.meaning}
  />);
}

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  function EmojiDataFilter(emojipedia) 
  {
    if(searchTerm == "")
    {
      return EmojiData;
    } 
    else if(emojipedia.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
    {
      return EmojiData;
    }
  }

  return (
    <div>
     <div className={style.top}>
     <div className = {style.headWrapper}>
      <h1 className = {style.heading}>Emojipedia</h1>
      <span className = {style.headEmoji}>🙂</span>
     </div>
      
      <input type="text" placeholder="Search Emoji"
        className = {style.input}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
     </div>
      
      <dl className={style.dictionary}>
        {emojipedia.filter(EmojiDataFilter).map(EmojiData)}
      </dl>
      
    </div>
  );
}

export default App;
