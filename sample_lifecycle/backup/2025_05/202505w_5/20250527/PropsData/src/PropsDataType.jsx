import React, { Component } from 'react';
import PropTypes from 'prop-types';

// エラー：[plugin:vite:import-analysis] Failed to resolve import "prop-types" from "src/PropsDataType.jsx". Does the file exist?
// npm install --save prop-types
// このように追加でインストールする必要がある場合も多い。

// 子コンポーネント（PropsDataType）が受け取る「props」のデータ型を宣言するため「PropTypes」が利用されている。
// 親コンポーネントが渡されるpropsのデータ型がここで宣言された型と一致しないと、
// アプリケーションはエラーではなく警告メッセージ（Warning）をコンソールに出力する。
// ので、開発途中のディバッグに非常に役立つ機能である。

class PropsDataType extends Component {

    render() {

        // 地域変数を宣言してpropsで伝われた値を割り当て
        let { String,
                Number,
                Boolean, 
                Array,
                Json,
                Function } = this.props;

        return (
            // 부모 컴포넌트에서 전달한 props 변수들을 화면에 표시.
            <div style={{backgroundColor:'orange'}}>
                <p>StringProps : {String}</p>
                {/* ここで「{String}」を宣言して、「App.jsx」で割り当てる。 */}
                <p>NumberProps : {Number}</p>
                <p>BooleanProps : {Boolean.toString()}</p>
                {/* オブジェクト（Boolean）から文字列（String）に変更 */}
                <p>ArrayProps : {Array.toString()}</p>
                <p>JsonProps : {JSON.stringify(Json)}</p>
                <p>FunctionProps : {Function}</p>
            </div>
        );    

    } //

}

// props 값들을 각각에 적합한 자료형으로 선언. 
// 
// - propTypes
// https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper

// 참고) React 컴포넌트 간에 코드를 공유하기 위해 함수 props를 이용
// https://ko.legacy.reactjs.org/docs/render-props.html#gatsby-focus-wrapper
PropsDataType.propTypes = {

    String : PropTypes.string,
    // String : PropTypes.number, 
    // 문자열(string)을 number로 표현하였기 때문에 console에서 경고 유발됨
    // 경고 메시지 : react-jsx-dev-runtime.development.js:87 
    // Warning: Failed prop type: Invalid prop `String` of type `string` 
    // supplied to `PropsDataType`, expected `number`.    
    Number : PropTypes.number,
    Boolean : PropTypes.bool,
    Array : PropTypes.array,
    Json : PropTypes.object,
    Function : PropTypes.func
}

export default PropsDataType;