import React from 'react'
import styled from 'styled-components'

const SingleItemWrapper = styled.div`
  max-width: 75%;
  position: relative;
  display: block;
  margin: 0 auto;
  height: 100vh;
  padding: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;
  }
`

const SingleItemRow = styled.div`
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`

const SingleItemColumn = styled.div`
  float: left;
  width: 43%;
  height: 90vh;
  justify-content: center;
  margin-right: 13px;
  margin-top: 10px;

  @media (max-width: 600px) {
    width: 100%;
    height: 90vh;
    margin-bottom: 10px;
    right: 0;
    left: 0;
    top: 0;
  }
`

const SingleItemImgHolder = styled.div`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
`

const SingleItemDescription = styled.p`
    margin-left: 10px;
    font-size: 0.8em;
    font-weight: 500;
    
    @media (max-width: 600px) {
        font-size: 1em;
    }    
`

const SingleItemPriceWrapper = styled.div`
  background-color: #121212;
  height: 8vh;
  width: 30%;
  margin-left: 30px;
  margin-top: 15px;
  padding: 0.5em;
  color: white;
  font-weight: bold;
  font-size: 1em;
  display: inline-block;
  text-align: center;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
`

const SingleItem = ({ picture, name, description, price }) => {
  return (
    <SingleItemWrapper>
      <SingleItemRow>
        <SingleItemColumn>
          <SingleItemImgHolder imgUrl={picture} />
        </SingleItemColumn>
        <SingleItemColumn>
          <h3>{name}</h3>
          <SingleItemDescription>{description}</SingleItemDescription>
          <SingleItemPriceWrapper>{price}</SingleItemPriceWrapper>
        </SingleItemColumn>
      </SingleItemRow>
    </SingleItemWrapper>
  )
}

export default SingleItem
