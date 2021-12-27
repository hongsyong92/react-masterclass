import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log("add to do", data.todo);
    setValue("todo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("todo", {
            required: "할일 적기 필수입니다.",
          })}
          placeholder="할일을 적어주세요"
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default ToDoList;
