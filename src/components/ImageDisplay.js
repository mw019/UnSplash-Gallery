import React from 'react';
import { Card, Popup } from 'semantic-ui-react';

const ImageDisplay = props => {
  const images = props.images.map(image => {
    return (
      <Popup
        content={image.alt_description}
        key={image.id}
        trigger={
          <Card
            fluid
            color='blue'
            image={image.urls.regular}
            alt={image.description}
          />
        }
        hoverable
      />
    );
  });

  return (
    <div>
      <Card.Group itemsPerRow={3}>{images}</Card.Group>
    </div>
  );
};

export default ImageDisplay;
