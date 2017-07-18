var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // this.collections.fetch();
    this.collection = new Videos();
    this.render();
    this.on('change', this.render, this);
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
