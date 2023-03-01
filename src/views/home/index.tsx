import ListContent from '@/views/home/list'
import styled from 'styled-components'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Block, { AsideEnum } from './aside'
import Footer from '@/layout/Footer'

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `最新`,
  },
  {
    key: '2',
    label: `关注`,
  },
]

function Home() {
  return (
    <AllBox>
      <Lists>
        <Tabs
          tabBarStyle={{
            padding: '0 20px',
            marginBottom: 0,
          }}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
        <div className="info-box">
          <ListContent />
        </div>
      </Lists>
      <Aside>
        <Block type={AsideEnum.WORLD} />
        <Block type={AsideEnum.COLLECT} />

        <Block type={AsideEnum.CREATE} />
        <Block type={AsideEnum.RECOMMEND} />
        <Block type={AsideEnum.LEADERBOARD} />

        <Footer />
      </Aside>
    </AllBox>
  )
}

const AllBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Lists = styled.div`
  width: 694px;
  background-color: white;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  border-radius: 3px;
`
const Aside = styled.div``
export default Home
