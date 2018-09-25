import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import ToMain from "./ToMain";
import TodoEdit from "./TodoEdit";
import ButtonGroup from "./ButtonGroup";
import { loadTasks, deleteTask, updateTask } from "../../actions";
import "./EditPage.css";

class EditPage extends React.Component {
  state = {
    editTitle: "",
    editDescription: "",
    editTitleMode: false,
    editDescriptionMode: false
  };

  componentDidMount() {
    this.props.loadTasks();
  }

  handleChange = e => {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({
      [key]: val
    });
  };

  startEditTitle = initialTitle => {
    this.setState({
      editTitle: initialTitle,
      editTitleMode: true
    });
  };

  startEditDescription = initialDescription => {
    this.setState({
      editDescription: initialDescription,
      editDescriptionMode: true
    });
  };

  //cancels edits and return title and description to previous string
  cancelEdit = () => {
    this.setState({
      editTitleMode: false,
      editDescriptionMode: false,
      editTitle: "",
      editDescription: ""
    });
  };

  handleUpdateTask = () => {
    let update = {
      id: parseInt(localStorage.getItem("taskId"), 10)
    };
    if (this.state.editTitleMode) {
      update.title = this.state.editTitle;
    }
    if (this.state.editDescriptionMode) {
      update.description = this.state.editDescription;
    }
    this.props.updateTask(update);
    this.setState({
      editTitleMode: false,
      editDescriptionMode: false
    });
    this.props.history.push("/todo");
  };

  handleUpdateComplete = (id, completed) => {
    let update = {
      id,
      completed: !completed
    };
    this.props.updateTask(update);
  };

  handleDeleteTask = id => {
    this.props.deleteTask(id);
    this.props.history.push("/todo");
  };

  render() {
    //loops through array of tasks to find index of task which has id that matches id in url parameter
    //this keeps local storage in sync with url in case id in url is adjusted manually by user
    let currentId = this.props.match.params.id;
    let taskArray = this.props.tasks;
    for (let i = 0; i < taskArray.length; i++) {
      if (parseInt(taskArray[i].id, 10) === parseInt(currentId, 10)) {
        localStorage.setItem("index", i);
        break;
      }
    }
    const { tasks } = this.props;
    const index = localStorage.getItem("index");
    let completed = false;
    if (tasks && tasks[index] && tasks[index].completed) {
      completed = tasks[index].completed;
    }
    return (
      <Card className="edit-container-card">
        <ToMain />
        <TodoEdit
          {...this.state}
          completed={completed}
          task={tasks[index]}
          startEditTitle={this.startEditTitle}
          startEditDescription={this.startEditDescription}
          handleChange={this.handleChange}
          handleUpdateTask={this.handleUpdateTask}
          handleDeleteTask={this.handleDeleteTask}
          handleUpdateComplete={this.handleUpdateComplete}
        />
        <ButtonGroup
          cancelEdit={this.cancelEdit}
          handleUpdateTask={this.handleUpdateTask}
          editTitle={this.state.editTitle}
          editTitleMode={this.state.editTitleMode}
        />
      </Card>
    );
  }
}

EditPage.propTypes = {
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

function mapDispatchToProps(dispatch) {
  return {
    loadTasks: () => dispatch(loadTasks()),
    updateTask: task => dispatch(updateTask(task)),
    deleteTask: id => dispatch(deleteTask(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
