var express = require('express');
var router = express.Router();


const dao = require('../db/DAO'); 
// DAO(Data Access Object : CRUDメソッド)

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
  // この部分はまれに、ウェブブラウザーによって(MS IE(Internet Explorer)11, SmartTVなど)
  // 204でhttp状態コードを指定する場合もある。
}

const cors = require('cors');
var app = express();
app.use(cors());
// cors) localhost:3000独立テスト時は省略
// 「var app = express();」を「app.use(cors());」より後の行に記入すると、エラーが発生する。

/* GET方式 */
// cors(corsOptions) を含む関数：「localhost:3000」独立テスト時は省略
router.get('/:name/:email/:phone/:description', cors(corsOptions), async function(req, res, next) {
// router.get('/:name/:email/:phone/:description', cors(corsOptions), function(req, res, next) {
// router.get('/:name/:email/:phone/:description', function(req, res, next) {

    let name = req.params.name;
    let email = req.params.email;
    let phone = req.params.phone;
    let description = req.params.description;

    console.log("name : ", name);
    console.log("email : ", email);
    console.log("phone : ", phone);
    console.log("description : ", description);

    // 引数のオブジェクトメンバーフィールド化
    let user = {}; // = new Object();
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.description = description;
    console.log("dao : ", dao);
    // 確認用コンソールログ

    // insert function call
    await dao.insertUser(user)
      .then((msg) => {
          console.log("最終msg : " + msg);
          res.json(`{ "msg" : "${msg}" }`); 
          // JSONの生成
      }).catch((err) => {
        console.error("err : ", err);
      })

    // Promise関数の場合、リターン時に要注意！
    // return msg; ==> Promiseオブジェクト自体をリターンするので、望むテキストでリターンしない。
    // Promise : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
    // resolve() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
    
    // res.json(`{ 'name' : ${name}, 'e-mail' : ${email}, 'phone' : ${phone}, 'description' : ${description} }`);
  });


  
  module.exports = router;
