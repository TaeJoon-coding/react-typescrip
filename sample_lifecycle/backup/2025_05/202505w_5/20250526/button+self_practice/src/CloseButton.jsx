import React from 'react';


function CloseButton() {

    const handleClick = (e) => {

        // console.log("閉ボタン、クリック：", e.target.id);
        const modal = document.getElementsByClassName("modal")[0];
        // console.log("modal : ", modal);
        modal.style.visibility = "hidden";
    }//

    return (
        // <button
        <button id='close_btn' className='move2 text_type_A'
        // HTMLでは「class」だけで良かったが、ここでは「className」で行く。
        // スペースで追加のクラスを付加し続ける。
        // 「,」を利用すると後ろのクラスだけが適用される。
        onClick={(e) => handleClick(e)} 
        // 「(e)」は両方に入れるべき。
        style={{width:'200px', height:'50px'}}>         
        Modalを閉じる
        </button>
    )
}

export default CloseButton;