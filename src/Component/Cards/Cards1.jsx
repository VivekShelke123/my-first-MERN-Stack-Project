import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Cards1 = (prop) => {
  return (
    <div className='text'>
        <Card >
      <Card.Img variant="top" src={prop.img}/>
      <Card.Body>
        <Card.Title>
            {
                    prop.title
            }
        </Card.Title>
        <Card.Text>
          {
            prop.description
          }
        </Card.Text>
        <Link to={prop.path}>
        <Button variant="outlined">{prop.button}</Button>
        </Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Cards1
