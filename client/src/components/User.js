import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const User = ({ name, location, email, picture }) => {
  return (
    <Card className="m-1 col-4" style={{ width: '18rem' }}>
    <Card.Img className="m-1" variant="top" src={picture.large} alt={name.first} />
    <Card.Body>
      <Card.Title>{name.first} {name.last}</Card.Title>
      <Card.Text>
      <div>
          <strong>Country:</strong> {location.country}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
      </Card.Text>     
    </Card.Body>
  </Card>
  );
};

export default User;
