import React, { useState, useEffect } from "react";
import * as Style from "./index.styled";
import { FaTrashAlt } from "react-icons/fa";

export type CommentProps = {
  id: number;
  userName: string;
  commentText: string;
  time: string; // Corrected type for time
};

const CommentItem: React.FC<
  CommentProps & {
    comments: CommentProps[];
    setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>;
  }
> = ({ id, userName, commentText, time, comments, setComments }) => {
  const [localComments, setLocalComments] = useState<CommentProps[]>(comments);

  const handleDelete = () => {
    const updatedComments = localComments.filter(
      (comment) => comment.id !== id,
    );
    setLocalComments(updatedComments);
    setComments(updatedComments);
  };

  return (
    <Style.CommentItem>
      <Style.CommentContent>
        <Style.UserName>
          {"User "}
          <span className="highlightedUserName">{userName}</span>
          {" commented at " + time + ":"}
        </Style.UserName>
      </Style.CommentContent>
      <Style.CommentContent>
        <Style.CommentText>{commentText}</Style.CommentText>
        <Style.deleteButton onClick={handleDelete}>
          {" "}
          <FaTrashAlt />
        </Style.deleteButton>
      </Style.CommentContent>
    </Style.CommentItem>
  );
};

export default CommentItem;