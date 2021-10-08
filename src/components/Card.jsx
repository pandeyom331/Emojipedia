import React from "react";
import style from "./Card.module.css";

function Card(props) {
  return (
      <div className={style.card}>
        <dt>
          <span className={style.emoji} role="img" aria-label="Tense Biceps">
            <img src={props.emoji} alt="Emoji"/>
          </span>
          <span className = {style.emojiName}>{props.name}</span>
        </dt>
        <dd className = {style.emojiDes}>
          {props.meaning}
        </dd>
      </div>
    );
}

export default Card;