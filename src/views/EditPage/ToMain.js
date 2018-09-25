import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ToMain = () => {
  return (
    <div>
      <Link to={`/todo`}>
        <Button size="small">&lt; Back to Tasks</Button>
      </Link>
    </div>
  );
};

export default ToMain;
