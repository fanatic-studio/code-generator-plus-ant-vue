import { get, post } from '@/utils/request'

/**
 * 连接数据库
 * @param {object} data
 * @param {string} data.dbType
 * @param {string} data.server
 * @param {number} data.port
 * @param {string} data.database
 * @param {string} data.username
 * @param {string} data.password
 * @returns 是否连接成功
 */
export function connectDatabase (data) {
  return post('/generator/connectDatabase', data)
  // return request({
  //   url: '/generator/connectDatabase',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json;charset=UTF-8',
  //   },
  //   data: data,
  // })
}

/**
 * SQL脚本导入
 * @param {object} data
 * @param {string} data.dbType
 * @param {string} data.ddl
 * @returns 是否导入成功
 */
export function importSql (data) {
  return post('/generator/importSql', data)
  // return request({
  //   url: '/generator/importSql',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json;charset=UTF-8',
  //   },
  //   data: data,
  // })
}
