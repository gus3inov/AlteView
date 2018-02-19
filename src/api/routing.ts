import * as Router from 'koa-router'
import { posters } from './mock'

const router = new Router()

router.get('/posters', async (ctx) => {
    let posters = posters.map(poster => {
        return poster
    })

    ctx.json(posters)
})

export default router