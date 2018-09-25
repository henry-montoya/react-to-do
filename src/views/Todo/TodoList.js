import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./TodoList.css";

const TodoList = props => {
  return (
    <Card className="todo-list-card">
      {props.tasks.length < 1 && <h1 className="free-time">Free Time!</h1>}
      <List>
        {props.tasks.map((task, i) => (
          <ListItem
            key={i}
            button
            onClick={() => props.handleEditTask(task.id, i)}
          >
            <ListItemText
              primary={task.title}
              className={task.completed && "task-complete"}
            />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={() => props.toggleComplete(task.id)}
                checked={task.completed && true}
              />
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={() => props.handleDelete(task.id)} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      completed: PropTypes.boolean
    })
  )
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(TodoList);
