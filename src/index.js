import React, { useState } from "react";
import ReactDOM from "react-dom";

function Toggle() {
  const [isOn, setIson] = useState("ON");

  function handleClick(prevalue) {
    setIson((prevalue) => {
      if (prevalue === "ON") {
        setIson("OFF");
      } else {
        setIson("ON");
      }
    });
  }

  return <button onClick={handleClick}>{isOn}</button>;
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
