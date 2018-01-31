var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    this.fetch = function() {
      $ajax({ 
        url: 'http://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        data: {
          part: 'snippet',
          q: query,
          maxResults: 5,
          key: 'key'
        },
        success: function(data) {
          console.log(`${data}: data was retrieved!`);
        },
        failure: function(data) {
          console.log(`${data}: data was not retrieved`);
        }

    
    
      });
    };
  }
});
