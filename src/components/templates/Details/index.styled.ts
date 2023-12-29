import styled from 'styled-components';

export const Details = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;
export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin: 50px 0px;
    align-items: center;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
    & a{
        font-family: Roboto;
        font-size:  ${props => props.theme.textSizeTitle};
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover{
            transition: 0.3s;
            color: ${props => props.theme.accentColor1};
        }
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 2fr ;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
    }
    @media (max-width: 992px) and (min-width: 768px)  {     
    }
    @media (max-width: 768px) and (min-width: 576px)  {    
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    object-fit: cover;
    opacity: 0.3;
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;
export const Img = styled.img`
    aspect-ratio: 1/1/5;
    display: flex;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 3px 5px ${props=>props.theme.shadowColor};;
    margin: 0px 0px 20px 0px;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }

`;

export const Button = styled.a`
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    color:white;
    background-color: aqua;
    border: 0px;
    border-radius:10px;
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.9;
    }
`;
export const DownloadButton = styled(Button)`
    background-color: ${props=>props.theme.accentColor1};
`;
export const WatchButton = styled(Button)`
    background-color:${props=>props.theme.accentColor2};
`;

export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`;

export const Title = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 500;
    color: #fff;
    width: 100%;
  align-items: center;
  align-self: center;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  border-top: 1px solid rgb(80,195,233);
  border-bottom: 1px solid rgb(80,195,233);
  padding: 20px 0px;
  box-sizing: border-box;
`;

export const TitleRating = styled.div`
    display: flex;
    flex-direction: column
    align-items: baseline;
    flex-direction: column;
    line-height: 40px;
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
    font-size: 16px;
    font-size: 32px;
    font-weight: 700;
    
`;

export const TitleRatingNumber = styled.div`
    display: flex;
    align-items: center;
    line-height: 40px;
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
    font-size: 16px;
    color: #3bb33b;
    font-size: 32px;
    font-weight: 700;
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
    line-height: 40px;
`;

export const TitleRatingCount = styled.div`
    display: flex;
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
    font-size: 16px;
    line-height: 40px;
    margin-inline-start: 0;
    color: hsla(0,0%,100%,.6);
    font-size: 13px;
    line-height: 18px;
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
}
`;

export const GenresT = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: #fff;


`;
export const DescriptionFull = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 25px;
    letter-spacing: 1px;
    color: #fff
`;
export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: 100px 100px;
    grid-gap:10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
`;
export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;



export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;
export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const CommentsTitle = styled.div`
    display:inline-block;
    vertical-align:top;
    margin-right:10px;
    padding-left:10px;
    font-size:24px;
`;

export const Comments = styled.div`
    class: h-full;
    margin-bottom:20px;
    padding-top:20px;
`;

export const CommentsRow = styled.div`
    flex-flow: row-reverse nowrap;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    
    border: 1.2px solid ${props=>props.theme.accentColor1};
    border-radius: 6px;
    padding: 10px 10px 10px 20px
`;

export const CurrentComments = styled.div`
    width: 48%;
`;

export const AddComment = styled.div`
    width: 85%;
`;

export const InputName = styled.input`
    display: flex;
    padding: 13px 16px 13px 20px;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 32px;
    caret-color: #f50;
    width: 100%;
    letter-spacing: 1px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 8px;
`;



export const InputComment = styled.textarea`
    display: flex;
    padding: 13px 16px 13px 20px;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 32px;
    width: 100%;
    height: 400px;
    caret-color: #f50;
    letter-spacing: 1px;
    margin-bottom: 10px;
    resize: none;
    margin-top: 10px;
    border-radius: 8px;
`;


export const SubmitCommentButton = styled(Button)`
    background-color: ${props=>props.theme.accentColor1};
    margin: 13px 16px 13px 0px;
    width: 340px
`;

export const CommentItem = styled.div`
  background-color: ${(props) => props.theme.CardColor};
  padding: 8px 20px 8px 20px;
  margin-bottom: 8px;
  border-radius: 4px;
`;

export const UserCommentsText = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.textSizeTitle};
  letter-spacing: 1px;
  font-weight: 700;
  width: 100%;
  justify-content: start;
  margin: 30px 0px 30px 0px;
  text-align: start;
`;

export const CommentSection = styled.div`
  margin: 15px;
  margin-bottom: 24px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentTextarea = styled.textarea`
  margin-bottom: 8px;
  border-radius: 4px;
  resize: none;
`;

export const UserNameInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: ${(props) => props.theme.textSizeTextL700};
`;

export const CommentText = styled.ul`
  font-weight: 500;
  list-style: none;
  padding: 0;
  font-size: ${(props) => props.theme.textSizeTextL700};
`;

export const TextArea = styled.textarea`
  width: 99.5%;
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;

export const CommentSubmitButton = styled.button`
cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    color:white;
    border: 0px;
    border-radius:10px;
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.9;
    }
    background-color: ${props=>props.theme.accentColor1};
    margin: 13px 16px 13px 0px;
`;

export const Info = styled.div`
    display: block;
    padding-inline-start: 9px;
    padding-inline-end: 9px;
`;

export const InfoTitle = styled.div`
    display: flex;
    color: #fff;
    justify-content: space-between;
    -webkit-margin-after: 16px;
    margin-block-end: 16px;
    align-items: baseline;
    color: rgb(255, 255, 255);
    font-family: Graphik Kinopoisk LC Web, Tahoma, Arial, Verdana, sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;

`;

export const InfoDescriptions = styled.div`
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
    font-size: 16px;
    line-height: normal;
    color: #000;
    --quality-sticker-dark-additional-color: #fff;
    line-height: normal
`;

export const InfoDescriptionsItem = styled.div`
    border-block-end-color: hsla(0,0%,100%,.1);
    display: flex;
    align-items: baseline;
    padding-block-start: 8px;
    padding-block-end: 8px;
    padding-inline-start: 0;
    padding-inline-end: 0;
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
    font-size: 16px;
    line-height: normal;
`;

export const InfoDescriptionsItemTitle = styled.div`
    color: hsla(0,0%,100%,.6);
    width: 160px;
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
    font-size: 13px;
    line-height: 18px;

`;

export const InfoDescriptionsIteminfo = styled.div`
    color: rgb(255, 255, 255);
    flex: 1;
    font-family: Graphik Kinopoisk LC Web,Tahoma,Arial,Verdana,sans-serif;
    font-size: 13px;
    line-height: 18px;
    
`;