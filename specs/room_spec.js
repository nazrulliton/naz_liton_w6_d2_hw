const assert = require('assert');
const Room = require('../room.js');
const Paint_can = require('../paint_can.js');

describe('Room', function () {

  let room;

  beforeEach(function () {

    room = new Room ('10',);
  });

  it('should have an area(sq/m)',function () {
    const actual = room.area;
    assert.strictEqual(actual,'10');
    });
  it("should start not painted",function () {
    const actual = room.job;
    assert.deepStrictEqual(actual, []);
  });
  it("should be able to be changed to complete",function () {
    room.updateJob('complete')
    const actual = room.job;
    assert.deepStrictEqual(actual[0], 'complete');
  });


});
