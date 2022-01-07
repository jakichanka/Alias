import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
`

const Menu = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`

const MenuItem = styled.li`
  list-style-type: none;
  display: block;
  & a {
    text-decoration: none;
  }
`

export function Header() {
  return (
    <header>
      <Wrapper>
        <div>
          Icon
        </div>
        <Menu>
          <MenuItem>
            <Link to='.'>Welcome</Link>
          </MenuItem>
          <MenuItem className='header_menu-item'>
            <Link to='rules'>Rules</Link>
          </MenuItem>
        </Menu>
        <div>Buttons</div>
      </Wrapper>
    </header>
  )
}
