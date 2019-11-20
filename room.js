const Room = function (area) {
  this.area = area;
  this.job = [];
}
Room.prototype.updateJob = function (complete) {
  this.job.push(complete);
}

module.exports = Room;
