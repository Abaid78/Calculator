import "./App.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [inputExpression, setInputExpression] = useState("");

  function onButtonClick(buttonText) {
    if (buttonText === "C") {
      setDisplayValue("");
      setInputExpression("");
    } else if (buttonText === "=") {
      setInputExpression(displayValue);
      let result = eval(displayValue);
      setDisplayValue(result.toString());
    } else if (buttonText === "DEL") {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      let newDisplayValue = displayValue + buttonText;
      setDisplayValue(newDisplayValue);
    }
  }
  return (
    <div className="calculator">
      <Display
        displayValue={displayValue}
        displayExpression={inputExpression}
      ></Display>
      <ButtonsContainer ButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
