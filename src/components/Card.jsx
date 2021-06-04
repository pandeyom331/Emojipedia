import React from "react";

function Card(props) {
  return (
    
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            <img src={props.emoji} alt="Emoji"/>
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>
          {props.meaning}
        </dd>
      </div>
    );
}

export default Card;