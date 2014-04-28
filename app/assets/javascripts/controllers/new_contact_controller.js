BinderFullOfPeople.NewContactController = Ember.ObjectController.extend({
  actions: {
    createContact: function() {
      var model = this.get('model');
      var controller = this;

      model.save().then(function() {
        controller.transitionToRoute('contacts');
      }).catch(function() {
        alert("Dadgummit, you gotta fix this stuff!");
      });
    }
  }
});
