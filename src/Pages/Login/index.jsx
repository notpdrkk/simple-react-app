import styles from "./style.module.css";
import logo from "../../assets/pobreflix-logo.png";
import { ButtonComponent } from "../../Components/Button";
import { Input } from "../../Components/Input";

const Login = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo da Pobreflix" className={styles.logo} />
      <div className={styles.PainelDeLogin}>
        <form>
          <Input
            type="email"
            placeholder="Digite seu email..."
            required
            value="email"
            onChange={(e) => e.target.value}
          />

          <Input
            type="password"
            placeholder="Digite sua senha..."
            required
            value="password"
            onChange={(e) => e.target.value}
          />
        </form>

        <div className={styles.Campos}></div>
      </div>
    </div>
  );
};
export default Login;
