import React from "react";

const VideoListItem = props => {
  //   console.log(props);
  const imgUrl = props.video.snippet.thumbnails.default.url;
  return (
    <div
      className="video_list_item"
      onClick={() => props.onVideoSelect(props.video)}
    >
      <img src={imgUrl} alt="" />

      <div className="video_item_title">{props.video.snippet.title}</div>
    </div>
  );
};

export default VideoListItem;
