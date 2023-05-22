import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "@/components/TodoTemplate";
import TodoHead from "@/components/TodoHead";
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";

//투두리스트의 바탕색상입니다.
const GlobalStyle = createGlobalStyle`
    body {
        background-color: #202020;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate/>
      </TodoTemplate>
    </>
  );
}
export default App;
