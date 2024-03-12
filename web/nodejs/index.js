
//npm init


//npm i express
const express = require('express')
const app = express()

//npm install figlet
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/', function (req, res) {
  temp = 'value test'
  res.send('${temp}')
})
//npm uninstall figlet

app.get('/dog', function (req, res) {
  res.send({ 'sound': '멍멍' })
})
app.get('/cat', function (req, res) {
  res.json({ 'sound': '야옹' })
})
// axios로 보내고 http://localhost:3000/cat
// express로 받는다 고양이

//params

//파라미터를 받을때 :써줘야함
//http://localhost:3000/user/sh
app.get('/user/:id', function (req, res) {
  const q = req.params
  console.log(q)//{ id: 'sh' }
  console.log(q.id)
  res.json({ 'userid': q.id })
})


//query  
//http://localhost:3000/Query/aa?q=sh&age=10
// q에 sh 값 보내고 and age에 10을 넣겠다
app.get('/Query/:id', function (req, res) {
  const q = req.query
  console.log(q) //{ q: 'sh', age: '10' }
  res.json({ 'name': q.age }) //{"name":"10"}
})


//응용
app.get('/sound/:name', function (req, res) {
  const { name } = req.params // {name:dog}일때 {name}의 key에 dog라는 값이 바로 들어감
  console.log(name) //http://localhost:3000/sound/dog => dog

  if (name == "dog")  //http://localhost:3000/sound/dog
    res.json({ 'sound': '멍멍' })
  else if (name == "cat")  //http://localhost:3000/sound/cat
    res.json({ 'sound': '야옹' })
  else if (name == "pig")  //http://localhost:3000/sound/pig
    res.json({ 'sound': '꿀꿀' })
  else {
    res.json({ 'sound': '알수없음' })
  }
})

// 보안으로 인해 html파일에서의 요청은 기본적으로 막아놓음 => cors 설정하여 응답을 잘할수 있도록
// npm install cors

var cors = require('cors')
app.use(cors()) // cors(조건) , 없을시 모든 요청에 대해 허용


app.listen(3000)