import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAvTw5SxyrGUhqJrCYRQoa4n5TFaxB7yPo';
// get api key from 
//https://console.developers.google.com/apis/api/youtube.googleapis.com/credentials?project=youtube-api-key-250120

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
    };

    this.videoSearch('React Tutorials');
}

videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    console.log(data);
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });

}
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <div className="container-fluid">


        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
          </div>
      </div>
    );
  }
}

