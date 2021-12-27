import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const { value } = event.currentTarget;
//     setTodoError("");
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       setTodoError("더 길게 적으세요");
//     }
//     console.log(todo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={todo}
//           placeholder="할일을 적어주세요"
//         />
//         <button>ADD</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   );
// }

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "패스워드가 다릅니다" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "server problem" });
  };
  console.log(errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("email", {
            required: "무조건 입력해줘",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver.com 주소만 허용",
            },
          })}
          placeholder="email을 적어주세요"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "무조건 입력해줘",
            validate: {
              noNico: (value) => (value.includes("nico") ? "no nico" : true),
              noNick: (value) => (value.includes("nick") ? "no nick" : true),
            },
          })}
          placeholder="First Name 적어주세요"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "무조건 입력해줘" })}
          placeholder="Last Name 적어주세요"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "무조건 입력해줘",
            minLength: 10,
          })}
          placeholder="username 적어주세요"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "무조건 입력해줘",
            minLength: {
              value: 5,
              message: "password is too short",
            },
          })}
          placeholder="password 적어주세요"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", { required: "무조건 입력해줘" })}
          placeholder="password1 적어주세요"
        />
        <span>{errors?.password1?.message}</span>
        <button>ADD</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
