import React, { Component } from 'react';
import { MdOutlineWebAsset } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import './css/popup_style.css';

class Modal extends Component {

    // const closePopup = (e, className) => {
        // これではできない。
    closePopup = (e, clazz) => {
        // classNameと記入も可
        // classと記入すると間違いが生じる可能性も多いので

        // console.log("閉じる : ", e.currentTarget);
        // 出力：閉じる： <a id="modal_close_btn" href="#"></a>
        
        // console.log("閉じる-2 : ", e.target);
        // 出力 : 
        // 閉じる-2：<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" 
        // style="font-size: 32px;" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>
        
        // console.log("className", clazz);
        // 出力：className modal
        
        let modal = document.querySelector("." + clazz);
        modal.style.visibility = "hidden";
        
    }
    // 

    render() {

        return(
            <div className="modal">
                
                <div className="modal_header">

                    <div className="modal_header_icon">
                        <MdOutlineWebAsset style={{fontSize:'32px'}}/>
                        {/* 
                        Reactでは、このinline styleの作成において、camelCaseにする。
                        値の記入においても「''」が必要。
                         */}
                    </div>

                    <div className="modal_header_title">
                        タイトルです！
                    </div>
                    
                    <div className="modal_header_close">
                        <a href="#" id='modal_close_btn' onClick={(e) => this.closePopup(e, "modal")}>
                            {/* 「this」は非必須。 */}
                            <IoMdClose style={{fontSize:'32px'}}/>
                        </a>
                    </div>

                </div>

                <div className="modal_body" style={{color:'black',textShadow:'1px 1px 1px red'}}>
                    本文です！<br/>
                    これはとにもかくにも本文です！<br/>
                    なんの内容もないですが、本文です！<br/>
                </div>

            </div>
        )
    }

}

export default Modal;