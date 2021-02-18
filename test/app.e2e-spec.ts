const request = require('supertest')


describe(' /', () =>{
    let server;
    beforeAll(async () => {
        const mod = await import('../src/');
        server = (mod as any).default;
    });
    afterAll(async (done) => {
        if (server) {
            server.close();
        }
        done();
    });

    it('should return 200 and respond with hello world', async () => {
        let response = await request(server)
            .get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});
