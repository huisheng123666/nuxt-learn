import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
  prefix: '/geo'
})

router.get('/getPosition', async (ctx) => {
  ctx.body = {
    province: '湖北',
    city: '武汉'
  }
})

export default router
