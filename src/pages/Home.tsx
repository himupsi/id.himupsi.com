import { FC, useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';

const homeStyle = {
  flex: '1 1',
  maxWidth: '300px',
  display: 'flex',
  justifyContent: 'center',
}

const loginFormStyle = {
  display: 'flex',
  flex: '0 0',
  alinContent: 'center',
}

const fieldStyle = {
  display: 'flex',
  marginBottom: '10px',
}

const fieldLabelStyle = {
  flex: '0 0 30px',
}

const fieldInputStyle = {
  flex: '1 1',
}

const footerStyle = {
  display: 'flex'
}

const loginButtonStyle = {
  flex: '1 1',
  height: '30px',
}


const Home: FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [ userId, setUserId ] = useState<string>('');
  const [ userPassword, setUserPassword ] = useState<string>('');

  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value || '');
  };
  const onChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value || '');
  };

  const login = async () => {
    fetch("/.netlify/functions/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
        password: userPassword,
      })
    }).then((res) => {
      if (res.ok) {
        const url = urlParams.get('url') || 'https://himupsi.com';
        window.location.replace(url);
      } else {
        res.json().then((data) => {
          alert(data.message);
        }).catch((error) => {
          alert('로그인에 실패했습니다.');
        });
      }
    });
  };
  
  return (
    <DefaultLayout>
      <div style={ homeStyle } className="hus-flex-column">
        <div style={loginFormStyle} className="hus-flex-column">
          <div style={fieldStyle}>
            <div style={fieldLabelStyle}>ID</div>
            <input style={fieldInputStyle} type="text" onChange={onChangeUserId} value={userId}  />          
          </div>
          <div style={fieldStyle}>
            <div style={fieldLabelStyle}>PW</div>
            <input style={fieldInputStyle} type="password" onChange={onChangeUserPassword} value={userPassword}  />          
          </div>
          <div style={footerStyle}>
            <button style={loginButtonStyle}
              onClick={login}>로그인</button>
          </div>

        </div>        
      </div>
    </DefaultLayout>
  );
};

export default Home;
