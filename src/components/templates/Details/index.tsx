import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull, VscCommentDiscussion } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import { CommentsList } from "./CommentsItem/CommentsList";
import { CommentPropsI } from "./CommentsItem/CommentsList";


import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";

import { IComments } from "./CommentsItem/types";
import { useEffect, useState } from "react";
import { CommentProps } from "./CommentItem/CommentItem";

import CommentItem from "./CommentItem/CommentItem";

const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || "",
  );

  const [comments, setComments] = useState<CommentPropsI[]>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const pageKey = window.location.href;
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
    return [];
  });

  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentNull, setCommentNull] = useState("");

  function checkComments(){
    if (comments.length===0){
      setCommentNull('your comment may be the first')
    }
    else{
      setCommentNull('NO')
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const pageKey = window.location.href;
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments, commentNull]);

  if (isLoading) {
    return <Loader />;
  }


  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });

  function commentsListF() {
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (userName.trim() !== "" && commentText.trim() !== "") {
        const currentDate = new Date().toLocaleDateString();
        const newComment: CommentPropsI = {
          id: comments.length + 1,
          userName: userName,
          commentText: commentText,
          time: currentDate,
        };
        setComments([...comments, newComment]);
        setUserName("");
        setCommentText("");
        
      } else {
        alert(
          "Please enter both your user name and comment before submitting.",
        );
      }
    }

    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    function handleCommentTextChange(
      event: React.ChangeEvent<HTMLTextAreaElement>,
    ) {
      setCommentText(event.target.value);
    }

    const commentItems = comments.map((comment) => (
      <CommentsList
        key={comment.id}
        id={comment.id}
        userName={comment.userName}
        commentText={comment.commentText}
        time={comment.time}
        comments={comments}
        setComments={setComments}
      />
    ));
    return (

      <Style.Comments>
        <Style.CommentForm onSubmit={addComment}>
              <Style.CommentsTitle>{commentNull}Comments:</Style.CommentsTitle>
              
              <Style.CommentsRow>
              {commentItems.length > 0 ? (
            <div>{commentItems}</div>
          ) : (
            <div>Your comment may be the first</div>
          )}
                <Style.AddComment>
                  <Style.InputName placeholder="Name"
                    value={userName}
                    onChange={handleUserNameChange}>
                  </Style.InputName>

                  <Style.InputComment placeholder="Comment"
                  value={commentText}
                  onChange={(e) => handleCommentTextChange(e)}>
                  </Style.InputComment>
                  <Style.CommentSubmitButton>SUBMIT COMMENT</Style.CommentSubmitButton>
                  

                  
                </Style.AddComment>
                
              </Style.CommentsRow>
              </Style.CommentForm>
            </Style.Comments>
    );
  }
  return (

    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>Films / {filmRetrieve?.data.movie.title}</Link>

        </Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>

            {/* <Style.Statistic>
              <StatisticItem
                icon={<VscStarFull />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              
            </Style.Statistic> */}
          </Style.Image>

          <Style.Description>
            <Style.Title>
              {filmRetrieve?.data.movie.title}
              <Style.TitleRating>
                <Style.TitleRatingNumber>
                  {filmRetrieve?.data.movie.rating}
                </Style.TitleRatingNumber>
                <Style.TitleRatingCount>
                  {filmRetrieve?.data.movie.runtime} ratings
                </Style.TitleRatingCount>
              </Style.TitleRating>
            </Style.Title>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full.length === 0? 'No short description:(' :filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>

            <Style.GenresT>
              {"Genres:"}
            </Style.GenresT>
            <Style.Genres>{genresList}</Style.Genres>
            
            <Style.TorrentsTitle></Style.TorrentsTitle>
            <Style.Info>
              <Style.InfoTitle>About films</Style.InfoTitle>
              <Style.InfoDescriptions>
                
                <Style.InfoDescriptionsItem>
                  <Style.InfoDescriptionsItemTitle>
                    Production year:
                  </Style.InfoDescriptionsItemTitle>
                  <Style.InfoDescriptionsIteminfo>
                    {filmRetrieve?.data.movie.year} year
                  </Style.InfoDescriptionsIteminfo>
                </Style.InfoDescriptionsItem>

                <Style.InfoDescriptionsItem>
                  <Style.InfoDescriptionsItemTitle>
                    Move title:
                  </Style.InfoDescriptionsItemTitle>
                  <Style.InfoDescriptionsIteminfo>
                    {filmRetrieve?.data.movie.title? filmRetrieve?.data.movie.title: '-'}
                  </Style.InfoDescriptionsIteminfo>
                </Style.InfoDescriptionsItem>

                <Style.InfoDescriptionsItem>
                  <Style.InfoDescriptionsItemTitle>
                    Full title of the film:
                  </Style.InfoDescriptionsItemTitle>
                  <Style.InfoDescriptionsIteminfo>
                    {filmRetrieve?.data.movie.title_long}
                  </Style.InfoDescriptionsIteminfo>
                </Style.InfoDescriptionsItem>

                <Style.InfoDescriptionsItem>
                  <Style.InfoDescriptionsItemTitle>
                    Download count:
                  </Style.InfoDescriptionsItemTitle>
                  <Style.InfoDescriptionsIteminfo>
                    {filmRetrieve?.data.movie.download_count? filmRetrieve?.data.movie.download_count: '0'}
                  </Style.InfoDescriptionsIteminfo>
                </Style.InfoDescriptionsItem>

                <Style.InfoDescriptionsItem>
                  <Style.InfoDescriptionsItemTitle>
                    Summary:
                  </Style.InfoDescriptionsItemTitle>
                  <Style.InfoDescriptionsIteminfo>
                    {filmRetrieve?.data.movie.summary? filmRetrieve?.data.movie.summary: '0'}
                  </Style.InfoDescriptionsIteminfo>
                </Style.InfoDescriptionsItem>

                <Style.InfoDescriptionsItem>
                  <Style.InfoDescriptionsItemTitle>
                    language:
                  </Style.InfoDescriptionsItemTitle>
                  <Style.InfoDescriptionsIteminfo>
                    {filmRetrieve?.data.movie.language}
                  </Style.InfoDescriptionsIteminfo>
                </Style.InfoDescriptionsItem>

              </Style.InfoDescriptions>
            </Style.Info>
          </Style.Description>
        </Style.Data>
        <Style.CommentItem>{commentsListF()}</Style.CommentItem>
      </Style.Content>
      
    </Style.Details>
    
  );
};

export default Details;
