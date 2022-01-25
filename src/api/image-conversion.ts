/**
 * @Author zhoufeng
 * @CreateTime 2022/1/20 13:37
 * @Description
 */
import request from 'utils/request'

export const transformApi = (data: any) => {
  return request({
    url: '/api/v1/image-conversion/transform',
    method: 'post',
    data
  })
}

export const downloadImageApi = (name: string) => {
  return request({
    method: 'get',
    url: `/api/v1/image-conversion/download/${name}`,
    responseType: 'arraybuffer'
  })
}
