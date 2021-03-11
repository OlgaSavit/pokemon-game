
import './App.css';
import Header from "./components/HeaderBlock/index";
import Layout from "./components/LayoutBlock/index";
import Footer from "./components/FooterBlock/index";
import bg1 from './img/bg1.jpg'
import style from "./components/LayoutBlock/style.module.css";
import data from "./data";
import Card from "./components/Card";
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
      <Layout descr={descrLayout} title={titleLayout} colorBg={colorBgLayout}>
        <div className={style.flex}>
            {
                data.map(item=><Card key={item.id} img={item.img} name={item.name} type={item.type} id={item.id} values={item.values} />)
            }
        </div>
      </Layout>
      <Layout descr={descrLayout} title={titleLayout} urlBg={bg1}/>
      <Footer/>

    </>
  );
}

export default App;
