import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpBody,
  Title,
  SignUpForm,
  Input,
  LoginButton,
  SignUpButton,
  InfoText,
} from "./styled";

const SignUp = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    email: "",
    password: "",
    checkingPW: "",
  });
  const [validEmail, setValidEmail] = useState(false);
  const [validPW, setValidPW] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAuth((prev) => ({
      ...prev,
      [id]: value,
    }));
    switch (id) {
      case "email":
        IsValidEmail(value);
        break;
      case "checkingPW":
        IsValidPW(value); //재입력 pw, 이미 set되어있는 pw 비교
        break;
      default:
        break;
    }
  };
  const signup = (email, password) => {
    fetch("http://192.168.0.17:8080/users/create", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json()) //server에서 보내준 response를 object 형태로 변환
      .then((result) => alert("결과: ", result)); //object로 변환한 response를 console.log에 출력
  };
  const handleClick = () => {
    signup(auth.email, auth.password);
  };
  const IsValidEmail = (email) => {
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regex.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const IsValidPW = (checkingPW) => {
    if (auth.password === checkingPW && checkingPW.length >= 8) {
      setValidPW(true);
    } else {
      setValidPW(false);
    }
  };
  return (
    <SignUpBody>
      <Title>SignUp</Title>
      <SignUpForm>
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
          <Input
            type="password"
            id="checkingPW"
            placeholder="비밀번호 재입력"
            value={auth.checkingPW}
            onChange={handleChange}
          />
          <InfoText>
            {validEmail ? "" : "유효한 이메일을 입력해주세요."}
          </InfoText>
          <InfoText>
            {validPW ? "" : "비밀번호가 다르거나 유효하지 않습니다."}
          </InfoText>
        </div>

        <div>
          <SignUpButton onClick={handleClick}>회원가입</SignUpButton>
        </div>
        <div>
          <LoginButton onClick={() => navigate("/auth/login")}>
            로그인
          </LoginButton>
        </div>
      </SignUpForm>
    </SignUpBody>
  );
};

export default SignUp;
