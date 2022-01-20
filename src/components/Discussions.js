import React,{useState,useEffect} from 'react';
import '../Styles/Discussions.css';
import NewsCard from './newsCard';
const API_KEY='31c57fa11a99402ca9ff283d5606aba9';

function Discussions (){
  const [data, setdata] = useState({articles:[]});
  const news= async ()=>{
    let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`);
  setdata(await response.json());
  }
  console.log(data.articles);
  useEffect(() => {
    news();
  }, []);
  return (
  <div className='discussions'>
    <div className='disc-head'>Join the Discussion!</div>
    <div className='ask'>
      <div className='ask-top'>
      <div className='p-icon'><i class="fas fa-user"></i></div>
      <div className='user-name'>Rahul Rathore</div>
      </div>
      <div className='ask-text'>Want to ask or share something</div>
    </div>
    {
      data.articles.map((e,index)=>{
        return <NewsCard author={e.author} title={e.title} desc={e.description}/>
      }
      )
    }
  </div>
  );
}

export default Discussions;
