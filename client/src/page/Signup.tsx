import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <h1 className="logo">Nonshim Instagram</h1>
        <form className="form">
          <input
            type="text"
            placeholder="휴대폰 번호 또는 이메일"
            className="input"
          />
          <input
            type="text"
            placeholder="성명"
            className="input"
          />
          <input
            type="text"
            placeholder="사용자 이름"
            className="input"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="input"
          />
          <button type="submit" className="button">가입하기</button>
        </form>
        <div className="or">
          <div className="line"></div>
          <span className="or-text">또는</span>
          <div className="line"></div>
        </div>
        <button className="facebook-button">
          <i className="fab fa-facebook-f facebook-icon"></i> Facebook으로 로그인
          
        </button>
        <p className="terms">
          가입하면 <strong>인스타그램</strong>의 <a href="#" className="link">약관</a>, <a href="#" className="link">데이터 정책</a> 및 <a href="#" className="link">쿠키 정책</a>에 동의하게 됩니다.
        </p>
      </div>
      <div className="footer">
        계정이 있으신가요? <Link to="/login" className="link">로그인</Link>
      </div>
    </div>
  );
};

export default Signup;