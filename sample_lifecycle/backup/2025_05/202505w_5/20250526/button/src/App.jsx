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
        <CloseButton></CloseButton><br/>
        </div>

        <div>
        <Modal></Modal><br/>
        </div>
      </div>

  )
}

export default App
