import * as Koa from 'koa'
import router from './routing'
import * as bodyParser from 'koa-bodyparser'

const port = 3022
const app  = new Koa()

app.use(bodyParser())

app.use(router.routes())

app.use(async (ctx, next) => {
    await next()

    ctx.body = ctx.request.body;
})


app.listen(port)