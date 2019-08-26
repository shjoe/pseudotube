import React from "react";
import "../style/video.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
        <p>{video.snippet.title}</p>
    </div>
  );
};
export default VideoItem;
