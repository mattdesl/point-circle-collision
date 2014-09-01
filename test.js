var collide = require('./')

require('tape').test('test point-circle collision', function(t) {
    var circle = [ 5, 5],
        radius = 10,
        point = [5, 5]

    t.equal(collide(point, circle, radius), true)

    radius = 0
    t.equal(collide(point, circle, radius), false)

    radius = 5
    circle = [ 10, 5]
    t.equal(collide(point, circle, radius), true)    

    circle = [ 11, 5]
    t.equal(collide(point, circle, radius), false)    
    
    t.end()
})