import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div class="ui center aligned inverted segment">Select a video from the list below</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div>
        <h2 class ="video-detail">{video.snippet.title}</h2>
        <p class ="video-detail">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
