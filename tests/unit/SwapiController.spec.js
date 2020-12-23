const request = require('supertest');
const app = require('../../src/app');

it('gets the api endpoint', async done => {
  const response = await request(app).get('/')

  expect(response.status).toBe(200)
  done()
})

it('gets the people endpoint', async done => {
  const response = await request(app).get('/people/1')

  expect(response.status).toBe(200)
  done()
})

it('gets the planets endpoint', async done => {
  const response = await request(app).get('/planets/1')

  expect(response.status).toBe(200)
  done()
})

it('gets the film endpoint', async done => {
  const response = await request(app).get('/films/1')

  expect(response.status).toBe(200)
  done()
})

it('gets the species endpoint', async done => {
  const response = await request(app).get('/species/1')

  expect(response.status).toBe(200)
  done()
})