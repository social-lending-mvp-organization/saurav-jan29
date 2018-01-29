const Hapi = require('hapi');
const db = require('./db');

const server = new Hapi.Server();

server.connection({ port: 8080, host: 'localhost' });

server.route({
  method: 'GET',
  path: '/api/lastname',
  handler(request, reply) {
    const inputName = request.query.firstName || '';

    db.getLastName(inputName)
      .then((lastName) => {
        reply({
          lastName,
        });
      })
      .catch((reason) => {
        reply({
          reason,
        });
      });
  },
});


server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
