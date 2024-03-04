import React from "react";

export default function Header(props) {
   const [isShown, setShown] = React.useState(false);

   function toggleShown() {
    console.log(isShown)
      setShown(prevShown => !prevShown);
   }
   

   return (
      <div>
         {props.text && <h3>{props.text}</h3>}
         {isShown && props.sub && <p>{props.sub}</p>}
         {isShown && <button onClick={toggleShown}>hide Punchline</button>}
         {!isShown && <button onClick={toggleShown}>Show Punchline</button>}
         <hr />
      </div>
   );
}