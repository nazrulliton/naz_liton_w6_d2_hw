const assert = require('assert');
const Painter = require('../painter.js');
const Room = require('../room.js');
const Paint_can = require('../paint_can.js');

describe('painter', function () {
  let painter;

  beforeEach(function () {
    painter = new Painter("John", 0);
    can1 = new Paint_can(15);
    can2 = new paint_can(16);
  });
  it('should start with empty stock', function () {
    const actual = painter.stock.length;
    assert.strictEqual(actual, 0);
  })
  it('should be able to add a can', function () {
    painter.addCan(can1);
    const actual = painter.stock.length;
    assert.strictEqual(actual, 1);
  })
it('should be able to calc total litres of paint', function () {
  painter.addCan(can1);
  painter.addCan(can2);
  const actual = paint.calcVolume();
  assert.strictEqual(actual, 31);
})


});
