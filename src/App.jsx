
import { useState } from 'react';
import './App.css'

function App() {
  let post = '강남 우동 맛집';
  let products = [
    { id: 0, title: '제목1', description: '2월 17일 발행' },
    { id: 1, title: '제목2', description: '2월 18일 발행' },
    { id: 2, title: '제목3', description: '2월 19일 발행' }
  ];
  const [a, setA] = useState('여자 코트 추천');
  return (
    <>
      <nav className='black-nav'>
        <h4 style={{color:'red', fontSize: '18px'}}>블로그</h4>
      </nav>
      <section>
        <h4>{a}</h4>
        <ul className='list'>
          {products.map(product => <li key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
          </li>)}
        </ul>

      </section>
    </>
  )
}

export default App
