import server from '../src/index';
import request from 'supertest';
import {expect} from 'chai';


describe('ScratchProject API Tests', () => {
    it('GET /api/v1/projects/:idproject returns a json belonging to scratch project', async() => {
        const response = await request(server).get('/api/v1/projects/');
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an.instanceof(Array);
    })
})