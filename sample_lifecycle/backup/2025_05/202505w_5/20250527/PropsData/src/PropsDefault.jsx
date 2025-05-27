import React, { Component } from 'react';

// 基本値：NullPointerException
// 値を設定してない場合のことで、出力に問題が生じる。
// そのために、別途の基本値を設定する。

class PropsDefault extends Component {

    render() {

        let {
            ReactString,
            ReactNumber
        } = this.props;

        return (
            <div style={{backgroundColor:'cyan', color:'black'}}>
                {ReactString} {ReactNumber}
                {/* 値 */}
            </div>
        );
    } //
}

// 각각의 변수에 기본값(default value)을 할당함
// defaultProps 속성
// https://ko.legacy.reactjs.org/docs/react-component.html#defaultprops
PropsDefault.defaultProps = {
    ReactString : "REACT！",
    ReactNumber : 19.1
}

export default PropsDefault;