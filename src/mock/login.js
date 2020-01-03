import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avatar: 'http://m.qpic.cn/psc?/V11bzsqh2i1PJJ/lX1BhdNAWy*lo8EgHnGEzvpnyqtF1PsfTl*K.ghQmPQpf3urB*wQBbvix1GqlXGo23BsPLS4UGb0kRHU31r1cx.4Ay88mCbxzhmWBSwjgnU!/anull&bo=RgJVAgAAAAARByM!&rf=photolist&t=5'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avatar: 'http://m.qpic.cn/psc?/V11bzsqh2i1PJJ/lX1BhdNAWy*lo8EgHnGEzvpnyqtF1PsfTl*K.ghQmPQpf3urB*wQBbvix1GqlXGo23BsPLS4UGb0kRHU31r1cx.4Ay88mCbxzhmWBSwjgnU!/anull&bo=RgJVAgAAAAARByM!&rf=photolist&t=5'
  }
}

export const login = req => {
  req = JSON.parse(req.body)
  return { token: USER_MAP[req.userName].token }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}