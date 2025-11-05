export const Input = ({type, placeholder, onChange}) => {

  return (
    <input 
      type={type}
      placeholder={placeholder}
      required
      onChange = {onChange}
    />
  )
}