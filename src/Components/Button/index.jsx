import styles from './style.module.css'

export const ButtonComponent = ({ text, onClick }) => {
  return (
    <button className={styles.botao} onClick={onClick}>
      {text}
    </button>
  );
};

