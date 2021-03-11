import React,{} from 'react';
import { Button, Card } from 'react-bootstrap'
import './Club.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Club = (props) => {
    const { strTeam, idTeam } = props.club || {}
    return (
        <div className=' col-sm-12 col-md-6 col-lg-4 mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxuwEz0j-f5UOXqjaWvN7wMesK5oju5EqSQ&usqp=CAU" />
                <Card.Body>
                    <Card.Title style={{ color: 'brown', fontWeight: '900', fontSize: '25px' }}>{strTeam}</Card.Title>
                    <Card.Text style={{ color: 'black', fontWeight: '600' }}>
                        Sports Type: {'Football'}
                        <p> <Link to={`/club-details/${idTeam}`}>
                            <Button style={{ marginTop: '15px' }} variant="primary">Explore  <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
                        </Link>
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Club;