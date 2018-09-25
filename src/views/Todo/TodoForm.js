import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./TodoForm.css";

const TodoForm = props => {
  return (
    <Card className="todo-form-card">
      <h1 className="todo-form-heading">To Do</h1>
      {!props.showForm && (
        <Button
          className="todo-add-button"
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={props.toggleForm}
        >
          <AddIcon />
        </Button>
      )}
      {props.showForm && (
        <React.Fragment>
          <div>
            <TextField
              className="todo-input"
              name="newTodo"
              type="text"
              label="What do you need to do?"
              margin="dense"
              onChange={props.handleChange}
              value={props.newTodo}
            />
          </div>
          <div className="todo-option-buttons">
            <Button
              className="todo-add-button"
              variant="contained"
              color="primary"
              onClick={props.handleAddTask}
              //disable button if newTodo is falsey to prevent empty string for title in POST
              disabled={!props.newTodo && true}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={props.toggleForm}
            >
              Cancel
            </Button>
          </div>
        </React.Fragment>
      )}
    </Card>
  );
};

export default TodoForm;
