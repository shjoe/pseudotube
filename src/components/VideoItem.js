import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="search-results">
      <img
        className="ui image video-item"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
        <span><h3>{video.snippet.title}</h3></span>
    </div>
  );
};
export default VideoItem;
