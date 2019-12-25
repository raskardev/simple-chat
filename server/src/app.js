const Koa = require('koa');
const KoaSocket = require('koa-socket-2');

const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const io = new KoaSocket();

app.use(bodyParser());
app.use(cors());

io.attach(app);

io.on('connection', () => {
  console.log('New connection');
});

app.listen(process.env.PORT || 8000, () =>
  console.log(`Server started at http://localhost:${process.env.PORT || 8000}`)
);
