import styled from "styled-components";

export const CommentItem = styled.div`
  border-radius: 10px;
  display: block;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
  height: 100px;
  background-color: ${(props) => props.theme.iconColor};
  box-shadow: 0px 2px 5px ${(props) => props.theme.shadowColor};
  @media (max-width: 1008px) and (min-width: 576px) {
    height: 30px;
  }
  @media (max-width: 576px) {
    height: 30px;
  }
`;

export const CommentText = styled.div`
  display: flex;
  height: 30px;
  color: ${(props) => props.theme.WhiteAndBlack};
  font-family: "Roboto";
  font-size: ${(props) => props.theme.textSizeTextM};
  align-items: center;
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM700};
  }
  @media (max-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
  }
  @media (max-width: 1008px) and (min-width: 576px) {
    height: 30px;
  }
  @media (max-width: 576px) {
    height: 30px;
  }
`;

export const CommentContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 1008px) and (min-width: 576px) {
    height: 30px;
  }
  @media (max-width: 576px) {
    height: 30px;
  }
`;

export const UserName = styled.div`
    color: ${(props) => props.theme.WhiteAndBlack};
    display: flex;
    height: 30px;
    font-family: 'Roboto';
    font-size: ${(props) => props.theme.textSizeTextL};
    align-items: center;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${(props) => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${(props) => props.theme.textSizeTextM500};
    }
    .highlightedUserName {
        color: ${(props) => props.theme.WhiteAndBlack}
        font-weight: bold; 
        padding:0px 3px 0px 3px;
    }
    @media (max-width: 1008px) and (min-width: 576px) {
    height: 30px;
  }
  @media (max-width: 576px) {
    height: 30px;
  }

`;

export const deleteButton = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  font-size: 24px;
`;