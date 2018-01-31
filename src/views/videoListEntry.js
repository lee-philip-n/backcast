var VideoListEntryView = Backbone.View.extend({

  model: Video,

  events: {
    'click .video-list-entry-title': 'select'
  },

  // initialize: function() {
    
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.video-list-entry-title').html(this.model.attributes.snippet.title);
    this.$el.find('.video-list-entry-detail').html(this.model.attributes.snippet.description);
    this.$el.find('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);
    return this;
  },
  
  select: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
