import { useState } from 'react'
// import './App.css';

import PropsComponent from './PropsComponent';
import PropsDataType from './PropsDataType'; 
import PropsDefault from './PropsDefault'; 
import StateComponent from './StateComponent' 

import SetStateComponent from './SetStateComponent'

function App() {
// 「render() {」もあるが、もうあんまり利用されない。

  return (

    <div id="div1">
      <h1>REACT開発</h1>
      <p>HTML 適用</p>
      
      {/*
      - props 属性
      : https://ko.legacy.reactjs.org/docs/components-and-props.html#props-are-read-only
      */}
      <PropsComponent props_val="本来の属性"></PropsComponent>

      {/* ----------------------------------------------------------------------------- */}

      {/* 문자열, 숫자형, 불대수형, 배열, 객체, 함수형을 props에 적재하여
      하위 컴포넌트에 전달. */}
      <PropsDataType
          String='react'
          // 「PropsDataType.jsx」の「<p>StringProps : {String}</p>」で宣言された「{String}」に文字列「react」を割り当て
          Number={300}
          Boolean={1 == 1}
          Array={[0,1,2,3]}
          Json={{react:'React', version:'19.1'}}
          // これはオブジェクト、クラス
          Function={console.log("FunctionProps: function!")}
          />

      {/* ----------------------------------------------------------------------------- */}

      {/* props 기본값 활용
        : props의 기본값은 부모 컴포넌트에서 값이 넘어오지 않았을 때를 대비하여
        활용할 수 있습니다. defaultProps라는 문법 속성을 활용하여 기본값을 정의할 수 있습니다.

        - defaultProps : 
        https://ko.legacy.reactjs.org/docs/react-component.html#defaultprops
      */}
      {/* 全部基本値を出力 */}
      <PropsDefault /> 

      {/* ReactNumber 基本値を出力 */}
      <PropsDefault ReactString={"React.js"} />

      {/* ReactString 基本値を出力 */}
      <PropsDefault ReactNumber={16} />
      
      {/* ----------------------------------------------------------------------------- */}

      {/* state 변수 활용
        : 하나의 컴포넌트 안에서 전역(광역) 변수처럼 사용할 수 있습니다.

        참고) State & Life Cycle
        : https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html#gatsby-focus-wrapper

        참고) 컴포넌트 State
        : https://ko.legacy.reactjs.org/docs/faq-state.html#gatsby-focus-wrapper
      */}
      {/* reactString 속성에 "react" 문자열 값을 대입하여 하위 컴포넌트에 전달 */}
      <StateComponent reactString={"react"} />

      {/* ----------------------------------------------------------------------------- */}

      {/* setState 함수 활용
        : "this.state.변수명 = 값"과 같은 식으로 직접 state를 변경하면
        render() 함수를 호출하지 않으므로 화면에 보이는 state 값은 바뀌기 전 상태로
        남게 됩니다. 
        
        이때 setState 함수를 사용하게 되면 state를 변경해야 render() 함수를 호출해
        변경된 값을  화면에 보여줄 수 있습니다.

        簡単に言えば、REACTではかなり重要！

        참고) State & Life Cycle
        : https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html#gatsby-focus-wrapper

        참고) 컴포넌트 State
        : https://ko.legacy.reactjs.org/docs/faq-state.html#gatsby-focus-wrapper
      */}

      {/* reactString 속성에 "react" 문자열 값을 대입하여 하위 컴포넌트에 전달 */}
      <SetStateComponent />

      {/* ----------------------------------------------------------------------------- */}

      {/* 주석 */}      
      {/* <CustomComponent></CustomComponent> */}
      {/* <CustomComponent props_value='속성 예시' /> */}
      {/* <CustomComponentFunction></CustomComponentFunction> */}
    </div>
  );
}

export default App;