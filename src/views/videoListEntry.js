var VideoListEntryView = Backbone.View.extend({

  initialize: function(data) {
    // console.log('videolistentry', data);
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
