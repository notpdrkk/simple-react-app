import styles from './style.module.css'

export const Card = ({imagem, titulo}) => {
    return ( 
        <div className={styles.card}>
            <img src={imagem} alt={titulo} />
            <p>{titulo}</p>
        </div>
    )
}