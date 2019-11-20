const Paint_can = function(volume){
  this.volume = volume;
}

Paint_can.prototype.emptyCheck = function () {
  if (this.volume == 0)
  {return true;}

  else
  {return false;}
}
Paint_can.prototype.emptyCan = function () {
  this.volume = 0;
};





module.exports = Paint_can;
