const request = require('supertest')

const app = require('../api/app')

describe('Test api Yo greetins', () => {
    test('It should return 200 from GET method', () => {
        return request(app).get('/api/yo').then(res => expect(res.statusCode).toBe(200))
    })
})