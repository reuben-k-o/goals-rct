import { ChangeEvent, useState } from "react";

import Button from "../../UI/Button/Button";
import st from "./CourseInput.module.css";
type CourseInputProps = { onAddGoal: (v: string) => void };
const CourseInput = ({ onAddGoal }: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    if (event.target.value.length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
  };

  console.log(isValid);

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${st["form-control"]} ${!isValid && st.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
