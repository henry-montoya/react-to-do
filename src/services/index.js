import fetch from "isomorphic-fetch";

const getTasks = async () => {
  const response = await fetch("https://practiceapi.devmountain.com/api/tasks");
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return data;
};

const addTask = async todo => {
  const response = await fetch(
    "https://practiceapi.devmountain.com/api/tasks",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return data;
};

const deleteTask = async id => {
  const response = await fetch(
    "https://practiceapi.devmountain.com/api/tasks/" + id,
    {
      method: "delete"
    }
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return data;
};

const toggleComplete = async id => {
  const response = await fetch(
    "https://practiceapi.devmountain.com/api/tasks/" + id,
    {
      method: "put"
    }
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return data;
};

const updateTask = async todo => {
  const response = await fetch(
    "https://practiceapi.devmountain.com/api/tasks/" + todo.id,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return data;
};

export { getTasks, addTask, deleteTask, toggleComplete, updateTask };
