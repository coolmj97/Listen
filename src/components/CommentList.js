import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Li = styled.li`
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(even) {
    background-color: #333333;
  }
`;

const DelButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

const ButtonImg = styled.img`
  width: 20px;
  height: 20px;
`;

const CommnetList = ({ id, text, onDelBtn }) => {
  return (
    <Li id={id}>
      {text}

      <DelButton type="button" onClick={() => onDelBtn(id)}>
        <ButtonImg src="./assets/image/close.png" alt="삭제" />
      </DelButton>
    </Li>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onDelBtn: (id) =>
      dispatch({
        type: 'DELETE',
        id,
      }),
  };
}

export default connect(null, mapDispatchToProps)(CommnetList);
