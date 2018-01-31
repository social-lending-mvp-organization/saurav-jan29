const Hapi = require('hapi');
const inert = require('inert');
const db = require('./db');

const server = new Hapi.Server({
  host: 'localhost',
  port: process.env.PORT || 8080,
});

server.route({
  method: 'GET',
  path: '/api/firstname',
  handler(request) {
    const inputName = request.query.firstName || '';

    return db.getLastName(inputName)
      .then(lastName => ({ lastName }))
      .catch(reason => ({ reason }));
  },
});


async function configure() {
  try {
    await server.register(inert);

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'wwwroot/',
          redirectToSlash: true,
          index: true,
        },
      },
    });


    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

configure();
