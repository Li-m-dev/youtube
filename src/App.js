import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    };
    // this.videoSearch = this.videoSearch.bind(this);
  }
  componentDidMount() {
    this.videoSearch();
  }

  videoSearch = (term = "music") => {
    YTSearch({ key: process.env.REACT_APP_API_KEY, term }, videos => {
      // console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  render() {
    // console.log(this.state.videos);
    return (
      // <Provider store={store}>
      <div className="App">
        <SearchBar onSearchTermChange={this.videoSearch} />
        <div className="display_container">
          <div className="video_detail">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="video_list">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            />
          </div>
        </div>
      </div>
      // </Provider>
    );
  }
}

export default App;
