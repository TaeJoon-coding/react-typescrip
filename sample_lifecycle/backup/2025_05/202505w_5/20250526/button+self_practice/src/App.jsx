// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import CustomComponent from './CustomComponent'
import OpenButton from './OpenButton';
import CloseButton from './CloseButton';
import Modal from './Modal'
import './css/button.css';


function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <div>
        <OpenButton></OpenButton><br/>
        {/* 
        コンポーネント部分に「id="open_btn"」を入れて、<OpenButton id="open_btn">に変更して、
        「OpenButton.jsx」で、「id='open_btn'」を削除して、「<button」に変更、
        又、「import './css/button.css';」をここだけ入れる場合と「OpenButton.jsx」にも入れる方法を実験してみた。
        結果、どっちも反映されなかった。
        */}
        {/* 
        <OpenButton className='move1'></OpenButton><br/> 
        同様、「className=''」も聞かない。
        */}
        <CloseButton></CloseButton><br/>
        </div>

        <div>
        <Modal></Modal><br/>
        </div>
      </div>

  )
}

export default App
