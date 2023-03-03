import styles from '../styles/BotaoAba.module.css'


function BotaoAba ({nomeBotao}) {


    return (
        <div className={styles.teste}>
            <h1 className={styles.text}>{nomeBotao}</h1>
        </div>
    )
}

export default BotaoAba;