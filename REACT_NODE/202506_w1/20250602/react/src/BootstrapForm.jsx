import React, { use, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

// react icons
// https://react-icons.github.io/react-icons/
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";

// import { Badge } from "reactstrap"
import { Label, Input, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function BootstrapForm() {

    // HOOK
    // 「useState」を利用してコンポーネントの状態を管理する。
    // useState：「関数コンポーネント」に「状態」を追加するための「React hook」
    // 簡単に言うと、関数コンポーネント内で、データが変化した時UIが更新される。
    // 
    // 追記：「useState」を呼び出すと「現在の状態の値（state variable）」と「状態を更新する関数（setter function）」
    // の二つの要素を持つ配列が返される。
    // 
    // 「useState()」はその状態の初期値
    const [nameCheck, setNameCheck] = useState(false);
    // 「setNameCheck」：nameCheckの状態を更新し、コンポーネントが再びレンダリングされ、UIが更新されることがある。
    // で、初期値「false」：最初にロードされたときはnameCheckがまだ行われていない、もしくは「true」でないこと
    const [nameError, setNameError] = useState("");
    // 「setNameError」：「nameError」の状態を更新し、関数を呼び出して、その値を変更し、コンポーネントを再びレンダリング、
    // エラーメッセージを表示する。
    // ので、エラーを探知する前の基本値は「""」。
    const [emailCheck, setEmailCheck] = useState(false);
    const [emailError, setEmailError] = useState("");

    const [phoneCheck, setPhoneCheck] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    const [descriptionCheck, setDescriptionCheck] = useState(false); 
    const [descriptionError, setDescriptionError] = useState(""); 

    const [modal, setModal] = useState(false);  //Modalの状態
    const toggle = () => setModal(!modal);      //Modalトグル（toggle）
    const [saveMsg, setSaveMsg] = useState(""); //会員情報保存メッセージ

    // 
    /* フォルムフィールドデータ有効性の点検 */
    /* 氏名 */
    const formNameCheck = (e) => {
        let nameFld = document.getElementById("menu_name");
        let nameRegex = /^[一-龠ぁ-ゔァ-ヴー々0-9A-Za-z]{2,100}$/;
        // let nameRegex = /^[一-龠ぁ-ゔァ-ヴー々0-9A-Za-z]{2,100}$/;
        // /**
        //  * 一-龠: 日本漢字（CJK統合漢字）の主な範囲
        //  * ぁ-ゔ: ひらがなの範囲
        //  * ァ-ヴ: カタカナの範囲
        //  * ー: 長音記号（例: 「ラーメン」の「ー」）
        //  * 々: 同の字点（繰り返し記号）
        //  * 〆: 締め（「締め切り」の「〆」）
        //  * 〤: 踊り字（繰り返し記号。例: 「日々」の「々」）
        //  * ０-９: 全角数字
        //  * 0-9: 半角数字
        //  * Ａ-Ｚ: 全角大文字アルファベット
        //  * ａ-ｚ: 全角小文字アルファベット
        //  * A-Z: 半角大文字アルファベット
        //  * a-z: 半角小文字アルファベット
        //  * 異常が日本語入力、必要ない部分は削除した。
        //  */
        // let nameRegex = /^[가-힣]{2,100}$/; // 한글 2 ~ 100자

        // if (nameRegex.test(name.value) == true) {
        //     console.log("適切な氏名");
        //     setNameCheck(true);
        //     setNameError("")
        //     // 記入規則を従ったと判定される時
        // } else {
        //     console.log("不適切な氏名");
        //     setNameCheck(false);
        //     setNameError("正しい氏名を記入しなさい");            
        // }
        /* //氏名 */

        if (nameRegex.test(nameFld.value) == true) {
                console.log("適切な氏名");
                setNameCheck(true);
                setNameError("")
                // 記入規則を従ったと判定される時
        } else {
                console.log("不適切な氏名");
                setNameCheck(false);
                setNameError("正しい氏名を記入しなさい");            
        }
    }// /* //氏名 */

    /* E-メール */
    const formEmailCheck = (e) => {
        let emailFld = document.getElementById("menu_email");
        let emailRegex = /^[a-zA-Z0-9_+.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/;
        // 基本的なメールアドレスの正規表現としては適切。
        // 特集な場合、「+[a-zA-Z0-9]{2,4}」の部分（トップレベルドメイン（TLD））が4文字以上になるのも存在する。
        // TLDがIPアドレスになる場合もあるが一般的なメールアドレスの場合、これだけでも正しい。
        if (emailRegex.test(emailFld.value) == true) {
            console.log("適切なメールアドレス");
            setEmailCheck(true);
            setEmailError("");
        } else {
            console.log("不適切なメールアドレス");
            setEmailCheck(false);
            setEmailError("メールアドレスが正しくありません");
        } 
    }// /* //E-メール */

    /* 電話番号 */
    const formPhoneCheck = (e) => {
        let phoneFld = document.getElementById("menu_phone");
        let phoneRegex = /^\d{3}\d{4}\d{4}$/; //  ex) 01012345678
        if (phoneRegex.test(phoneFld.value) == true) {
            console.log("適切な連絡先");
            setPhoneCheck(true);
            setPhoneError("");
        } else {
            console.log("不適切な連絡先");
            setPhoneCheck(false);
            setPhoneError("連絡先が正しくありません");
        }
    }// /* //電話番号 */

    /* 本文 */
    const formDescription =(e) => {
        let descriptioFld =document.getElementById("menu_description");
        // let descriptionRegex = /[가-힣]{2,}/; // 최소 2글자 이상
        // 韓国語の場合
        let descriptionRegex = /^[一-龠ぁ-ゔァ-ヴー々〆〤0-9A-Za-z、。，．・？！（）［］｛｝「」『』【】《》〈〉“”（）‘’『』_~:;'"\-=+*\/&%$#@!?.,\s\(\)\[\]\^_\{\}\|]{3,}$/; 
        // 日本語の正規表現、最低3文字以上
        // 氏名とは違って、文章なので一般的な日本語の句読点や記号をできるだけ入れる。
        // 英語で利用される句読点も入れる。
        // 本格的な掲示板ではないので全部できるようにはしない。
        // 又、セキュリティー的にも良くない。
        if (descriptionRegex.test(descriptioFld.value) == true) {
            console.log("本文が適切");
            setDescriptionCheck(true);
            setDescriptionError("");
        } else {
            console.log("本文が不適切");
            setDescriptionCheck(false);
            setDescriptionError("本文は2文字以上の英語、もしくは日本語で作成してください。");
        }
    }// /* //本文 */

    // AJAXフォルム転送(fetch)
    const formSubmit = async(e) => {
        console.log("e target : ", e.target);
        
        // 因子
        let name = document.getElementById("menu_name").value;
        let email = document.getElementById("menu_email").value;
        let phone = document.getElementById("menu_phone").value;
        let description = document.getElementById("menu_description").value;

        // let name = document.getElementById("menu_name");        
        // let email = document.getElementById("menu_email");
        // let phone = document.getElementById("menu_phone");
        // let description = document.getElementById("menu_description");

        console.log("name : ", name);
        console.log("email : ", email);
        console.log("phone : ", phone);
        console.log("description : ", description);

        // console.log("name : ", name.value);
        // console.log("mail : ", email.value);
        // console.log("phone : ", phone.value);
        // console.log("description : ", description.value);

        
        /* //本文 */
        console.log("nameCheck : ", nameCheck);
        console.log("emailCheck : ", emailCheck);
        console.log("phoneCheck : ", phoneCheck);
        console.log("descriptionCheck : ", descriptionCheck);
        /* //フォルムフィールドデータ有効性の点検 */

        /* フォルム点検完了、送信準備 */
        if ((nameCheck == true) && (emailCheck == true) && (phoneCheck == true) && (descriptionCheck == true)) {
            console.log("フォルム点検完了、送信準備");

        const response = await fetch(`http://localhost:3000/actionReactForm/${name}/${email}/${phone}/${description}`, { 
            // 「fetch」方式の方が速い。
			method : "GET",
			mode : "cors",
			cache : "no-cache",
			credentials: "same-origin"				   
		});
        
        await response.json().then((body) => {
            console.log("response body : " + body);
            var json = JSON.parse(body);
            console.log("msg : ", json.msg);

            setModal(true); // Modalを開く
            setSaveMsg("会員情報" + json.msg); // Modalにメッセージ出力
        }).catch((err) => {
            console.error("error : ", err)
        })

        } else {
            console.log("フォルム点検失敗");
            console.log("descriptionCheck : ", descriptionCheck);
            console.log("description value : ", description.value);
            e.preventDefault();
        } // else
        /* // フォルム点検完了、送信準備 */
    } //const formSubmit

    return (
        // <Badge color="primary">
        //     Old
        // </Badge>
        // 機能するか確認する。

        /* 全体レイアウト */
        <div className="wrap">

            {/* モダル */}
            {/* 会員情報保存メッセージ */}
                <Modal isOpen={modal} toggle={toggle} size="sm" centered={true} fade={false}>
                    <ModalHeader toggle={toggle}>
                        メッセージ
                        </ModalHeader>
                    <ModalBody>
                        {saveMsg}
                        </ModalBody>
                    <ModalFooter>
                        <button color="primary" onClick={toggle}>
                            閉
                        </button>
                    </ModalFooter>
                        
                </Modal>
            {/* //会員情報保存メッセージ */}

            {/* フォルムコンポーネントボックス */}
            <div className="member_wrap">
                
                {/* 氏名 */}
                <div className="input-fld-pnl" id="id-fld">
                    <IoPersonOutline size="1.8rem" color="#BD9944" className="mt-2"/>
                    <Label for="menu_name" className="mt-2">氏名</Label>
                    {/* className="mt-2" */}
                    <Input id="menu_name" onChange={(e) => formNameCheck(e)} className="menu_box" name="name" placeholder="氏名を記入しなさい"></Input>
                </div>
                {/* 氏名フィールドエラーメッセージ */}
                <div>
                    {(nameCheck == false && nameError != '') && <Alert size="sm" color="danger">{nameError}</Alert>}
                    {/* 
                    「nameCheck」が「false」であり、又「nameError」が空の文字列でない場合、
                    Alertコンポーネントをレンダリングし、その中にnameErrorのメッセージを表示する。
                    「size="sm" color="danger"」はおまけ
                    */}
                </div>
                {/* //氏名フィールドエラーメッセージ */}
                {/*// 氏名 */}

                {/* メール */}
                <div className="input-fld-pnl" id="id-fld">
                        <IoMailOutline size="1.8rem" color="#33A80F" className="mt-2"></IoMailOutline>
                        <Label for="menu_email" className="mt-2">E-mail</Label>
                        <Input id="menu_email" onChange={(e) => formEmailCheck(e)} className="menu_box" name="email" placeholder="メールアドレスを記入しなさい"></Input>
                </div>
                <div>
                    {(emailCheck == false && emailError != '') && <Alert size="sm" color="danger">{emailError}</Alert>}
                </div>
                {/*// メール */}

                {/* 電話番号 */}
                <div className="input-fld-pnl" id="id-fld">
                        <FaPhone size="1.8rem" color="#B0A833" className="mt-2"></FaPhone>
                        <Label for="menu_phone" className="mt-2">電話番号</Label>
                        <Input id="menu_phone" onChange={(e) => formPhoneCheck(e)} className="menu_box" name="phone" placeholder="電話番号を記入しなさい"></Input>
                </div>
                <div>
                    {(phoneCheck == false && phoneError != '') && <Alert size="sm" color="danger">{phoneError}</Alert>}
                </div>
                {/*// 電話番号 */}

                {/* 本文 */}
                <div className="input-fld-pnl" id="id-fld">
                    <MdOutlineDescription size="1.8rem" color="#B155AA" className="mt-2"></MdOutlineDescription>
                    <Label for="menu_description" className="mt-2">本文</Label>
                    <Input id="menu_description" onChange={(e) => formDescription(e)} name="description" placeholder="本文を記入しなさい" type="textarea"></Input>
                </div>
                <div>
                    {(descriptionCheck == false && descriptionError != '') && <Alert size="sm" color="danger">{descriptionError}</Alert>}
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
                        <Button onClick={(e) => formatInit(e)} className="btn_style_2">
                            キャンセル
                        </Button>
                    </div>

                </div>
                {/*// 提出、キャンセルボタン */}

            </div>
            {/* //フォルムコンポーネントボックス */}

        </div>
        /* //全体レイアウト */
    )

} //

export default BootstrapForm;