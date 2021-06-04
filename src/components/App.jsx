import React, { useState } from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

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
     <div className="top">
     <h1>
        <span>Emojipedia🙂</span>
      </h1>
      <input type="text" placeholder="Search Emoji..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
     </div>
      
      <dl className="dictionary">
        {emojipedia.filter(EmojiDataFilter).map(EmojiData)}
      </dl>
      
    </div>
  );
}

export default App;
