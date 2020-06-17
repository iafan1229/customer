import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: { //전체 바깥 쪽, x축으로 오버 플로우가 발생하게
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080 //테이블, 무조건 1080이상 자리잡게!, 그래서 가로 스크롤바가 생긴다.
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});
  

class App extends Component { //사용자의 요청에 따라 그때그때 접근해서 데이터를 불러올 수 있게, 고객 데이터는 비어 잇다가 서버로부터 데이터 받으면 그 때 재구성됨
  
  state = {//customer 값이 원래 ""인데 localhost:5000번에서 API 불러오는 과정에서 error가 발생, 리액트를 계속하기 위해서 임시 데이터를 입력함.
    customers: "",
      completed: 0
    
  }


  componentDidMount() { //API, 모든 컴포넌트 마운트가 완료 되었을 때
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers'); //로컬호스트에 접근해서
    const body = await response.json();
    return body;
  }
  
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

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
          {this.state.customers ? this.state.customers.map(c => { 
            return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);
          }) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
            </TableCell>
            </TableRow>}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);