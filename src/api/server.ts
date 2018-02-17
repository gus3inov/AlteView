import * as Koa from 'koa'
import * as Router from 'koa-router'

const port = 3001
const app    = new Koa()

app.use(async (ctx, next) => {

    console.log(`Url: ${ ctx.url }`)

    await next()
})

const router = new Router()

router.get('/*', async (ctx) => {
    ctx.body = 'Test server'
})

app.use(router.routes())
app.listen(port)

