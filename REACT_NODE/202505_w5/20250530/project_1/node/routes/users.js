var express = require('express');
var router = express.Router();

/* GET users listing. */

// request.params
// router.get('/:name', function(request, response, next) {
// 用例-1）http://localhost:3000/users/abcd
// 用例-1-2) http://localhost:3000/users/山田/09012345678
// 返還された住所) http://localhost:3000/users/%E5%B1%B1%E7%94%B0/09012345678

// セキュリティー的に問題あり。
// 転送時、formは使用せずAJAXを利用する。

// frontで行う => AJAX : get/post... 

// request.query
// router.get('/', function(request, response, next) {
// 用例-2）http://localhost:3000/users?name=abcd
// 用例-2-2) http://localhost:3000/users?name=abcd&phone=55512345678


router.get('/:name/:phone', function(request, response, next) {
  
  let name = request.params.name;   // path因子方式
  let phone = request.params.phone;
  // let name = request.query.name;    // query因子方式
  // let phone = request.query.phone;
  response.send(`name = ${name}<br> phone = ${phone}`);
});

module.exports = router;
