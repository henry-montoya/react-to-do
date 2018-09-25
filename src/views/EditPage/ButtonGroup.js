import React from "react";
import Button from "@material-ui/core/Button";
import "./ButtonGroup.css";

const ButtonGroup = props => {
  return (
    <div className="edit-option-buttons">
      <Button
        className="edit-cancel-button"
        variant="contained"
        color="secondary"
        onClick={props.cancelEdit}
      >
        Cancel
      </Button>
      <Button
        className="edit-save-button"
        variant="contained"
        color="primary"
        onClick={props.handleUpdateTask}
        //disabled if edited title is empty string
        disabled={props.editTitleMode && !props.editTitle && true}
      >
        Save
      </Button>
    </div>
  );
};

export default ButtonGroup;
