import { styled } from "styled-components";
import React from "react";

//Todo 헤드 영역 스타일
const TodoHeadContainer = styled.div`
  border-bottom: 1px solid #ECECEC;
  flex-direction: column;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-top: 20px;
  display: flex;
  div {
    display: flex;
  }
  .date_str {
    font-family: sans-serif ;
    font-weight: 700;
    font-size: 45px;
  }
  .day_name {
    background-color: #EE4242;
    justify-content: center;
    font-family: sans-serif;
    padding: 6px 0 2px 0;
    border-radius: 5px;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
    width: 110px;
  }
`;

//날짜 데이터를 표시되는 컴포넌트
function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <TodoHeadContainer>
      <div className="date_str">{dateString}</div>
      <div className="day_name">{dayName}</div>
    </TodoHeadContainer>
  );
}

export default TodoHead;
