import React, { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import Sortable from "sortablejs";

//Todo 리스트 영역 스타일
const TodoListContainer = styled.ul`
  flex-direction: column;
  padding: 0 20px;
  margin: 20px 0;
  overflow: auto;
  display: flex;
  height: 100%;
`;

export function TodoList() {
    const [todos, setTodos] = useState();
    const ulRef = useRef(null);
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

    //DOM 요소에 접근하여 TodoListContainer를 연결한다. 이 요소는 ul로 Sortable 사용에 사용할 수 있다.
    useEffect(() => {
      if (ulRef.current) {
        new Sortable(ulRef.current);
      }
    }, []);

  return (
    <TodoListContainer className="todo_list" ref={ulRef}>
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
