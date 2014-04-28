BinderFullOfPeople.ContactController = Ember.ObjectController.extend({
  actions: {
    deleteContact: function() {
      if (confirm('Dude....are you sure????')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
