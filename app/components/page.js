define([
  "namespace",
  "use!Backbone"
], function(app, B) {
  return function(c) {
    return {
      render : function() {
        var self = this;

        return app.fetchTemplate(c.template, function(t) {
          var page = $('<div/>').addClass('page').html(t());
          $('#main').html(page);

          page.find('[data-attachPoint]').each(function(el) {
            self[this.getAttribute('data-attachPoint')] = $(this);
          });
        });
      }
    };
  };
});