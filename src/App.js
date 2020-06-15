import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' : 1,
  'image': 'http://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday' : '1990/10/3',
  'gender' : '남',
  'job' : '학생'
  },
  {
    'id' : 2,
    'image': 'http://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday' : '960305',
    'gender' : '남',
    'job' : '프로그래머'
  },
  {
  'id' : 3,
  'image': 'http://placeimg.com/64/64/any1',
  'name': '홍길동',
  'birthday' : '870630',
  'gender' : '남',
  'job' : '디자이너'
  }
  ]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            );
          }) // map은 key라는 props가 필요함. //짧은 소스 코드의 작성을 위해 map 함수의 이용. // c라는 원소로 순회 되도록! //반복문을 이용해서 반복되는 소스코드를 줄일 수 있다.
        }
      </div>
    );
  }
}

export default App;