StayList = new Meteor.Collection('stayList');

StayList.defaultName = function() {
  var nextNumber = 0, nextName = 'Stay ' + nextNumber;
  while (StayList.findOne({name:nextName})) {
    nextNumber++;
    nextName = 'Stay ' + nextNumber;
  }
  
  return nextName;
}
