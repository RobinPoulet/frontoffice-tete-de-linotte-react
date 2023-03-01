import React from 'react'
import NavbarApp from '../NavbarApp'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'

const Header = () => {
  const theme = useSelector(selectTheme)

  return <NavbarApp theme={theme} />
}

export default Header
