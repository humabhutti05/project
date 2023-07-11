import React, { useEffect, useState } from 'react';
import { Container, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Games = () => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get('https://api.examplegame.com/game-data', {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
          },
        });
        setGameData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching game data:', error);
        setLoading(false);
      }
    };

    fetchGameData();
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>{gameData?.title}</Card.Title>
            <Card.Text>{gameData?.description}</Card.Text>
            {/* Render other relevant game data */}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Games;
