import Header from '../components/Header'
import Content from '../Content'
import Footer from '../components/Footer'

function Template(props) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  )
}

export default Template
