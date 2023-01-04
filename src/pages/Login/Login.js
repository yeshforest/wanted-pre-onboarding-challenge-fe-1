import { useEffect, useState } from "react";
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAuth((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleToken = (token) => {
    if (window.localStorage.getItem("token")) {
      //토큰 존재한다면
      window.location = "/";
    }
    window.localStorage.setItem("token", token);
  };
  const login = (email, password) => {
    fetch("http://192.168.0.17:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json()) //server에서 보내준 response를 object 형태로 변환
      .then((result) => {
        console.log("결과: ", result); //object로 변환한 response를 console.log에 출력
        if (result.message === "성공적으로 로그인 했습니다") {
          handleToken(result.token);
          alert(result.message);
          window.location = "/";
        } else {
          alert(result.details);
        }
      });
  };
  const handleClick = () => {
    console.log("email: ", auth.email, "\npassword", auth.password);
    login(auth.email, auth.password);
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
          <LoginButton onClick={handleClick}>로그인</LoginButton>
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
