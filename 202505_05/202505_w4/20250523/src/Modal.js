import React, { Component } from 'react';
import { MdOutlineWebAsset } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import './css/popup_style.css';

class Modal extends Component {
    
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
                        <IoMdClose style={{fontSize:'32px'}}/> 
                    </div>

                </div>

                <div className="modal_body">
                    本文です！これはとにもかくにも本文です！
                </div>

            </div>
        )
    }

}

export default Modal;