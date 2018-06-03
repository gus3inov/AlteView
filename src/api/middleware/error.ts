interface ContextStats {
    status: number;
    body: object;
}

export default async (ctx: ContextStats, next:any) => {
    try {
        await next();
    } catch (err) {
        // will only respond with JSON
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            message: err.message
        };
    }
}