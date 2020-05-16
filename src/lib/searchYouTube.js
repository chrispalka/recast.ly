import exampleVideoData from '../../src/data/exampleVideoData.js';

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      fields: 'items',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true,
    },
    contentType: 'application/json',
    success: function(data) {
      console.log('success!: ', data);
      console.log('and here is example video data: ', exampleVideoData);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
  callback();
};

export default searchYouTube;
