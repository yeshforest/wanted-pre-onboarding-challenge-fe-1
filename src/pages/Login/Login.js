import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginBody,
  Title,
  LoginForm,
  Input,
  LoginButton,
  SignUpButton,
} from "./styled";

const Login = () => {
  const navigate = useNavigate();

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
    <LoginBody>
      <Title>Login</Title>
      <LoginForm>
        <div>
          <Input
            type="email"
            id="email"
            placeholder="email"
            value={auth.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={auth.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <LoginButton>로그인</LoginButton>
        </div>
        <div>
          <SignUpButton onClick={() => navigate("/auth/signup")}>
            회원가입
          </SignUpButton>
        </div>
      </LoginForm>
    </LoginBody>
  );
};

export default Login;
