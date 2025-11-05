import styles from './style.module.css'

export const Input = ({type, placeholder, onChange}) => {

  return (
    <input 
      type={type}
      placeholder={placeholder}
      required
      onChange = {onChange}
      className={styles.input}
    />
  )
}