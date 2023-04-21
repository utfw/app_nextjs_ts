import Header from '@/component/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )

}

/* 
Component: 현재 페이지를 의미, 페이지 변경 시 해당 Component 는 변경
pageProps:DataFatching 메소드를 이용해 미리 가져온 초기 객체. 

_app.tsx, _document.tsx는 서버에서만 실행됨. 
*/