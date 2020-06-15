import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends React.Component { //강력한 뷰 , 기능을 제공. 리액트는 계층적인 구성이 가능. 출력할 정보가 많으면, 리액트 컴포넌트의 분리
    render() { //실제로 그려지는 내용
        return ( //요소를 반환한다.
        <TableRow>
          <TableCell>{this.props.id}</TableCell>
          <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
          <TableCell>{this.props.name}</TableCell>
          <TableCell>{this.props.birthday}</TableCell>
          <TableCell>{this.props.gender}</TableCell>
          <TableCell>{this.props.job}</TableCell>
        </TableRow>
        );
    }
}


export default Customer;