import PropTypes from "prop-types";
function Display({ displayValue, displayExpression }) {
  return (
    <div className="display">
      <input
        className="display_QS"
        type="text"
        readOnly
        value={displayExpression}
      />
      <input
        className="display_Input_Output"
        type="text"
        value={displayValue}
        readOnly
      />
    </div>
  );
}
Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
  displayExpression: PropTypes.string.isRequired,
};
export default Display;
