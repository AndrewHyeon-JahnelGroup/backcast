var Videos = Backbone.Collection.extend({
//Creates a collection of Videos
//Video model is created in models/video.js
  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    console.log(this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true' 
      }
    }));
    
  },
  
  parse: function(response) { 
    return response.items;
  }

  
});