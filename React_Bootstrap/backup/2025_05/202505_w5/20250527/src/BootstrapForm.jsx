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

import "bootstrap/dist/css/bootstrap.min.css";




function BootstrapForm() {

    return (
        // <Badge color="primary">
        //     Old
        // </Badge>
        // 機能するか確認する。

        <div className="wrap">                
            {/* <!-- 氏名 --> */}
            <div className="input-fld-pnl" id="id-fld">
                {/* <label For="name">
                    <span className="txt-label">
                        氏名
                    </span>
                </label>
                <input className="input-fld" type="text" id="name" name="name"></input> */}
                <IoPersonOutline size="1.8rem" color="#BDBB20" className="mt-2"/>
                <Label for="name" className="mt-2">氏名</Label>
                {/* className="mt-2" */}
                <Input id="name" name="name" placeholder="氏名を記入しなさい"></Input>
            </div>
            {/* <!--// 氏名 --> */}

            <div className="input-fld-pnl" id="id-fld">
                    <IoMailOutline size="1.8rem" className="mt-2"></IoMailOutline>
                    <Label for="name" className="mt-2">E-mail</Label>
            </div>

            <div>
                    <FaPhone size="1.8rem" className="mt-2"></FaPhone>
                    <Label for="name" className="mt-2">電話番号</Label>
            </div>

            <div>
                    <MdOutlineDescription size="1.8rem" className="mt-2"></MdOutlineDescription>
                    <Label for="name" className="mt-2">本文</Label>
            </div>

        </div>
    )

} //

export default BootstrapForm;