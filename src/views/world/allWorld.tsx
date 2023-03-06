import { fetchWorlds } from '@/net/api'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import WorldItem from './worldItem'

const AllWorld = () => {
  const [worlds, setWorlds] = useState<ThemeWorld[]>([])

  useEffect(() => {
    const f = async () => {
      const result = await fetchWorlds()
      setWorlds(result)
      console.log('j')
    }
    f()
  }, [])
  return (
    <AllBox>
      <div className="topBar">主题世界</div>
      <div className="world-box">
        {worlds.map((k, i) => {
          return <WorldItem key={i} {...k} />
        })}
      </div>
    </AllBox>
  )
}

const AllBox = styled.div`
  .topBar {
    width: 100%;
    height: 100px;
    background-color: white;
  }
  .world-box {
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export default AllWorld
