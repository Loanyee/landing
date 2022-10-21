import style from "./style.module.css";

const Button = ({ title }) => {
  return <button className={style.button}>{title}</button>;
};

export default Button;
