import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>TO DOS</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
      <hr />

      <h2>Doing</h2>
      <ul>
        {doing.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
      <hr />

      <h2>Done</h2>
      <ul>
        {done.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;
