import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  padding: 0;
  list-style: none;
`;

const ImgWrapper = styled.div`
  height: 200px;
  @media screen and (min-width: 992px) {
    height: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SlideContent = ({ playList: { id, albumArt, title }, getDetail }) => {
  return (
    <Link to={`/detail/${id}`}>
      <Li id={id} onClick={() => getDetail(id)}>
        <ImgWrapper>
          <Img src={albumArt} alt={title} />
        </ImgWrapper>
      </Li>
    </Link>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDetail: (id) =>
      dispatch({
        type: 'GET_ID',
        id: id,
      }),
  };
}
export default connect(null, mapDispatchToProps)(SlideContent);
