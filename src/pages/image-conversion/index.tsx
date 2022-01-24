/**
 * @Author zhoufeng
 * @CreateTime 2022/1/10 11:09
 * @Description
 */
import React, { useState } from 'react'
import { Upload, message, Form, Select, Button } from 'antd'
import { Card, Container, ResText, Title } from 'components/lib'
import { PictureOutlined } from '@ant-design/icons'
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useSetTitle } from 'utils'
import { RcFile } from 'antd/lib/upload'
import { transformApi } from 'apis/image-conversion'
const { Dragger } = Upload

export const ImageConversion = ({ title }: { title: string }) => {
  useSetTitle(title)

  const [imageUrl, setImageUrl] = useState('')
  const [downloadLink, setDownloadLink] = useState('')
  // const [loading, setLoading] = useState(false)

  const [form] = Form.useForm()

  const props = {
    name: 'image',
    accept: 'image/*',
    multiple: false,
    maxCount: 1,
    data: {
      '100%': true
    },
    action: '/image-api',
    beforeUpload: (file: RcFile) => {
      if (!file.type.match(/image\/*/)?.[0]) {
        message.error(`${file.name} 不是有效的图片文件`)
        return Upload.LIST_IGNORE
      }
      return true
    },
    onChange(info: any) {
      const { status, response } = info.file
      setDownloadLink('')
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
        setImageUrl(response.image_url)
        form.setFieldsValue({ imageUrl: response.image_url })
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  const handleChangeImageType = (type: string) => {
    setTargetType(type)
    setSize(undefined)
  }

  const handleChangeSize = (size: number) => {
    setSize(size)
  }

  const handleFinish = (form: any) => {
    form.imageUrl = imageUrl
    transformApi(form).then((value) => {
      const { downloadLink } = value.data
      setDownloadLink(downloadLink)
    })
  }

  const downloadImage = () => {
    // downloadImageApi(downloadLink)
    window.open(downloadLink)
  }

  // const resetForm = () => {
  //   setImageUrl('')
  //   setDownloadLink('')
  //   form.resetFields()
  // }

  const targetTypeOptions = ['png', 'ico', 'jpg', 'webp', 'bmp']
  const sizeList = [16, 32, 64, 128, 256, 512]
  const [targetType, setTargetType] = useState('')
  const [size, setSize] = useState<number | undefined>(undefined)
  return (
    <Container>
      <Card>
        <Title>图片格式转换</Title>
        <Form form={form} colon layout={'horizontal'} onFinish={handleFinish} labelCol={{ span: 8 }}>
          <Form.Item>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <PictureOutlined />
              </p>
              <p className="ant-upload-text">点击或者拖拉上传图片</p>
            </Dragger>
          </Form.Item>
          <Form.Item name={'targetType'} label={'转换类型'}>
            <Select onChange={handleChangeImageType} value={targetType} placeholder={'不选择默认不转换'}>
              {targetTypeOptions.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item hidden={targetType !== 'ico'} name={'size'} label={'尺寸'}>
            <Select allowClear onChange={handleChangeSize} value={size} placeholder={'不选择默认不修改尺寸'}>
              {sizeList.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}*{option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              立即转换
            </Button>
            {/*<Button onClick={resetForm} className={'ml-8'} htmlType="submit">*/}
            {/*  重置*/}
            {/*</Button>*/}
          </Form.Item>
          <Form.Item hidden={downloadLink === ''} wrapperCol={{ span: 16, offset: 8 }}>
            <ResText className={'pointer'} onClick={downloadImage}>
              点击下载
            </ResText>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  )
}
