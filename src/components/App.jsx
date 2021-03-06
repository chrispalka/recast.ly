import VideoList from '../components/VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from '../components/VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from '../components/Search.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[1]
    };
  }

  componentDidMount() {
    // default string on load for gathering videos
    this.getVideos();
  }

  getVideos(query) {
    console.log('Inside getVideos: ' + query);
    var options = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 5
    };
    console.log(options.query);

    this.props.searchYouTube(options, (videos) => {
      console.log('inside searchYouTube ' + videos[0]);
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  // On mouseClick
  onClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  //Render
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search onSearch={this.getVideos.bind(this)} /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={this.state.videos} onClick={this.onClick.bind(this)} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;