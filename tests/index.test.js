import {expect} from 'chai';
import config from 'config';
import server from '../src/index';

console.log(server.port)

describe('Server', ()=>{
    it('tests that server is running current port', async()=>{
        expect(server.port).to.equal(config.get('port'))
    })
});