var request = require('supertest')
  , express = require('express')
  ,app = require('./app');

describe('GET /api', function(){
  it('respond with json', function(done){
    request(app)
      .get('/api/')
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(200, done);
  })
})