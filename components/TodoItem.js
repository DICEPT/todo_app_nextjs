import { MdClear, MdMode } from "react-icons/md";
import { styled, css } from "styled-components";
import React, { useState } from "react";

//Todo 아이템 수정 폼 스타일
const InsertFormContainer = styled.div`
  display: flex;
`;

const InsertForm = styled.form`
  margin: auto 0 auto 50px;
  border-radius: 50px;
  position: absolute;
  overflow: hidden;
  display: flex;
  width: 325px;
  height: 39px;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

const Input = styled.input`
  padding-left: 15px;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  width: 100%;
  outline: 0;
  border: 0;
  `;

//Todo 아이템 삭제 아이콘 스타일
const Remove = styled.div`
  display: flex;
  display: none;
`;

const ClearIcon = styled.div`
    margin: 11px 15px 0px 0px;
    display: flex;
    .clear_btn {
      font-weight: 700;
      transition: 0.3s;
      font-size: 25px;
      color: #DDDDDD;
      display: flex;
      &:hover {
      color: #EE4242;
      }
  }
`;

//Todo 아이템 수정 아이콘 스타일
const Edit = styled.div`
  display: flex;
  display: none;
`;

const EditIcon = styled.div`
    margin: 13px 10px 0px 0px;
    display: flex;
    .edit_btn {
      font-weight: 700;
      transition: 0.3s;
      font-size: 20px;
      color: #DDDDDD;
      display: flex;
      &:hover {
      color: #EE4242;
      }
  }
`;

//Todo 아이템 영역 호버 스타일
const TodoItemContainer = styled.li`
  border-radius: 50px;
  position: relative;
  transition: 0.4s;
  display: flex;
  margin: 5px 0;
  height: 50px;
  &:hover {
    background-color: #F7F7F7;
    ${Remove} {
      display: initial;
      //initial 초기값은 잘 못 사용하면 다른 값을 초기화할 수 있으니 사용시 신중
    }
  }
  &:hover {
    background-color: #F7F7F7;
    ${Edit} {
      display: initial;
    }
  }
`;

//Todo 체크박스 스타일
const Check = styled.div`
  margin: auto 10px auto 5px;
  border: 3px solid #DBD5D5;
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  height: 40px;
  width: 40px;
  transition: 0.3s;
  ${(props) =>
    props.done &&
    css`
      background-color: #EE4242;
      border: none;
    `}
`;

//Todo 텍스트박스 영역 스타일
const Text = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #4D4141;
  margin: 12px 0 0 0;
  display: flex;
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: #EE4242;
    `}
`;

//ToDo 리스트의 아이템 영역으로 체크박스, 내용, 삭제 기능 포함
function TodoItem({ id, title, done }) {
  const [checked, setChecked] = useState(false); //체크 여부 상태
  //현재 useState()의 기본값으로 false를 넣어서 텍스트 입력창이 보이지 않는다.
  //해당 부분이 open이 되면 true로 텍스트 입력창이 보이게 된다.
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  //Todo 체크 기능
  const onCheck = async (e) => {
    e.preventDefault();
    //아래는 API주소로 체크 요청
    try {
      const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT5_nREmPe9B',
          'username': 'KDT5_ParkChoulMin'
        },
        body: JSON.stringify({id, title, done: !done}), //전송할 내용
      });
      setChecked(!done);
    } catch (error) {
      console.error(error);
    }
  };

  //Todo 수정 기능
  const onEdit = async (e) => {
    e.preventDefault();
    //아래는 API주소로 수정 요청
    try {
      const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT5_nREmPe9B',
          'username': 'KDT5_ParkChoulMin'
        },
        body: JSON.stringify({id, title: value, done}), //전송할 내용, 해당하는 아이디의 title 내용을 수정
      });
      setValue("");
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  //토글버튼 함수
  const onToggle = () => {
    setOpen(!open);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  //Todo 삭제 기능
  const onRemove = async (e) => { 
    e.preventDefault();
    //아래는 API주소로 삭제 요청
    try {
      const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT5_nREmPe9B',
          'username': 'KDT5_ParkChoulMin'
        },
        body: JSON.stringify({ id }),  //전송할 내용
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TodoItemContainer>
      <Check done={checked} onClick={onCheck}>
        {done}
      </Check>
      <Text done={done}>{title}</Text>
      {open && (
        <InsertFormContainer>
          <InsertForm onSubmit={onEdit}>
            <Input
              autoFocus
              placeholder="수정내용 입력후 ENTER"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormContainer>
      )}
      <Edit onClick={onToggle} open={open}>
        <EditIcon><MdMode className="edit_btn" /></EditIcon>
      </Edit>
      <Remove onClick={onRemove}>
        <ClearIcon><MdClear className="clear_btn" /></ClearIcon>
      </Remove>
    </TodoItemContainer>
  );
}

export default TodoItem
