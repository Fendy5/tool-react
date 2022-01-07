/**
 * @Author zhoufeng
 * @CreateTime 2022/1/5 16:30
 * @Description
 */
import React, { useState } from 'react'
import { useSetTitle } from 'utils'
import styled from '@emotion/styled'
import { Card } from '../../components/lib'
import { Checkbox, Input, Form, Button } from 'antd'
import { FormProps, Option, StringType } from 'types/random-string'
import 'styles/_random-string.scss'

const checkOptions: Option[] = [
  { label: '小写字母', value: 'lowerCase' },
  { label: '大写字母', value: 'capital' },
  { label: '特殊字符', value: 'special' },
  { label: '数字类型', value: 'number' }
]

const defaultCheckedOptions = ['lowerCase', 'capital', 'number']

export const RandomString = ({ title }: { title: string }) => {
  useSetTitle(title)

  const [form] = Form.useForm()
  const [res, setRes] = useState('结果')

  const onFinish = (value: FormProps) => {
    const str = value.checkedList.map((type) => StringType[type]).join('')
    let res = ''
    for (let i = 0; i < parseInt(value.len); i++) {
      res += str.charAt(Math.floor(Math.random() * str.length))
    }
    setRes(res)
  }

  return (
    <Container>
      <Card>
        <Title>产生随机字符串</Title>
        <Form initialValues={{ checkedList: defaultCheckedOptions, len: 8 }} form={form} onFinish={onFinish}>
          <Form.Item name="checkedList">
            <MyCheckbox options={checkOptions} />
          </Form.Item>
          <MyInput>
            <Form.Item
              className={'grid-1-4'}
              label="长度"
              name="len"
              rules={[{ required: true, message: '请输入字符串长度' }]}
            >
              <Input min={1} type={'number'} placeholder={'请输入字符串长度'} />
            </Form.Item>
          </MyInput>
          <Form.Item className={'text-center'}>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
          <Form.Item className={'text-center'}>
            <ResText>{res}</ResText>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  width: 80%;
  max-width: 32rem;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`

const MyCheckbox = styled(Checkbox.Group)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  & .ant-checkbox-group-item {
    margin: 8px auto;
  }
`

const MyInput = styled.div`
  margin: 16px auto;
  max-width: 16rem;
`

const ResText = styled.span`
  border-radius: 4px;
  background-color: #c1f4cd;
  color: #673ab6;
  padding: 8px 16px;
  word-break: break-all;
  line-height: 2;
`
