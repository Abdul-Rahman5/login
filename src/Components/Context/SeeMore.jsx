import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
 export let moreContext = createContext("");
function SeeCotextProvider(props) {

    const [count, setCount] = useState(18)
    function SeeMoreGame() {
        setCount(count+18);
    }

  return (
    <moreContext.Provider value={{ count, SeeMoreGame }}>
      {props.children}
    </moreContext.Provider>
  );
}
export default SeeCotextProvider