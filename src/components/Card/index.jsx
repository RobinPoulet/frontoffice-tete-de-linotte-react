import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/style/colors'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'
import { Link } from 'react-router-dom'

const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #007bff;
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  display: inline-block;
`

const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 18px;
  font-weight: bold;
  objectfi: cover;
  margin-bottom: 10px;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px
  padding: 20px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2)
;  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`

const CardDescription = styled.p`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`

const CardPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
`

const CardStock = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  margin-left: 10px;
`

const Card = ({ product }) => {
  const theme = useSelector(selectTheme)
  const { _id, avatarUrl, description, inStock, name, price } = product

  return (
    <Link to={`/products/${_id}`}>
      <CardWrapper theme={theme}>
        <CardLabel theme={theme}>toto</CardLabel>
        <CardImage src={avatarUrl} alt={name} />
        <CardTitle theme={theme}>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>{price}</CardPrice>
        <CardStock>{inStock}</CardStock>
      </CardWrapper>
    </Link>
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Card
