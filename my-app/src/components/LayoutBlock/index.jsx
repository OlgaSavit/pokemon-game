import style from './style.module.css'
import Card from "../Card";
import data from '../../data'
const Layout=({id, title, descr,urlBg, colorBg, children})=>{
    console.log('cc',children)
    return(
        <section style={{background:urlBg?urlBg:colorBg}} className={style.root} id={id}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {children}

                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;