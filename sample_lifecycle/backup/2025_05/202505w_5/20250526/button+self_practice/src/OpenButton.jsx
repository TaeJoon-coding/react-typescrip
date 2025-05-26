import React from 'react';
import './css/button.css';


function OpenButton() {

    const handleClick = (e) => {

        // console.log("開ボタン、クリック：", e.target.id);
        const modal = document.getElementsByClassName("modal")[0];
        // console.log("modal : ", modal);
        modal.style.visibility = "visible";
    }//

    // onClick={handleClick}
    // onClick={(e) => handleClick(e)}

    return (
        // <button 
        <button id='open_btn' className='move1'
        // onClick={handleClick}>
        // onClick={andleClick(e)}> 
        // onClick={() => handleClick}>
        // onClick={() => handleClick(e)}> 
        // onClick={(e) => handleClick()} >
        onClick={(e) => handleClick(e)} 
        // 「(e)」は両方に入れるべき。
        style={{width:'200px', height:'50px'}}>         
        Modalを開く
        </button>
    )
}

export default OpenButton;