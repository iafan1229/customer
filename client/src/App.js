import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: { //전체 바깥 쪽, x축으로 오버 플로우가 발생하게
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080 //테이블, 무조건 1080이상 자리잡게!, 그래서 가로 스크롤바가 생긴다.
  }
})

const customers = [
  {
  'id' : 1,
  'image': 'http://placeimg.com/64/64/any1',
  'name': '홍길동',
  'birthday' : '1990/10/3',
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
  }
  ]


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
        customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            );
          }) // map은 key라는 props가 필요함. //짧은 소스 코드의 작성을 위해 map 함수의 이용. // c라는 원소로 순회 되도록! //반복문을 이용해서 반복되는 소스코드를 줄일 수 있다.
        }
          </TableBody>
        </Table>
        </Paper>
    );
  }
}

export default withStyles(styles)(App);