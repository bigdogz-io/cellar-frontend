import { pactWith } from 'jest-pact';
import supertest from 'supertest';
import { like, term } from '@pact-foundation/pact/dsl/matchers';

pactWith({ consumer: 'cellar-frontend', provider: 'cellar', pactfileWriteMode: 'overwrite' },
  async (provider) => {
    const client = () => {
      const url = `${provider.mockService.baseUrl}`;
      return supertest(url);
    };

    describe('GET /api/cellar/:ownerId', () => {
      it('should return a valid cellar with at least one valid cellar item', async () => {
        const ownerId = '1234-5678-90AB-CDEF';
        const requestPath = `/api/cellar/${ownerId}`;
        const expectedBody = {
          id: 'string',
          ownerId: ownerId,
          items: [
            {
              id: 'string',
              name: 'string',
              type: 'string',
              producer: 'string',
            },
          ],
        };

        const interaction = {
          state: 'Any',
          uponReceiving: `a GET for ownerId ${ownerId}`,
          withRequest: {
            method: 'GET',
            path: term({
              generate: requestPath,
              matcher: '/api/cellar/[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}',
            }),
          },
          willRespondWith: {
            body: like(expectedBody),
            headers: {
              'Content-Type': 'application/json',
            },
            status: 200,
          },
        };

        await provider.addInteraction(interaction);

        await client().get(`/api/cellar/${ownerId}`)
          .expect(200, expectedBody);
      });
    });
  });
