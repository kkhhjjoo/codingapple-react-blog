const Modal = ({ products, i }) => {
  return (
    <div className="modal">
      <h4>{products[i].title}</h4>
      <p>{products[i].date}</p>
      <p>상세 내용</p>
    </div>
  );
};

export default Modal;
