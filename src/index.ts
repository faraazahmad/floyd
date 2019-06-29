import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http'

// Create a http server. We pass the relevant typings for our http version used.
// By passing types we get correctly typed access to the underlying http objects in routes.
// If using http2 we'd pass <http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse>
const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});

app.get('/', (req, res) => {
    res.code(200).send('Hello world');
});

// Run the server!
async function start() {
    try {
        await app.listen(3000);
        app.log.info(`server listening on ${app.server.address}`);
    } catch(err) {
        app.log.error(err);
        process.exit(1);
    }
}

start();