import { VFC, useState } from "react";
// import { Task } from "../types";

const TaskInput: VFC = () => {
  const [inputTitle, setInputTitle] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  return (
    <div className="input-form">
      <div className="inner">
        <input
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button className="btn is-primary">追加</button>
      </div>
    </div>
  );
};

export default TaskInput;
