var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.render();
    this.videos = new Videos(data);
    console.log(this.videos);
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView(this.videos);
    // this.searchView = new SearchView();
    // this.searchView.render();
    this.on('change', this.render, this);
      
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
