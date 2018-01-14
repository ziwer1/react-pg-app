import React from 'react'
import logo from 'assets/logo.svg'
import styled, { keyframes } from 'styled-components'
import NavBar from './NavBar'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopBar = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: #fff;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`

function Header() {
  return (
    <div>
      <NavBar/>
      <TopBar>
        <img src={logo} className="redux-logo" alt="logo" />
        <h2>Welcome to ReactHack App</h2>
      </TopBar>
    </div>
  )
}

export default Header
