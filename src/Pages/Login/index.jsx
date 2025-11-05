import styles from "./style.module.css";
import logo from "../../assets/pobreflix-logo.png";
import { ButtonComponent } from "../../Components/Button";
import { Input } from "../../Components/Input";

export const Login = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo da Pobreflix" className={styles.logo} />
      <div className={styles.painelDeLogin}>
        <h2 className={styles.logar}>Login</h2>
        <form className={styles.form}>
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
        <a href="../Home">
          <ButtonComponent text="Entrar" />
        </a>
      </div>
    </div>
  );
};

