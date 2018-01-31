var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function() {
    // this.videos = new Videos(window.exampleVideoData);
    this.listenTo(this.collection, 'sync', this.render);
    // this.collection.search('Udacity');
    this.render();
  },

  
  render: function() {
    this.model = this.model || this.collection.at(0);
    this.$el.html(this.template());
    var searchView = new SearchView({el: this.$('.search'), collection: this.collection});
    var videoListView = new VideoListView({el: this.$('.list'), collection: this.collection});
    var videoPlayerView = new VideoPlayerView({el: this.$('.player'), model: this.model});
    searchView.render();
    videoListView.render();
    videoPlayerView.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});


// AIzaSyAYAT0WmXjynTj6kUwpIPPrRrXR99ed1nk