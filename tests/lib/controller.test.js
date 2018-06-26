const request = require('supertest');
const app = require('../../app');

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });
})
/*
describe('Controller', function() {
    describe('roll3d6() function', function() {
        it('return integer between 3 and 18 ', function() {
            roll3d6(req, res);
            //expect(res.status).to.equal('error');
            expect(res).to.equal('error');
        });
    })
});
*/