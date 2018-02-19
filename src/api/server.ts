import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as Api from './routing'

import bodyParser from 'koa-bodyparser'

const port = 3001
const app    = new Koa()
app.use(bodyParser())

app.use(async (ctx, next) => {

    ctx.body = Api;
})

const router = new Router()

app.use(router.routes())
app.listen(port)

