

const request = require('supertest');

const server = require('./server.js'); 

describe('server.js', () => {
  // http request  with supertest
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;
      let response;
      return request(server).get('/').then(res => {
        response = res;

        expect(response.status).toEqual(expectedStatusCode);
      })
    });

    it('should return a JSON object from the index route', async () => {
      const expectedBody = {};
  

      const response = await request(server).get('/');

      expect(response.body).toEqual(expectedBody);
    });

    it('should return a JSON object fron the index route', async () => {
      const response = await request(server).get('/');

      expect(response.type).toEqual('text/html');
    });
  });
});