
import './App.css';
import Header from "./components/HeaderBlock/index";
import Layout from "./components/LayoutBlock/index";
import Footer from "./components/FooterBlock/index";
import bg1 from './img/bg1.jpg'
function App() {
    const headerTitle='This is title';
    const headerDescriptions='This is Description!';
    const idLayout='1';
    const titleLayout='its title';
    const descrLayout='its description text';
    const urlBgLayout=bg1;
    const colorBgLayout='blue';


  return (
    <>
       <Header title={headerTitle} description={headerDescriptions}/>
      <Layout descr={descrLayout} title={titleLayout} urlBg={urlBgLayout}/>
      <Layout descr={descrLayout} title={titleLayout} colorBg={colorBgLayout}/>
      <Layout descr={descrLayout} title={titleLayout} urlBg={bg1}/>
      <Footer/>

    </>
  );
}

export default App;
