
import { useState } from 'react';
import './App.css'
import Modal from './component/Modal';

function App() {
  let post = '강남 우동 맛집';
  const [products, setProducts] = useState([
    { id: 0, title: '남자 코트 추천', date: '2월 17일 발행' },
    { id: 1, title: '강남 우동 맛집', date: '2월 18일 발행' },
    { id: 2, title: '파이썬 독학', date: '2월 19일 발행' }
  ]);
  const [a, setA] = useState('여자 코트 추천');
  let [id, setId] = useState(0);
  let [modal, setModal] = useState(false);
  let [thumbsup, setThumbsup] = useState([0, 0, 0]);
  const [add, setAdd] = useState('');

  const handleClick = (e, i) => {
    e.preventDefault();
    setId(i);
    setModal(!modal);
  }


  const inputChange = (e) => {
    setAdd(e.target.value);
  }

  const addPost = () => {
    if (add.trim() === '') return; // 빈 값 방지

    const today = new Date();
    const month = today.getMonth() + 1; // 0부터 시작이라 +1
    const day = today.getDate();

    let copy = [...products];
    copy.push({
      
      id: products.length,
      title: add,
      date: `${ month }월 ${day}일 발행`
    });
    setProducts(copy);

    let thumbCopy = [...thumbsup];
    thumbCopy.push(0); // 새 글의 좋아요 초기값
    setThumbsup(thumbCopy);

    setAdd(''); // input 초기화
  }

  const handleDelete = (id) => { 
    setProducts(products.filter((item) => item.id !== id));
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
          {products.map((product, i, item) => <li onClick={(e) => { handleClick(e, i) }} key={product.id}>
            <h4>{product.title} <span onClick={() => {
              let thumb = [...thumbsup];
              thumb[i] += 1;
              setThumbsup(thumb)
            }}>👍</span>{thumbsup[i]}</h4>
            <p>{product.description}</p>
            <button className='delete-btn' onClick={() => handleDelete(item.id)}>삭제</button>
          </li>)
          }
        </ul>
        <input type="text" value={add} onChange={inputChange} placeholder='글 제목 입력' />
        <button onClick={addPost}>추가</button>
        {modal && <Modal products={products} i={id} />}
      </section>
    </>
  )
}

export default App
