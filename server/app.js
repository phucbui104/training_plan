import Hapi from 'hapi';
import './database';
import routes from './routes/index';

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000,
  routes: { cors: true },
});

server.route(routes);

server.start((err) => {
  if (err) {
    throw err;
  }
});
