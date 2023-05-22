import { styled, css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import React from "react";

const InsertFormContainer = styled.div``;
const InsertForm = styled.form`
  background-color: #F7F7F7;
  margin: 0 20px 8px 20px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
`;

const Input = styled.input`
  padding-left: 15px;
  font-weight: 400;
  transition: 0.2s;
  font-size: 24px;
  display: flex;
  height: 50px;
  width: 100%;
  border: 0;
  outline: 0;
`;

const ToggleBtn = styled.button`
  background-color: #EE4242;
  margin: 0 20px 18px 20px;
  border-radius: 10px;
  transition: 0.2s;
  padding: 10px 0;
  display: flex;
  outline: 0;
  border: 0;
  .add_icon {
    color: #ffffff;
    font-size: 50px;
    margin: auto;
  }
  &:hover {
    background-color: #D91D1D;
  }
  //해당 props는 open의 상태가 open이면(즉 true이면) 실행된다.
  ${(props) =>
    props.open &&
    css`
      background: #F69292;
      &:hover {
        background-color: #D91D1D;
      }
    `}
`;

function TodoCreate() {
  //현재 useState()의 기본값으로 false를 넣어서 텍스트 입력창이 보이지 않는다.
  //해당 부분이 open이 되면 true로 텍스트 입력창이 보이게 된다.
  const [open, setOpen] = useState(false); 
  const [value, setValue] = useState("");

  //API URL로 할일 데이터를 전송하는 영역
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT5_nREmPe9B',
          'username': 'KDT5_ParkChoulMin'
        },
        body: JSON.stringify({
          title: value
        })
      });
      setValue("");
      setOpen(false);
      nextId.current += 1;
    } catch (error) {
      console.error(error);
    }
  };

  //토글버튼을 함수로 만들어 사용한다.
  const onToggle = () => {
    //기본값이 false인 상태에서 !open를 실행하면 false는 true가 된다.
    //또 버튼을 누르면 true는 !open로 인하여 false가 되어 토글버튼 방식이 되는 것이다.
    setOpen(!open); 
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {open && (
        <InsertFormContainer>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일 입력후 ENTER"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormContainer>
      )}
      <ToggleBtn onClick={onToggle} open={open}>
        <MdAdd className="add_icon" />
      </ToggleBtn>
    </>
  );
}

export default TodoCreate;
