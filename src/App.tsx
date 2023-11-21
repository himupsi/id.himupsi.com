import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

const style: React.CSSProperties  = {
  display: 'flex',
  flex: '1 1 100%',
}
import {
  RecoilRoot,
} from 'recoil';


function App() {
  return <>
    <div className="App" style={style}>
      <RecoilRoot>
        <RouterProvider router={router}></RouterProvider>
      </RecoilRoot>
    </div>
  </>
}

export default App
