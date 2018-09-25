import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormLabel from "@material-ui/core/FormLabel";
import "./TodoEdit.css";

const TodoEdit = props => {
  return (
    <div className="todo-edit-form">
      <div>
        <TextField
          required
          className="todo-edit-input"
          name="editTitle"
          type="text"
          onFocus={
            !props.editTitleMode &&
            (() => props.startEditTitle(props.task.title))
          }
          margin="dense"
          onChange={props.handleChange}
          value={
            props.task && !props.editTitleMode
              ? props.task.title
              : props.editTitle
          }
        />
      </div>
      <div>
        <TextField
          className="todo-edit-input"
          name="editDescription"
          type="text"
          onFocus={
            !props.editDescriptionMode &&
            (() => props.startEditDescription(props.task.description))
          }
          multiline
          type="textarea"
          label="Add details..."
          margin="dense"
          onChange={props.handleChange}
          value={
            props.task && !props.editDescriptionMode
              ? props.task.description
              : props.editDescription
          }
        />
      </div>
      <div className="todo-edit-buttons">
        <FormLabel>Complete?</FormLabel>
        <Checkbox
          checked={props.completed}
          onChange={() =>
            props.handleUpdateComplete(props.task.id, props.task.completed)
          }
        />
        <IconButton aria-label="Delete">
          <DeleteIcon onClick={() => props.handleDeleteTask(props.task.id)} />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoEdit;
