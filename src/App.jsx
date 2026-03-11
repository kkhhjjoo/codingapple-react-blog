
import { useState } from 'react';
import './App.css'
import Modal from './component/Modal';

function App() {
  let post = '강남 우동 맛집';
  const [products, setProducts] = useState([
    { id: 0, title: '남자 코트 추천', description: '2월 17일 발행' },
    { id: 1, title: '강남 우동 맛집', description: '2월 18일 발행' },
    { id: 2, title: '파이썬 독학', description: '2월 19일 발행' }
  ]);
  const [a, setA] = useState('여자 코트 추천');
  let [modal, setModal] = useState(false);
  let [thumbsup, setThumbsup] = useState([0, 0, 0]);

  const handleClick = (e) => { 
    e.preventDefault();
    setModal(!modal);
  }

  // const [logo, setLogo]= useState('ReactBlog'); 
  //로고는 useState할 필요 없음
  return (
    <>
      <nav className='black-nav'>
        <h4 style={{ color: 'red', fontSize: '18px' }}>ReactBlog</h4>
      </nav>
      <button onClick={() => {
        let copy = [...products];
        copy.sort((a, b) => a.title.localeCompare(b.title, 'ko'));
        setProducts(copy);
      }}>가나다순 정렬</button>
      <section>
        <h4>{a}</h4>
        <ul className='list'>
          {products.map((product,i) => <li key={product.id}>
            <h4>{product.title} <span onClick={() => {
              let thumb = [...thumbsup];
              thumb[i] += 1;
              setThumbsup(thumb)
            }}>👍</span>{thumbsup[i]}</h4>
            <p>{product.description}</p>
          </li>)}
        </ul>
        <button onClick={handleClick}>모달 열기</button>
        {modal && <Modal />}
      </section>
    </>
  )
}

export default App
