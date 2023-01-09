import React from "react";

interface IAuthorProps {
  authorName: string;
}

export default function Author({ authorName }: IAuthorProps) {
  return (
    <>
      <hr />
      <h1>made by {authorName}</h1>
      <hr />
    </>
  );
}
