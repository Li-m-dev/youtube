import React from "react";

const VideoDetail = props => {
  //   console.log("videodetails:", props);
  if (!props.video) {
    return <div> Loading... </div>;
  }

  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="video_frame">
        <iframe
          title={props.video.snippet.title}
          allowFullScreen
          src={url}
          frameBorder="0"
        />
      </div>
      <h1>{props.video.snippet.title}</h1>
      <div>{props.video.snippet.description}</div>
    </div>
  );
};

export default VideoDetail;
