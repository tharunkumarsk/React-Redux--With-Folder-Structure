import React from "react";

export default function List(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <label className={item.complete ? "strike" : null}>
            <input
              className={item.complete === undefined ? "hide" : null}
              type="checkbox"
              onClick={event => props.toggle && props.toggle(item.id, event)}
            />

            {item.name}
          </label>
          <button onClick={() => props.remove(item)}>X</button>
        </li>
      ))}
    </ul>
  );
}
