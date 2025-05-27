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
import { Label, Input } from "reactstrap";

function BootstrapForm() {

    return (
        // <Badge color="primary">
        //     Old
        // </Badge>
        // 機能するか確認する。

        <div className="wrap">                
            {/* <!-- 氏名 --> */}
            <div className="input-fld-pnl" id="id-fld">
                <IoPersonOutline size="1.8rem" color="#BDBB20" className="mt-2"/>
                <Label for="name" className="mt-2">氏名</Label>
                {/* className="mt-2" */}
                <Input id="menu_name" name="name" placeholder="氏名を記入しなさい"></Input>
            </div>
            {/* <!--// 氏名 --> */}

            <div className="input-fld-pnl" id="id-fld">
                    <IoMailOutline size="1.8rem" color="#33A80F" className="mt-2"></IoMailOutline>
                    <Label for="name" className="mt-2">E-mail</Label>
                    <Input id="menu_name" name="name" placeholder="メールアドレスを記入しなさい"></Input>
            </div>

            <div className="input-fld-pnl" id="id-fld">
                    <FaPhone size="1.8rem" color="#B0A833" className="mt-2"></FaPhone>
                    <Label for="name" className="mt-2">電話番号</Label>
                    <Input id="menu_name" name="name" placeholder="氏名を記入しなさい"></Input>
            </div>

            <div className="input-fld-pnl" id="id-fld">
                <MdOutlineDescription size="1.8rem" color="#B155AA" className="mt-2"></MdOutlineDescription>
                <Label for="name" className="mt-2">本文</Label>
                <Input id="content" name="name" placeholder="本文を記入しなさい" type="textarea"></Input>
            </div>

        </div>
    )

} //

export default BootstrapForm;