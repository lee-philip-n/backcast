var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({ 
      type: 'GET',
      data: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true,
        key: window.YOUTUBE_API_KEY
      }, 
      success: function(data) {
        console.log(`${data}: data was retrieved!`);
        
      },
      failure: function(data) {
        console.log(`${data}: data was not retrieved`);
      }
    });
  },

  parse: function(response) {
    return response.items;
  }
});
