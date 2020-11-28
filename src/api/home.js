import {
  API,
  headers
} from './common'

//獲取首頁資料
export const getHomeApi = async () => {
  try {
    //從localStorage取得token
    const token = localStorage.getItem('token')

    // 1. 從Api取得Vip資訊
    const data = await API.post('/cms/api/v2/home/index', {}, {
      headers: token ? {
        ...headers,
        token
      } : {
        ...headers
      },
    }, )
    // 2. 回傳response
    return data.data // 回傳vip資訊
  } catch (err) {
    // 開發環境時，印出錯誤訊息
    if (process.env.NODE_ENV === 'development') console.error('getVipStarInfo', err)
  }
}

//前往遊戲
export const goToGame = async (params) => {
  //從localStorage取得token
  const token = localStorage.getItem('token')

  const data = await API.post('/office/api/quota/login', params, {
    headers: token ? {
      ...headers,
      token
    } : {
      ...headers
    },
  })
  return data
}

//收藏 / 取消收藏
export const storeupCancel = async (gameId, storeup) => {
  //從localStorage取得token
  const token = localStorage.getItem('token')
  const data = await API.post('/office/player/player-game-storeup/setting-storeup-platform', {
    platformCode: gameId,
    storeup: storeup
  }, {
    headers: token ? {
      ...headers,
      token
    } : {
      ...headers
    },
  })
  return data.data
}