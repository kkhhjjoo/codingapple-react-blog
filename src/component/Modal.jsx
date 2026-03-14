import React from 'react';

const Modal = ({ products, i }) => {
  return (
    <div className="modal">
      <h4>{products[i].title}</h4>
      <p>{products[i].date}</p>
      <p>상세 내용</p>
      <Modal2 />
    </div>
  );
};
class Modal2 extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render() { 
    return (
      <div>안녕 {this.state.age}
        <button onClick={() => { this.setState({age: 21})}}>버튼</button>
      </div>
    )
  }
}
export default Modal;
