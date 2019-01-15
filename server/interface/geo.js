import Router from 'koa-router'
import Menu from '../dbs/modules/menu'
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

router.get('/menu', async (ctx) => {
  const menu = await Menu.findOne()

  if (menu) {
    ctx.body = {
      menu: menu.menu,
      code: 0
    }
  } else {
    ctx.body = {
      menu: '500',
      code: -1
    }
  }
})

export default router
