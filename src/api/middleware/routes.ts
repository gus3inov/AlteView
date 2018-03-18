import * as Router from 'koa-router';
import poster from '../models/poster';
import * as convert from 'koa-convert';
import * as KoaBody from 'koa-body';

const router = new Router(),
    koaBody = convert(KoaBody());

router
    .get('/api/poster', async (ctx, next) => {
        ctx.body = await poster.getAll()
    })
    .get('/api/poster/:id', async (ctx, next) => {
        let result = await poster.get(ctx.params.id);
        if (result) {
            ctx.body = result
        } else {
            ctx.status = 204
        }
    })
    .post('/api/poster', koaBody, async (ctx, next) => {
        ctx.status = 201;
        ctx.body = await poster.create(ctx.request.body)
    })
    .put('/api/poster/:id', koaBody, async (ctx, next) => {
        ctx.status = 204;
        await poster.update(ctx.params.id, ctx.request.body);
    })
    .delete('/api/poster/:id', async (ctx, next) => {
        ctx.status = 204;
        await poster.delete(ctx.params.id);
    });

export function routes () { return router.routes() }
export function allowedMethods () { return router.allowedMethods() }