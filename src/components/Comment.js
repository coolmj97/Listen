import React, { useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CommentList from './CommentList';

const Section = styled.section`
  padding: 12px;
  margin: 24px;
  background-color: #333333;
  border-radius: 8px;
`;

const Title = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 18px;
`;

const Ul = styled.ul`
  padding: 0 12px;
  background-color: #333333;
  list-style: none;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-right: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fcfaf9;
  color: #fcfaf9;
  font-family: 'Pretendard-Regular';
  &:focus {
    outline: none;
    border-bottom: 1px solid #48e5c2;
  }
  ::placeholder {
    font-family: 'Pretendard-Regular';
  }
`;

const SubmitButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

const ButtonImg = styled.img`
  width: 30px;
  height: 30px;
`;

const Comment = ({ comments, onSubmit }) => {
  const inputRef = useRef();
  const ulRef = useRef();

  return (
    <Section>
      <Title>댓글</Title>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef.current.value !== '') {
            let userValue = inputRef.current.value;
            onSubmit(userValue);
            inputRef.current.value = '';
            ulRef.current.scrollIntoView();
          }
        }}
      >
        <Input type="text" placeholder="감상평을 남겨주세요" ref={inputRef} />
        <SubmitButton type="submit">
          <ButtonImg src="./assets/image/edit.png" alt="등록" />
        </SubmitButton>
      </Form>

      <Ul ref={ulRef}>
        {comments.map((comment) => (
          <CommentList key={comment.id} id={comment.id} text={comment.text} />
        ))}
      </Ul>
    </Section>
  );
};

function mapStateToProps(store) {
  return {
    comments: store.handleComment,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (userValue) =>
      dispatch({
        type: 'SUBMIT',
        id: Date.now(),
        text: userValue,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
