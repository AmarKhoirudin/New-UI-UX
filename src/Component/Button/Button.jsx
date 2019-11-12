import React from "react";
import PropTypes from "prop-types"

const ButtonText = ({onClick, textButton, classButton }) => {
  return (
    <div>
      <button onClick={onClick} className={classButton}>{textButton}</button>
    </div>
  );
};

ButtonText.propTypes = {
    onClick : PropTypes.func,
    classButton : PropTypes.string,
    textButton : PropTypes.string
}

ButtonText.defaultProps = {
    textButton : "Kosong"
}
export default ButtonText;
