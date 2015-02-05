var oMap = require('./');
var assert = require('assert');

describe('creation',function(){
	var map, a;

    beforeEach(function() {
		map = oMap({abc:123});
        a = [1,2,3];
    });

	it('should be created',function(){
		assert.equal(map.abc,123);
	});

	it('should be created with a value 1',function(){
		assert.equal(map.abc,123);
	});

	it('should be created with a value 2',function(){
		assert.equal(map.get('abc'),123);
	});

	it('should allow adding complex thigns',function(){
		map[a] = 'xyz';
	});

	it('should allow adding getting based on complex things 1',function(){
		map[a] = 'xyz';
		assert.equal(map[a],'xyz');
	});

	it('should allow adding getting based on complex things 1',function(){
		map[a] = 'xyz';
		assert.equal(map.get(a.toString()),'xyz');
	});
});
