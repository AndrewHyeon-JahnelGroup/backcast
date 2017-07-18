var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(data) { 
    for (var i = 0; i < data.length; i++) {
      var video = new Video(data[i]);
    }  
  }
  

});