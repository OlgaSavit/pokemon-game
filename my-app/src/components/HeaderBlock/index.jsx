import style from './style.module.css'
const Header=({title,description})=>{
    return(
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </header>
    )
}
export default Header;