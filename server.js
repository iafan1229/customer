const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); //데이터 형식을 사용해서 주고 받음
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => { //데이터를 보내고, 응답하겠다.
    res.send([
        {
            'id' : 1,
            'image': 'http://placeimg.com/64/64/any1',
            'name': '홍길동',
            'birthday' : '920814',
            'gender' : '남',
            'job' : '학생'
            },
            {
              'id' : 2,
              'image': 'http://placeimg.com/64/64/any2',
              'name': '이순신',
              'birthday' : '960305',
              'gender' : '남',
              'job' : '프로그래머'
            },
            {
            'id' : 3,
            'image': 'http://placeimg.com/64/64/any3',
            'name': '김소다',
            'birthday' : '870630',
            'gender' : '여',
            'job' : '디자이너'
            },
            {
              'id' : 4,
              'image': 'http://placeimg.com/64/64/any4',
              'name': '이주아',
              'birthday' : '880406',
              'gender' : '여',
              'job' : '디자이너'
              },
              {
                'id' : 5,
                'image': 'http://placeimg.com/64/64/any5',
                'name': '이재익',
                'birthday' : '990605',
                'gender' : '남',
                'job' : '학생'
                },
    ]); //필요할 때마다 서버를 요청해서 받아오기
});


app.listen(port, () => console.log(`Listening on port ${port}`));
