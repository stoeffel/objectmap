'use strict';

require('harmony-reflect');
require('es6-shim');

function oMap(obj){
	obj = obj || {};

	const map = new Map();

	Object.keys(obj).forEach(function(key) {
        map.set(key, obj[key]);
	});

	const handlers = {
		get: function(target,name){
			if(name in target){
				return target[name];
			}
			return target.get(name);
		},
		set: function (target,name,value){
			return target.set(name,value);
		},
		has: function(target,value){
			return target.has(value);
		},
		hasOwn: function(target,value){
			return target.has(value);
		},
		deleteProperty: function(target,value){
			return target.delete(value);
		},
		keys: function(target){
			const k = target.keys();
			const out = [];

			try{
				while(true){
					out.push(k.next().toString());
				}
			}finally{
				return out;
			}
		},
		enumerate: function(target){
			return target.iterator();
		}
	};

	return new Proxy(map,handlers);
}


module.exports = oMap;
