import React from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { loadTasks, addTask, deleteTask, toggleTask } from "../../actions";
import "./Todo.css";

class Todo extends React.Component {
  state = {
    newTodo: "",
    newDescription: "",
    showForm: false
  };

  componentDidMount() {
    //add tasks to redux store on mount
    this.props.loadTasks();
  }

  handleChange = e => {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({
      [key]: val
    });
  };

  toggleForm = () => {
    this.setState({
      newTodo: "",
      newDescription: "",
      showForm: !this.state.showForm
    });
  };

  handleAddTask = () => {
    this.props.addTask({ title: this.state.newTodo });
    //reset form after task is added
    this.setState({
      newTodo: ""
    });
  };

  handleDelete = id => {
    this.props.deleteTask(id);
  };

  toggleComplete = id => {
    this.props.toggleTask(id);
  };

  handleEditTask = (id, i) => {
    //set id and index of of task to local storage to persist through page refresh
    localStorage.setItem("index", i);
    localStorage.setItem("taskId", id);
    this.props.history.push(`/editpage/${id}`);
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-card-content">
          <div className="todo-form">
            <TodoForm
              handleChange={this.handleChange}
              toggleForm={this.toggleForm}
              handleAddTask={this.handleAddTask}
              newTodo={this.state.newTodo}
              newDescription={this.state.newDescription}
              showForm={this.state.showForm}
            />
          </div>
          <div className="todo-list">
            <TodoList
              handleDelete={this.handleDelete}
              toggleComplete={this.toggleComplete}
              handleEditTask={this.handleEditTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadTasks: () => dispatch(loadTasks()),
    addTask: task => dispatch(addTask(task)),
    deleteTask: id => dispatch(deleteTask(id)),
    toggleTask: id => dispatch(toggleTask(id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Todo);
