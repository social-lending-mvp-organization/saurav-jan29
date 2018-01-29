const Hapi = require('hapi');
const db = require('./db');

const server = new Hapi.Server({
  host: 'localhost',
  port: 8080,
});

server.route({
  method: 'GET',
  path: '/api/lastname',
  handler(request) {
    const inputName = request.query.firstName || '';

    return db.getLastName(inputName)
      .then(lastName => ({ lastName }))
      .catch(reason => ({ reason }));
  },
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

start();
