import { useState } from "react";
import { useRouter } from "next/router";
import style from "./login.module.css";
import useAPIAuth from "../../apiConfig_TPO/useAPIAuth";
import useAPIData from "../../apiConfig_TPO/useAPIData";

function Login() {
  const { setUser } = useAPIAuth();
  const { getItems } = useAPIData();
  const { getUserEmail } = useAPIAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //console.log(email);
  //console.log(password);
  const handleLogin = async (event) => {
    const user = { email, password };
    const success = await setUser(user);
   console.log(user);
    if (success) {
      router.push("/");
    } else {
      alert("Incorrect Login credentials");
    }
  };

  return (
    <div className={style.logincontainer}>
      <div className={style.header}>
        <h1>Training and placement office</h1>
        <h2>MBM University</h2>
      </div>
      <form onSubmit={handleLogin} className={style.login}>
        <div className={style.userinput}>
          <input
            className={style.input}
            type="email"
            id="username"
            value={email}
            onChange={handleUsernameChange}
            placeholder="Username"
          />

          <input
            className={style.input}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>

        <div className={style.submit}>
          <button className={style.button} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
