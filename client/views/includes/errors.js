Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});

Template.error.rendered = function(){
  var error = this.data;
  Meteor.defer(function(){
    Errror.update(error._id, {$set: {seen: true}});
  });
};
