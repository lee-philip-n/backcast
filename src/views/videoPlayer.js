var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
  //get the video id
    //edit video ID
    //render new video 
    this.listenTo(this.collection, 'select', this.switch);
  },

  switch: function(select) {
    this.model = select;
    this.render();
  },

  render: function() {
    
    var videoID = this.model.get('id');
    var title = this.model.attributes.snippet.title;
    var desc = this.model.attributes.snippet.description;
    this.$el.html(this.template(this.model.attributes));
    $('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + videoID);
    $('h3').text(title);
    $('.video-player-details div').text(desc);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
