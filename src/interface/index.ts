import { AxiosHeaders } from 'axios'

// axios返回值
export interface ResponseData<T> {
  config?: any
  data: T
  headers?: AxiosHeaders
  request?: XMLHttpRequest
  status?: number
  statusText?: string
}

export interface DataModel {
  list: Array<Note>
}

export interface Note {
  id: string
  title: string
  content: string
  author: string
}
