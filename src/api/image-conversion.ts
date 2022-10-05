/**
 * @Author zhoufeng
 * @CreateTime 2022/1/20 13:37
 * @Description
 */
import request from 'utils/request'
import { ImageConversionFormProp } from '../types/image-conversion'

export const transformApi = (data: ImageConversionFormProp) => {
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
