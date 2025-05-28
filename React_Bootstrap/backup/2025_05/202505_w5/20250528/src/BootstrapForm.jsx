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
import { Label, Input, Button } from "reactstrap";

function BootstrapForm() {

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
                    <Label for="name" className="mt-2">氏名</Label>
                    {/* className="mt-2" */}
                    <Input id="menu_name" name="name" placeholder="氏名を記入しなさい"></Input>
                </div>
                {/*// 氏名 */}

                {/* メール */}
                <div className="input-fld-pnl" id="id-fld">
                        <IoMailOutline size="1.8rem" color="#33A80F" className="mt-2"></IoMailOutline>
                        <Label for="mail" className="mt-2">E-mail</Label>
                        <Input id="menu_name" name="mail" placeholder="メールアドレスを記入しなさい"></Input>
                </div>
                {/*// メール */}

                {/* 電話番号 */}
                <div className="input-fld-pnl" id="id-fld">
                        <FaPhone size="1.8rem" color="#B0A833" className="mt-2"></FaPhone>
                        <Label for="phone" className="mt-2">電話番号</Label>
                        <Input id="menu_name" name="phone" placeholder="電話番号を記入しなさい"></Input>
                </div>
                {/*// 電話番号 */}

                {/* 本文 */}
                <div className="input-fld-pnl" id="id-fld">
                    <MdOutlineDescription size="1.8rem" color="#B155AA" className="mt-2"></MdOutlineDescription>
                    <Label for="document" className="mt-2">本文</Label>
                    <Input id="content" name="document" placeholder="本文を記入しなさい" type="textarea"></Input>
                </div>
                {/*// 本文 */}

                {/* 提出、キャンセルボタン */}
                <div className="btn-fld-pnl">
                    <div className="btn_type_1">
                        <Button className="btn_style_1">
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