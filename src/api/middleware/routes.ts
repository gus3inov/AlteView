import * as Router from 'koa-router';
import poster, { IModelPoster } from '../models/poster';
import * as convert from 'koa-convert';
import * as KoaBody from 'koa-body';

enum ErrorStatus{
    Created = 201,
    NoContent = 204
}

interface ContextStats {
    status: number;
    body: object;
    params: object;
    request: object;
}

interface IRequest{
    body: any;
    id: number;
}

type RequestStats = IRequest

const router = new Router(),
    koaBody = convert(KoaBody());

router
    .get('/api/poster', async (ctx: ContextStats, next: any) => {
        ctx.body = await poster.getAll()
    })
    .get('/api/poster/:id', async (ctx: ContextStats, next: any) => {
        let result = await poster.get(ctx.params.id);
        if (result) {
            ctx.body = result
        } else {
            ctx.status = ErrorStatus.NoContent
        }
    })
    .post('/api/poster', koaBody, async (ctx: ContextStats, next: any) => {
        ctx.status = ErrorStatus.Created;
        ctx.body = await poster.create(ctx.request.body)
    })
    .put('/api/poster/:id', koaBody, async <RequestStats> (ctx: ContextStats<RequestStats>, next: any) => {
        ctx.status = ErrorStatus.NoContent;
        await poster.update(ctx.params.id, ctx.request.body);
    })
    .delete('/api/poster/:id', async (ctx: ContextStats, next: any) => {
        ctx.status = ErrorStatus.NoContent;
        await poster.deletePoster(ctx.params.id);
    });

export function routes () { return router.routes() }
export function allowedMethods () { return router.allowedMethods() }