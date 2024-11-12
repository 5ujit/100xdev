// src/components/VideoItem.jsx
import React from "react";

const VideoItem = ({ video }) => {
  const { title, description, thumbnails } = video.snippet;

  return (
    <div>
      <img src={thumbnails.medium.url} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default VideoItem;
