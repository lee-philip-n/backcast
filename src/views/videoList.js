var VideoListView = Backbone.View.extend({

  //model: Videos,

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    // this.render();
  },

  render: function() {  
    //new VideoListView();
    //forEach videoListView 
    //render it
    
    this.$el.empty();
    this.$el.html(this.template());
    this.$('.video-list').empty();
    this.collection.forEach(this.renderVideo, this);
    return this; 
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    var children = this.$('.video-list');
    children.append(videoView.render().el);
    return children;
  },

  template: templateURL('src/templates/videoList.html')

});
