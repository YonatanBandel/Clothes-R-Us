const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../server');

describe('/products route', function() {
    it('should return 403 if cookie not set', function() {
      return request(app)
        .get('/products')
        .then(function(response){
            assert.equal(response.status, 403)
        })
    });
});

describe('/register route', function() {
    it('should return NO_CONTENT status', function() {
      return request(app)
        .post('/register')
        .send({username: 'test', password: 'test'})
        .set('Accept', 'application/json')
        .then(function(response){
            assert.equal(response.status, 204)
        })
    });
});

describe('/login route', function() {
    it('should return UNAUTHORIZED status', function() {
      return request(app)
        .post('/login')
        .send({username: '3123', password: 'test'})
        .set('Accept', 'application/json')
        .then(function(response){
            assert.equal(response.status, 401)
        })
    });

    it('should return NO_CONTENT status for valid user', function() {
        return request(app)
          .post('/login')
          .send({username: 'admin', password: 'admin'})
          .set('Accept', 'application/json')
          .then(function(response){
              assert.equal(response.status, 204)
          })
      });
});

describe('/checkout route', function() {
    it('should return 403 if cookie not set', function() {
      return request(app)
        .post('/checkout')
        .send({})
        .set('Accept', 'application/json')
        .then(function(response){
            assert.equal(response.status, 403)
        })
    });
});

describe('/transactions route', function() {
    it('should return 403 if cookie not set', function() {
      return request(app)
        .get('/transactions')
        .then(function(response){
            assert.equal(response.status, 403)
        })
    });
});