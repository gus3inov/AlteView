import * as Koa from 'koa';
import * as config from  'config';
import err from './middleware/error';
import {routes, allowedMethods} from './middleware/routes';

const port = config.get('API.server.port');
const app  = new Koa();

app.use(err);
app.use(routes());
app.use(allowedMethods());

app.use(async (ctx, next) => {
    await next();

    ctx.body = ctx.request.body;
})


app.listen(port);