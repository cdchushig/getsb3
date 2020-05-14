import server from '../src/index';
import request from 'supertest';
import {expect} from 'chai';


describe('ScratchProject API', () => {

    it('GET / returns main page with greet', async() => {
        const response = await request(server).get('/')
        expect(response.status).to.equal(200)
        expect(response.body).to.equal('Hello world!')
    })

    it('GET /api/v1/projects/ returns all json belonging to scratch project', async() => {
        const response = await request(server).get('/api/v1/projects/')
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an.instanceof(Array);
    })

    it('GET /api/v1/projects/:idproject returns a json of a specific scratch project', async() => {
        let projectid = 1111
        const response = await request(server).get('/api/v1/projects/1111')
        expect(response.status).to.equal(200)
        expect(response.body[0].projectid).to.equal(projectid)
    })

})


// convert(project_id.toString())
//     .then((result) => {
//       callback(null, result, project_id);
//     })
//     .catch((err) => {
//       ERRORS += project_id + "\n"
//       callback(err, project_id); // stops the waterfall
//     });