import React, { ReactNode } from "react";

import "./CourseGoalItem.css";

type CrsItmProps = { onDelete: (v: string) => void; children: ReactNode; id: string };
const CourseGoalItem = ({ onDelete, children, id }: CrsItmProps) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
