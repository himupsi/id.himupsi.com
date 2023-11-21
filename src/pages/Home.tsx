import { FC, useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import VisibleObserver from "../components/atomic/VisibleObserver";
import Loading from "../components/atomic/Loading";
import { DEFAULT_HOME_TEXT, HOME_TEXT_VALUE_KEY } from '../Constants';
import Memo from '../components/atomic/Memo';
import { getCieY, getRandomRgb } from '../api/api';

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
}

const fieldLabelStyle = {
  flex: '0 0 50px',
}

const fieldInputStyle = {
  flex: '1 1',
}


const Home: FC = () => {

  const [ userId, setUserId ] = useState<string>('');
  const [ userPassword, setUserPassword ] = useState<string>('');

  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value || '');
  };
  const onChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value || '');
  };

  const login = async () => {
    const response = await fetch("/.netlify/functions/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
        password: userPassword,
      })
    })

    response.json().then((data) => {
      console.log(data)
    })
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
          <div>
            <button onClick={login}>로그인</button>
          </div>

        </div>        
      </div>
    </DefaultLayout>
  );
};

export default Home;
