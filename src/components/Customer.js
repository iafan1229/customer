import React from 'react';

class Customer extends React.Component { //강력한 뷰 , 기능을 제공. 리액트는 계층적인 구성이 가능. 출력할 정보가 많으면, 리액트 컴포넌트의 분리
    render() { //실제로 그려지는 내용
        return ( //요소를 반환한다.
        <div>
           <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
           <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
        </div>
        );
    }
}


class CustomerProfile extends React.Component { //props의 분리
    render() {
      return (
        <div>
          <img src={this.props.image} alt="profile"/>
          <h2>{this.props.name}({this.props.id})</h2>
        </div>
      )
    }
  }
  
  class CustomerInfo extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.birthday}</p>
          <p>{this.props.gender}</p>
          <p>{this.props.job}</p>
        </div>
      )
    }
  }

export default Customer;