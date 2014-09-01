[![browser support](https://ci.testling.com/mattdesl/point-circle-collision.png)](https://ci.testling.com/mattdesl/point-circle-collision)

# point-circle-collision
 
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Performs a point-circle collision test, returning true if they intersect. 

```js
var collide = require('point-circle-collision')

var circle = [5, 5],
	radius = 25,
	point = [5, 6]

var hit = collide(point, circle, radius)
console.log(hit)
```

## Usage

[![NPM](https://nodei.co/npm/point-circle-collision.png)](https://nodei.co/npm/point-circle-collision/)

### `collide(point, circle, radius)`

Performs a collision test with the given parameters. Returns true if collision occurred.

Point and circle are expected to be 2D vectors in the form of an array.

If the radius is zero, this test will return false.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/point-circle-collision/blob/master/LICENSE.md) for details.
