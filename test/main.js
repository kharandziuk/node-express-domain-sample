var app = require('./app')
var supertest = require('supertest')

describe('some', function() {
    it('some', function(done) {
      supertest(app).get('/').expect(200, done)
    })
})
