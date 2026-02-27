const request = require('supertest');
const app = require('./index');

describe('Tests des routes de l\'API', () => {

    test('La route /health doit retourner un statut 200', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });

    test('La route principale / doit retourner un message de bienvenue', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Bienvenue sur l'API DevOps !");
    });
});