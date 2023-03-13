const js = require('json-server')
const server = js.create();
const router = js.router("db.json");
const { uuids } = require('./middlewares/uuids')
const middlewares = js.defaults({ static: "db.json" });

// Add middlewares.
server.use(middlewares).use(js.bodyParser).use(uuids);

server.use(router)
    
server.listen(process.env.PORT || 3000);