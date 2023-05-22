import { styled } from "styled-components";
import React from "react";

//화면 중앙에 Todo 컨테이너 영역 스타일
const TodoContainer = styled.div`
  background-color: azure;
  flex-direction: column;
  border-radius: 20px;
  position: absolute;
  display: flex;
  height: 700px;
  width: 500px;
  margin: auto;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

function TodoTemplate({ children }) {
  return <TodoContainer>{children}</TodoContainer>;
}

export default TodoTemplate;
