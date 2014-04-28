// For more information see: http://emberjs.com/guides/routing/

BinderFullOfPeople.Router.map(function() {
  this.resource('contacts', { path: '/' });
  this.resource('new_contact', { path: '/contacts/new' });
  this.resource('contact', { path: '/contacts/:id' });
});
