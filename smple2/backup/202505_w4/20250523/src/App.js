import './App.css';

import CustomComponent from './CustomComponent';

// import Modal from './Modal';
import Myth from './Modal_2';

// 「Modal」と「Modal_2」を活用して練習してみること。
// 「<tag></tag>」、「<tag/>」などなどがXML。
function App() {
  return (
    <div id='div1'>
      <h1>React開発</h1>
      <p>HTML適用</p>

      <CustomComponent></CustomComponent>
      {/* <Modal></Modal> */}
      <Myth/>
    </div>
  );
}

export default App;
