import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faLandmark, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import './ClubDetails.css'
import female from '../../Photo/female.png'
import male from '../../Photo/male.png'



const ClubDetails = () => {
    const { clubId } = useParams()
    const [clubDetails, setClubDetails] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
            .then(res => res.json())
            .then(data => setClubDetails(data.teams[0]))
    }, [])
    const { strTeam, intFormedYear, strCountry, strGender, strStadiumThumb, strTeamBadge,strTeamBanner,strTeamFanart3 } = clubDetails
    return (
        <div className='container'>
            <div className='set-style'>

                <img style={{display: 'block',width:'100%',hight:'50px', marginLeft: 'auto', marginRight: 'auto',marginBottom: '20px'}} src={strTeamBanner} />
                <img  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '150px', hight: '150px', marginBottom: '40px' }}  src={ strTeamBadge} />
            </div>
            <div className='box-part mb-5 pl-4'>
                <div className='details-style '>
                    <h5>Name: {strTeam}</h5>
                    <p><small>  <FontAwesomeIcon icon={faLandmark} />  Founded: {intFormedYear}</small> </p>
                    <p><small> <FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</small> </p>
                   <p><small><FontAwesomeIcon icon={faFutbol}/> SportsType:{'Football'}</small></p>
                  <p><small><FontAwesomeIcon icon={faVenusMars} />  Gender: {strGender}</small> </p>
                    
            </div>
            <div className=' rem justify-content-end align-content-sm-start'>
                 {/* Conditional Randering */}
                 {
                            strGender === 'Male' ? <img src={male} /> : <img src={female} />
                        }
            </div>
                
            </div>

            <div style={{ color: 'white', marginTop: '20px' }}>
                <p><small>{'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima magnam ducimus minus laudantium velit. Maxime perferendis hic assumenda rerum voluptatibus saepe dolores odit. Magnam officiis repudiandae soluta culpa, error architecto saepe sapiente perferendis eveniet tempora excepturi laborum minus accusamus veniam iusto maiores eius distinctio dicta. Hic adipisci amet temporibus aliquid ipsum inventore, voluptatibus ullam dolorum sint repellendus, at quo quia harum maxime porro ipsa! Soluta ipsum, laudantium ea accusamus, dicta error quae delectus, eaque dolore itaque pariatur deserunt aut explicabo aperiam doloremque possimus consequatur. Error aliquid quaerat eum? Obcaecati eligendi libero dolorem quae nisi rerum vitae cumque, cupiditate assumenda?'}</small></p>
                <p><small>{'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima magnam ducimus minus laudantium velit. Maxime perferendis hic assumenda rerum voluptatibus saepe dolores odit. Magnam officiis repudiandae soluta culpa, error architecto saepe sapiente perferendis eveniet tempora excepturi laborum minus accusamus veniam iusto maiores eius distinctio dicta. Hic adipisci amet temporibus aliquid ipsum inventore, voluptatibus ullam dolorum sint repellendus, at quo quia harum maxime porro ipsa! Soluta ipsum, laudantium ea accusamus, dicta error quae delectus, eaque dolore itaque pariatur deserunt aut explicabo aperiam doloremque possimus consequatur. Error aliquid quaerat eum? Obcaecati eligendi libero dolorem quae nisi rerum vitae cumque, cupiditate assumenda?'}</small></p>
            </div>

            <div className='socoal-menu'>
                <ul>
                    <li> <a href="https://www.facebook.com"> <FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                    <li><a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutubeSquare} /></a></li>
                    <li><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
                    <li> <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
                </ul>




            </div>
        </div>

    );
};

export default ClubDetails;