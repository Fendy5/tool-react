/**
 * @Author zhoufeng
 * @CreateTime 2022/1/6 16:34
 * @Description
 */
import styled from '@emotion/styled'

export const Card = styled.div`
  box-shadow: 0 0 10px 3px rgb(0 0 0 / 10%);
  //margin-top: 30px;
  border-radius: 4px;
  padding: 24px;
`

export const Container = styled.div`
  width: 80%;
  max-width: 32rem;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`

export const ResText = styled.span`
  border-radius: 4px;
  background-color: #c1f4cd;
  color: #673ab6;
  padding: 8px 16px;
  word-break: break-all;
  line-height: 2;
`
