const request = require('supertest');
const { expect } = require('chai');
const app = require('../index');

describe('Basic App Routes', function() {
  it('should return hello message on /', async function() {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.include('Hello');
  });

  it('should return about message on /about', async function() {
    const res = await request(app).get('/about');
    expect(res.status).to.equal(200);
    expect(res.text).to.include('sample Node.js app');
  });
});
