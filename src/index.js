// TODO: Render the `App` component to the DOM
// Import List
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';



// call ReactDOM.render, passing in App
ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));



