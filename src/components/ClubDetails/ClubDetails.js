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
    }, [clubId])
    const { strTeam, intFormedYear, strCountry, strGender, strTeamBadge, strTeamBanner,strDescriptionEN,strStadiumDescription} = clubDetails
    return (
        <div className='container'>
            <div className='set-style'>
                <img style={{ display: 'block', width: '100%', hight: '50px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} src={strTeamBanner} alt="Pic Not Found" />
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '150px', hight: '150px', marginBottom: '40px' }} src={strTeamBadge} alt="Pic Not Found"  />
            </div>
            <div className='row box-part mb-5 pl-4'>
                <div className=' details-style col-md-3 col-sm-12'>
                    <h5>Name: {strTeam}</h5>
                    <p><small>  <FontAwesomeIcon icon={faLandmark} />  Founded: {intFormedYear}</small> </p>
                    <p><small> <FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</small> </p>
                    <p><small><FontAwesomeIcon icon={faFutbol} /> SportsType:{'Football'}</small></p>
                    <p><small><FontAwesomeIcon icon={faVenusMars} />  Gender: {strGender}</small> </p>
                </div>
                <div className=' col-md-9 col-sm-12 margin-left: 4rem '>
                    {/* Conditional Randering */}
                    {
                        strGender === 'Male' ? <img src={male} className='img-fluid' alt="Pic Not Found"  /> : <img src={female} className='img-fluid'  />
                    }
                </div>
            </div>
            <div className='' style={{ color: 'white', marginTop: '20px' }}>
                <p><small>{strDescriptionEN}</small></p>
                <p><small>{strStadiumDescription}</small></p>
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