import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Athoms'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'

const HomeWraper = styled.div`
  padding: 4%;
  margin: 3%;
`

const HomeContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
`

const HomeContainerLeft = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
  background-position: 50%;

  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 0, 0, 0) 50%,
      rgba(85, 230, 193, 1) 100%
    );
  }
`

const HomeContainerRight = styled.div`
  background-color: rgba(85, 230, 193, 1);
  flex: 1;
  display: flex;
  align-items: flex-start;
  color: white;
  padding: 0 50px;
  justify-content: center;
  flex-direction: column;
`
const HomeContainerRightH1 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 500;
`

const HomeContainerRightH2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 30px 0;
`

const HomeContainerRightBtnWhite = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  background-color: white;
  color: rgba(85, 230, 193, 1);
  font-weight: 500;

  &&:hover {
    transform: translateY(-2px);
  }
`

const HomeMiddle = styled.div`
  background-color: white;
  padding: 30px 0;
`

const HomeMiddleH2 = styled.h2`
  color: #35495e;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 20px;
`

const HomeMiddleListContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`

const Home = () => {
  const theme = useSelector(selectTheme)

  return (
    <div className="home">
      <HomeWraper>
        <HomeContainer>
          <HomeContainerLeft></HomeContainerLeft>
          <HomeContainerRight>
            <HomeContainerRightH1>Tête de linotte</HomeContainerRightH1>
            <HomeContainerRightH2>
              Création artisanale bijoux fantaisies
            </HomeContainerRightH2>
            <HomeContainerRightBtnWhite>
              <StyledLink $theme={theme} to="/products">
                Voir le catalogue
              </StyledLink>
            </HomeContainerRightBtnWhite>
          </HomeContainerRight>
        </HomeContainer>
        <HomeMiddle>
          <HomeMiddleListContainer>
            <HomeMiddleH2>Derniers articles</HomeMiddleH2>
            <div style={{ textAlign: 'center' }}>
              Ici on remplacera ce bloc par un composant Liste
            </div>
          </HomeMiddleListContainer>
        </HomeMiddle>
      </HomeWraper>
    </div>
  )
}

export default Home
