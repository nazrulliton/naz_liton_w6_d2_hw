const assert = require('assert');
const Paint_can = require('../paint_can.js');



describe('paint_can', function () {

  let paint_can;

  beforeEach(function () {

    paint_can = new Paint_can('20');
  });

  it('should have volume(lt)', function () {
    const actual = paint_can.volume;
    assert.strictEqual(actual, '20');
  });

  it('be able to check if its empty', function(){
      const actual = paint_can.emptyCheck();
      assert.strictEqual(actual,false);
    })

    it('it shouldbe able to empty itself', function(){
      paint_can.emptyCan();
      const actual = paint_can.emptyCheck();
      assert.strictEqual(actual,true);
    })

});
