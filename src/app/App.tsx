
import './App.css'
import Banner from './layouts/Banner/Banner'
import Navbar from './layouts/Navbar/Navbar'
import About from './layouts/About/About'
import Services from './layouts/Services/Services'
import Footer from './layouts/Footer/Footer'
import Form from './contact/Form'


function App() {
  return (
    <div className="">
      <Navbar />
      {/* <Banner /> */}
      <About />
      <Services/>
      {/* <Form/> */}
      <Footer/>
    </div>
  )
}

export default App
