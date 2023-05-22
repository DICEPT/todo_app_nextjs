import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import TodoItem from "./TodoItem";

//Todo 리스트 영역 스타일
const TodoListContainer = styled.div`
  flex-direction: column;
  overflow: auto;
  display: flex;
  height: 100%;
  margin: 20px;
`;

export function TodoList() {
    const [todos, setTodos] = useState();
    const dels = useState()

    //useEffect는 랜더링될때마다 매번 실행됨
    useEffect(() => {
      (async () => {
        try { 
        const res = await (
          await fetch(
          "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
          {
            method: "GET",
            headers: {
              'content-type': 'application/json',
              'apikey': 'KDT5_nREmPe9B',
              'username': 'KDT5_ParkChoulMin'
            },
          }
        )
        ).json();
        setTodos(res);
        } catch (error) {
          console.log('리스트 통신 오류')
        }
      })();
    }, [dels]); //[]안의 벨류를 통해 최신 랜더링 요청 추후 기능 수정

  return (
    <TodoListContainer>
      {todos && todos.map((todo) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          done={todo.done}
        />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
