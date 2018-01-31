

var SearchView = Backbone.View.extend({
  
  model: Video,

  events: {
    'click button': 'search',
    'keyup': 'keyAction'
  },


  initialize: function() {
    // this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  search: function() {
    var query = $('.form-control').val();
    this.collection.search(query);
  },

  keyAction: function(event) {
    if (event.keyCode === 13) {
      this.search();
    }
  },

  template: templateURL('src/templates/search.html')

});
