import React, { useState, useEffect } from "react";
import * as Style from "@/components/templates/Details/CommentsItem/index.styled";
import { IComments } from "./types";
import { FaTrashAlt } from "react-icons/fa";

export type CommentsListProps = {
    comments: IComments[]
  };

  export type CommentPropsI = {
    id: number;
    userName: string;
    commentText: string;
    time: string; // Corrected type for time
  };
  export const CommentsList: React.FC<CommentPropsI & {
    comments: CommentPropsI[];
    setComments: React.Dispatch<React.SetStateAction<CommentPropsI[]>>;
  }
> = ({ id, userName, commentText, time, comments, setComments }) => {
  const [localComments, setLocalComments] = useState<CommentPropsI[]>(comments);

  const handleDelete = () => {
    const updatedComments = localComments.filter(
      (comment) => comment.id !== id,
    );
    setLocalComments(updatedComments);
    setComments(updatedComments);
  };
    return (
        <Style.Comments>
            <Style.NameUser>
                {"Username: "}
                <span className="highlightedUserName">{userName}</span>
                {" commented at " + time + ":"}
            </Style.NameUser>

            <div>{commentText}</div>
            <Style.deleteButton onClick={handleDelete}>
                {" "}
                <FaTrashAlt />
            </Style.deleteButton>
                    
        </Style.Comments>
    );
};
