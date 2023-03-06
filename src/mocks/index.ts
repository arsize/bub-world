import Mock from 'mockjs'
import { Info } from './modules/info'
import { Aricles } from './modules/articles'
import { Worlds } from './modules/worlds'

Mock.mock('/mock/info', 'get', Info)
Mock.mock('/mock/articles', 'get', Aricles)
Mock.mock('/mock/worlds', 'get', Worlds)
