Meteor.startup(function () {
});

Template.body.helpers({
                 stayList: function() {
                 return StayList.find();
                 }
});

Template.body.events({
                'click .js-new-stay': function() {
                var list = {name: StayList.defaultName()};
                list._id = StayList.insert(list);
                }
});
