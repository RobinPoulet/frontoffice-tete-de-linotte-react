import Header from '../components/Header'
import Content from '../Content'
import Footer from '../components/Footer'

function Template(props) {
  return (
    <>
      <Header />
      <Content>
        <div className="container d-flex my-content">{props.children}</div>
      </Content>
      <Footer />
    </>
  )
}

export default Template
