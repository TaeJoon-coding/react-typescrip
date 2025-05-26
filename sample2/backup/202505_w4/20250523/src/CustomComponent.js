import React, { Component } from 'react';
/**
 * import Reactで先ずreactであることを示す。
 */
import "./css/custom.css";

class CustomComponent extends Component {
    /**
     * class型コンポーネント。
     * 「extends Component」を入れることで、
     * 「 { Component } from 'react' 」を相続したことになる。
     * class AAAが extends BBB所属のこと。
     */
/**
 * ===============================================================
 * この上は
 */
    render() {
        /**
         * コードを解釈して、webにアップロード可能にする。
         */
        return (
            /**
             * 何かの返還の値を入力する。
             * ここでは<div>を利用してみる。
             */
            <div id="custom_div">
                ユーザー作成コンポーネント
            </div>
        )
    } //
}

export default CustomComponent;
//「export」で実際に出力させる。
