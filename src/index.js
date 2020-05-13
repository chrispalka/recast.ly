// TODO: Render the `App` component to the DOM
// Import List
import App from './components/App.js';
import VideoList from './components/VideoList.js';
import exampleVideoData from './data/exampleVideoData.js';


// call ReactDOM.render, passing in App
ReactDOM.render(<App />, document.getElementById('app'));

// RenderVideo List
ReactDOM.render(<VideoList videoData={exampleVideoData}/>, document.getElementById('videoList'));

// <VideoList videoListItems = {[exampleVideoData[0], 1, 2, 3]} />,
//[...VideoList] = [10, 20, 30, 40, 50];
//output: [30, 40, 50];


