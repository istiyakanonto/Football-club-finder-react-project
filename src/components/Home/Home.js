import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './Home.css'


import Header from '../Header/Header';
import './Home.css'

const Home = () => {
   
        const[clubs,setClubs]=useState([])
    useEffect(() => {
       const url='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
      fetch(url)
      .then(res=>res.json())
      .then(data=>setClubs(data.teams.slice(0,15)))
       }, [])
    return (
        <div>
          <div>
           <Header></Header>
        </div>
        <section id= 'background-color'>
        <div className='container'>
        <div className='  row '>
        {
          
           clubs.map(club =><Club club={club}></Club>)
        }
        </div>
        </div>
        </section>
       
       
        </div>
        
    );
};

export default Home;