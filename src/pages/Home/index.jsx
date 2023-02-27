import styled from 'styled-components'

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
`

const HomeContainerRight = styled.div`
  background-color: rgba(85, 230, 193,1.0);
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


const Home = () => {
  return (
    <div className="home">
      <HomeContainer>
        <HomeContainerLeft>
        </HomeContainerLeft>
        <HomeContainerRight>
          <HomeContainerRightH1>Tête de linotte</HomeContainerRightH1>
  				<HomeContainerRightH2>Création artisanale "made in France"</HomeContainerRightH2>
        </HomeContainerRight>
      </HomeContainer>
    </div>
  );
}

export default Home