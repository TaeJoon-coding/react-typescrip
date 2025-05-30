import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

// react icons
// https://react-icons.github.io/react-icons/
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";

// import { Badge } from "reactstrap"
import { Label, Input, Button, Alert } from "reactstrap";

function BootstrapForm() {


    // AJAXフォルム転送(fetch)
    const formSubmit = async(e) => {
        console.log("e target : ", e.target);
        
        // 因子
        let name = document.getElementById("menu_name").value;
        let email = document.getElementById("menu_mail").value;
        let phone = document.getElementById("menu_phone").value;
        let description = document.getElementById("menu_description").value;

        console.log("name : ", name);
        console.log("mail : ", email);
        console.log("phone : ", phone);
        console.log("description : ", description);

        const response     
            = await fetch(`http://localhost:3000/actionReactForm/${name}/${email}/${phone}/${description}`, 
		{ 
			method : "GET",
			mode : "cors",
			cache : "no-cache",
			credentials: "same-origin"				   
		});

        const body = await response.json();
        console.log("json body : " + body);
    }//

    return (
        // <Badge color="primary">
        //     Old
        // </Badge>
        // 機能するか確認する。
        <div className="wrap">

            <div className="member_wrap">                
                {/* 氏名 */}
                <div className="input-fld-pnl" id="id-fld">
                    <IoPersonOutline size="1.8rem" color="#BD9944" className="mt-2"/>
                    <Label for="menu_name" className="mt-2">氏名</Label>
                    {/* className="mt-2" */}
                    <Input id="menu_name" className="menu_box" name="name" placeholder="氏名を記入しなさい"></Input>
                </div>
                {/*// 氏名 */}

                {/* メール */}
                <div className="input-fld-pnl" id="id-fld">
                        <IoMailOutline size="1.8rem" color="#33A80F" className="mt-2"></IoMailOutline>
                        <Label for="menu_mail" className="mt-2">E-mail</Label>
                        <Input id="menu_mail" className="menu_box" name="email" placeholder="メールアドレスを記入しなさい"></Input>
                </div>
                {/*// メール */}

                {/* 電話番号 */}
                <div className="input-fld-pnl" id="id-fld">
                        <FaPhone size="1.8rem" color="#B0A833" className="mt-2"></FaPhone>
                        <Label for="menu_phone" className="mt-2">電話番号</Label>
                        <Input id="menu_phone" className="menu_box" name="phone" placeholder="電話番号を記入しなさい"></Input>
                </div>
                {/*// 電話番号 */}

                {/* 本文 */}
                <div className="input-fld-pnl" id="id-fld">
                    <MdOutlineDescription size="1.8rem" color="#B155AA" className="mt-2"></MdOutlineDescription>
                    <Label for="menu_description" className="mt-2">本文</Label>
                    <Input id="menu_description" name="description" placeholder="本文を記入しなさい" type="textarea"></Input>
                </div>
                {/*// 本文 */}

                {/* 提出、キャンセルボタン */}
                <div className="btn-fld-pnl">

                    <div className="btn_type_1">
                        {/* イベントハンドラー処理 */}
                        <Button onClick={(e) => formSubmit(e)} className="btn_style_1">
                            提出
                        </Button>
                    </div>

                    <div className="btn_type_1">
                        <Button className="btn_style_2">
                            キャンセル
                        </Button>
                    </div>

                </div>
                {/*// 提出、キャンセルボタン */}

            </div>



        </div>
    )

} //

export default BootstrapForm;