const { Router } = require('express')
const router = Router()

// 위에선 app.METHOD의 형태로 작성한 코드가
// 여기서는 router.METHOD의 형태라는 점만 다르다.
// router.post('/register', function (req, res) {
//   ...
// });

// // 같은 uri에 여러 메소드를 바인딩 할 경우
// router.route('/foo')
//   .get(function (req, res) {
//     ...
//   })
//   .post(function (req, res) {
//     ...
//   });

// 함수 부분을 controller로 분리하는 방법도 있다.
// const usersController = require('../controllers/usersController')
// router.post('/login', usersController.login)

module.exports = router
