import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';


// class component
class Apps extends React.Component {
  // state를 가지고 있는 component

  // class 를 사용하는 이유
  state = {
    // data that will change
    count: 0,
  };
  // add function
  add = () => {
    this.setState({ count: this.state.count - 1 });
  };
  // 직접적으로 this.state.이름 이런 식으로 불러오는 방법은 비추
  // current 인자값을 복사하는 함수를 사용할 수 있따.
  minus = () => {
    this.setState( current => ({ count: current.count - 1}));
  };
  // setState() 사용하는 이유
  // 리액트에서 setState로 상태를 변경하지 않으면 리액트에서 랜더링을 하지 않기 때문에 값이 갱신되지 않는다
  // setState를 할 때마다 리액트에서는 리랜더링을 한다
  

  // function이 아니라서 return이 없음
  render() {
    // React.Component를 상속받앗기 떄문에 안에 메소드가 있음
    // React의 Component는 자동적으로 Render메소드를 실행함
    const {count} = this.state
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState(current => ({ count: current.count + 1 }));
          }}
        >
          Add 
        </button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

class App extends React.Component {
	
	state = {
		types : [ 
			{ name : "kim", grade : "A+"},
			{ name : "Lee", grade : "C"},
			{ name : "Park", grade : "B0"}
		],
		name : "Math"
	}

	render(){
		return (
			this.state.types.map(function(data){
				return <Child key={data.name} name={data.name} grade={data.grade}/>
			})
		)
	}
}
class Child extends React.Component {
  state = {}
  constructor(props){
    super(props);
    this.state = props;
  }
  
  render(){
    // if(this.state.grade === "A+"){
    //   this.setState({name : this.state.name + " : A+"})
    // }

    return(
      <div>{this.props.name}</div>
    )
  }

}

class Appss extends React.Component {
  
  state = {
    count : 0
  }

  handlerCountUp = () =>{
    this.setState(current => {
        return {count : current.count + 1}}
      );
  };

  render() {

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handlerCountUp}>Count Up</button>
      </div>
    );
  }
}
export default Appss;
