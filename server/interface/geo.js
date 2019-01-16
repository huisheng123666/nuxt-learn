import Router from 'koa-router'
import Menu from '../dbs/modules/menu'
import Province from '../dbs/modules/province'
import City from '../dbs/modules/city'

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

router.get('/province', async (ctx) => {
  const province = await Province.find()

  if (province.length > 0) {
    ctx.body = {
      province: province.map(item => {
        return {
          id: item.id,
          value: item.value
        }
      }),
      code: 0
    }
  } else {
    ctx.body = {
      province: '500',
      code: -1
    }
  }
})

router.get('/province/:id', async (ctx) => {
  const city = await City.findOne({id: ctx.params.id})

  ctx.body = {
    code: 0,
    city: city.value
  }
})

router.get('/city', async (ctx) => {
  let arr = []
  const city = await City.find()

  city.forEach(item => {
    arr = arr.concat(item.value)
  })

  ctx.body = {
    code: 0,
    city: arr.map(item => {
      return {
        id: item.id,
        province: item.province,
        name: item.name === '市辖区' || item.name === '省直辖县级行政区划' ? item.province : item.name
      }
    })
  }
})

export default router
