import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

type CourseGoalLsProps = { items: { text: string; id: string }[]; onDeleteItem: (v: string) => void };
const CourseGoalList = ({ items, onDeleteItem }: CourseGoalLsProps) => {
  return (
    <ul className="goal-list">
      {items.map(goal => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
