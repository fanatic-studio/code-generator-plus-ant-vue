import { get, post, postDownload } from '@/utils/request'
/**
 * 数据库表列表
 * @param {object} params
 * @param {string} params.tableName
 * @returns {*}
 */
export function queryTableList (params) {
  return get('/generator/queryTableList', params)
  // return request({
  //   url: '/generator/queryTableList',
  //   method: 'get',
  //   headers: {
  //     'Content-Type': 'application/json;charset=UTF-8',
  //   },
  //   params: params,
  // })
}

/**
 * 获取数据库表列表
 * @returns 数据库表列表
 */
export function getAllTableList (params) {
  return get('/generator/getAllTables', params)
  // return request({
  //   url: '/generator/getAllTables',
  //   method: 'get',
  //   headers: {
  //     'Content-Type': 'application/json;charset=UTF-8',
  //   },
  //   params: params,
  // })
}

/**
 * 多表批量生成代码
 * @returns {*}
 */
export function generatorCodes (data) {
  return postDownload({
    url: '/generator/generatorCodes',
    data: data,
  })
}

/**
 * 预览生成的代码
 * @param {object} params
 * @param {string} params.rootPackage
 * @param {string} params.moduleName
 * @param {string} params.author
 * @param {string} params.table
 * @param {string} params.isPlus
 * @returns {*}
 */
export function preview (params) {
  return get('/generator/preview', params)
  // return request({
  //   url: '/generator/preview',
  //   method: 'get',
  //   headers: {
  //     'Content-Type': 'application/json;charset=UTF-8',
  //   },
  //   params: params,
  // })
}
