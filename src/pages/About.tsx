import {FC, useEffect, useState} from "react";
import DefaultLayout from "../components/layout/DefaultLayout";


const aboutStyle = {
  flex: '1 1',
  display: 'flex',
  padding: '20px',
  color: '#CCC',
};

const linkStyle = {
  textDecoration: 'none',
}

const About: FC = () => {
  return (
    <DefaultLayout>
      <div style={aboutStyle}>
        <div>
        힘이 없습니다.<br/><br/>
        흥미 주도 개발(Interest Driven Development)
        <br/><br/>
        적용 기술?<br/>
        - React&nbsp;<a style={linkStyle} href="https://ko.reactjs.org/" target="_blank">⚛️</a><br/>
        - Vite&nbsp;<a style={linkStyle} href="https://vitejs-kr.github.io/guide/" target="_blank">⚡️</a><br/>
        <br/>
        Web APIs<br/>
          <li>
          Page Visibility API&nbsp;<a style={linkStyle} href="https://developer.mozilla.org/ko/docs/Web/API/Page_Visibility_API" target="_blank">📑</a>
          </li>
          <li>
            IntersectionObserver&nbsp;<a style={linkStyle} href="https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver" target="_blank">👀</a>
          </li>

        </div>
      </div>
    </DefaultLayout>
  );
}

export default About;