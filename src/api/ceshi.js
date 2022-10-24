export async function getval(params) {
  let res = await request('post', '/code/all', params)
  return res
}
