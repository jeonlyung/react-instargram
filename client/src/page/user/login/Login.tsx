// src/Login.tsx
import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    //kakao로그인 추가
    console.log('일반 로그인 시도:', {userId, password});
  };

  const handleKakaoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    //kakao로그인 추가
    console.log('카카오 로그인 시도:');
  };

  const handleNaverLogin = (e: React.FormEvent) => {
    e.preventDefault();
    //naver로그인 추가
    console.log('네이버 로그인');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="logo">Instagram</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="login-button">로그인</button>
        </form>
        <div className={"or"}>
          <div className="line"></div>
          <span className="or-text">또는</span>
          <div className="line"></div>
        </div>
        <img className={"naver-login-button"} src="/image/kakaoLogin/kakao_login_largeBtn.png" />
        <img className={"kakao-login-button"} src="/image/naverLogin/naver_login_mediumBtn.png" />
      </div>
      <div className="signup-box">
        계정이 없으신가요? <Link to="/user/signup/Signup">가입하기</Link>
      </div>
    </div>
  );
};

export default Login;
