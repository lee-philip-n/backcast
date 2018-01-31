var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    
        
  },


  render: function() {

    this.$el.html(this.template());
    var searchView = new SearchView({el: this.$('.search')});
    var videoListView = new VideoListView({el: this.$('.list'), collection: this.videos});
    var videoPlayerView = new VideoPlayerView({el: this.$('.player'), model: this.videos.at(0), collection: this.videos});
    searchView.render();
    videoListView.render();
    videoPlayerView.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});


// AIzaSyAYAT0WmXjynTj6kUwpIPPrRrXR99ed1nk