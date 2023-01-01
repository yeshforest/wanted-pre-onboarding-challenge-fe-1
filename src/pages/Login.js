import { useState } from "react";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  console.log("email: ", auth.email);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setAuth((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <div>
      <h1>Login</h1>
      <p>로그인해주세요</p>
      <form>
        아이디
        <input
          type="email"
          id="email"
          placeholder="email을 입력"
          value={auth.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Login;
