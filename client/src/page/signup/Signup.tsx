// src/page/Signup.tsx
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils'; // classnames 유틸리티 함수
import './signup.css';
//import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS 임포트

const Signup: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // to-do 회원가입 로직을 추가
  };

  return (
    <div className={cn("signup-container")}>
      <div className={cn("form-wrapper")}>
        <h1 className={cn("logo")}>Nonshim Instagram</h1>
        <button
          type="button"
          className={cn("facebook-button")}
          onClick={() => {
            console.log('Facebook 로그인 버튼 클릭됨');
          }}
        >
          <i className="fab fa-facebook-f facebook-icon"></i> Facebook으로 로그인
        </button>
        <div className="social-buttons">
          <button className="social-button kakao-button">
            KakaoTalk으로 로그인
          </button>
          <button className="social-button naver-button">
            Naver로 로그인
          </button>
        </div>
        <div className={cn("or")}>
          <div className="line"></div>
          <span className="or-text">또는</span>
          <div className="line"></div>
        </div>
        <form className={cn("form")} onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="sr-only">휴대폰 번호 또는 이메일</label>
            <input
              id="email"
              type="text"
              placeholder="휴대폰 번호 또는 이메일"
              className={cn("input")}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="sr-only">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              className={cn("input")}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="fullName" className="sr-only">성명</label>
            <input
              id="fullName"
              type="text"
              placeholder="성명"
              className={cn("input")}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="username" className="sr-only">사용자 이름</label>
            <input
              id="username"
              type="text"
              placeholder="사용자 이름"
              className={cn("input")}
              required
            />
          </div>
          
          <button type="submit" className={cn("button")}>가입하기</button>
        </form>

        <p className={cn("terms")}>
          가입하면 <strong>Nonshim Instagram</strong>의 <Link to="#" className="link">약관</Link>, <Link to="#" className="link">데이터 정책</Link> 및 <Link to="#" className="link">쿠키 정책</Link>에 동의하게 됩니다.
        </p>
      </div>
      <div className={cn("footer")}>
        <p className="text-gray-600 text-sm">
          계정이 있으신가요? <Link to="/login" className="link">로그인</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;