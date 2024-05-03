function ButtonsContainer(ButtonClick) {
  let buttonClick = ButtonClick.ButtonClick;
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "DEL",
    "0",
    ".",
  ];
  return (
    <div className="buttonContainer">
      {buttonNames.map((buttonName) => {
        return (
          <button
            key={buttonName}
            className="button"
            onClick={() => {
              buttonClick(buttonName);
            }}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
}
export default ButtonsContainer;
