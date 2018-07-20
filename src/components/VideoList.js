import React, { Component } from "react";

import VideoListItem from "./VideoListItem";

class VideoList extends Component {
  render() {
    const videoItems = this.props.videos.map(video => {
      return (
        <VideoListItem
          onVideoSelect={this.props.onVideoSelect}
          key={video.etag}
          video={video}
        />
      );
    });
    return <div>{videoItems}</div>;
  }
}

export default VideoList;
