import Router from 'koa-router'
import send from 'koa-send'
import path from 'path'

let router = new Router({
  prefix: '/download'
})

router.get('/music', async (ctx) => {
  var fileName = 'app-release.apk';
  await send(ctx, fileName, { root: path.resolve(__dirname, '../../static') });
})

export default router
