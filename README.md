ObjectMap
=====

Use an ES6 Map using object syntax, so

```javascript
map = oMap();
//these are the same
map.set('abc',9);
map.abc = 9;
//as are these
map.get('abc');
map.abc;
//and these
map.delete('abc');
delete map.abc;
```

it should be noted that using it in the object style coerses everything to a string so

```javascript
//these are not equivilent
map.set(3);
map[3];
//these are
map.set('3');
map[3];
```

you can also itererate it like a regular object (for in) and you will only get the keys from the map

lastly if you iterate it with the new iterator protocol (for of) you will get arrays of length 2 of both keys and values