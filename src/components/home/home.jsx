import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Home() {
  const [group] = useState(null);
  const [user] = useState(null);
  const [activities] = useState([]);
  return (
    <div>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='profile-section'>
        <h2>User Expenses</h2>
        {user ? (
          <div>
            <p>Balance: {user.name}</p>
          </div>
        ) : (
          <p>No user logged in.</p>
        )}
      </div>
      <div className='group-section'>
        <h2>Group Information</h2>
        {group ? (
          <div>
            <p>Group Name: {group.name}</p>
            <p>Members: {group.members.join(', ')}</p>
          </div>
        ) : (
          <p>No group selected.</p>
        )}
        <button>See all</button>
      </div>
      <div className='activities-section'>
        <h2>Recent Activities</h2>
        {activities.length > 0 ? (
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        ) : (
          <p>No recent activities.</p>
        )}
      </div>  
      <div className='actions-section'>
        <button>Home</button>
        <button>activity</button>
        <button>Groups</button>
        <button>Profile</button>
      </div>
    </div>
  );
}