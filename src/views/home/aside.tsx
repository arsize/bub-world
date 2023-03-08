import styled from 'styled-components'

import WorldPanel from './worldPanel'
import Create from './create'
import Leaderboard from './leaderBoard'
import Collect from './collect'
import Recommend from './recommend'
import React from 'react'

export enum AsideEnum {
  WORLD = '热门世界',
  CREATE = '创作中心',
  LEADERBOARD = '字数排行榜',
  COLLECT = '已订阅',
  RECOMMEND = '推荐关注',
}

interface Props {
  type: AsideEnum
}

const Block: React.FC<Props> = (props) => {
  let asideBlock
  switch (props.type) {
    case AsideEnum.WORLD:
      asideBlock = <WorldPanel />
      break
    case AsideEnum.COLLECT:
      asideBlock = <Collect />
      break
    case AsideEnum.CREATE:
      asideBlock = <Create />
      break
    case AsideEnum.RECOMMEND:
      asideBlock = <Recommend />
      break
    case AsideEnum.LEADERBOARD:
      asideBlock = <Leaderboard />
      break

    default:
      break
  }
  return <ContainerWrapper>{asideBlock}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  box-sizing: border-box;
  width: 280px;
  margin-bottom: 20px;

  .block-line {
    font-weight: 500;
    font-size: 14px;
    color: #444;
    display: flex;
    align-items: center;
    .title {
      margin-left: 5px;
    }
  }
`

export default Block
