var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //instantiates collection of videos
    this.videos = new Videos();

    //when appView is initialized, it automatically searches Youtube and renders
    //the first result in videoPlayerView and lists the search output in VideoListView
    this.videos.search('');
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.render();
  },


  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },
  
  render: function() {
    this.$el.html(this.template());
  
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});