const request = require('supertest');
const app = require('../../app');

describe('Test the root path', () => {
    test('It should respond to GET', () => {
        return request(app).get('/').expect(200);
    });
});
describe('Test the root path', () => {
    test('It should respond to GET', () => {
        return request(app).get('/roll').expect(200);
    });
});
describe('Test the /roll/:dice path', () => {
    test('It should respond to GET', () => {
        return request(app).get('/roll/2d6').expect(200);
    });
    test('It should respond to GET', () => {
        return request(app).get('/roll/asdfsdf').expect(200);
    });    
});
