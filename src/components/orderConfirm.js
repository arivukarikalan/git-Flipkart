import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
const OrderConfirmation = () => {

  const happyQuotes = [
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "The only thing that will make you happy is being happy with who you are. - Goldie Hawn",
    "Happiness is a warm puppy. - Charles M. Schulz",
    "The secret of happiness is not in doing what one likes, but in liking what one does. - James M. Barrie"
  ];

  const randomIndex = Math.floor(Math.random() * happyQuotes.length);
  const happyQuote = happyQuotes[randomIndex];

  return (
    <>
    
    <div className='order'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Order Placed!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Thank you for your order.
      </motion.p>
    </div>
    <Container className="text-center mt-5 mb-3">
      <p>Here's a happy quote for you:</p>
      <Card className="m-auto w-75">
        <Card.Body>
          <blockquote className="italic">{happyQuote}</blockquote>
        </Card.Body>
      </Card>
      <Link to="/">
        <Button variant="primary" className="mt-4">
          Back to Home
        </Button>
      </Link>
    </Container>
    </>
  );
};

export default OrderConfirmation;
