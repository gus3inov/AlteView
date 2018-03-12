import * as Router from 'koa-router'
import { posters } from './mock'

const router = new Router()

router.get('/api/posters', async (ctx) => {
    let postersObj = posters.map(poster => {
        return poster
    })

    ctx.body = postersObj
})

export default router