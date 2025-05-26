// import React, { Component } from 'react';
import { MdOutlineVideogameAsset } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import './css/popup_style.css';
// HTMLでは「link」を使って外付けのCSSを持ってきたが、Reactでは「import」を活用する。


// class Modal extends Component {
function Myth() {
    // 「function」を使うときは「render」は不要、しかし古いやり方。

    // render() {

        return(
            <div className="modal">
                {/* 
                HTMLと同じく、CSSスタイルを活用でき、「class」の代わりに「className」と記入する。
                cssファイルの作成においてはHTMLと同じ。
                 */}
                
                <div className="modal_header">

                    <div className="modal_header_icon">
                        <MdOutlineVideogameAsset style={{fontSize:'32px'}}/>
                        {/* 
                        Reactでは、このinline styleの作成において、camelCaseにする。
                        値の記入においても「''」が必要。
                         */}
                    </div>

                    <div className="modal_header_title">
                        タイトル2です！
                    </div>
                    
                    <div className="modal_header_close">
                        <IoMdClose style={{fontSize:'32px'}}/> 
                    </div>

                </div>

                <div className="modal_body" style={{fontSize:'24px', color:'black', textShadow:'1px 1px 1px coral', lineHeight:'115%'}}>
                    {/* 
                    このようにinline styleをガンガン増やすのも可能ではあるが、可視性が落ちる。
                    処理に関しては外付けと差はない。
                     */}
                    本文です！<br />
                    これはとにもかくにも本文です！<br />
                    文句は受け入れません。<br />
                    ここは私だけのメモ帳ですので！<br />
                </div>

            </div>
        )
    // }

// }
}

export default Myth;