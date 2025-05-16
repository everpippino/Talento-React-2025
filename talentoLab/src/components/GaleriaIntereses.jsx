import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const GaleriaIntereses = ({ temas }) => {
  const [buttonColors, setButtonColors] = useState(temas.map(() => 'light'));

  const handleClick = (index) => {
    const newColors = [...buttonColors];
    newColors[index] = newColors[index] === 'light' ? 'secondary' : 'light';
    setButtonColors(newColors);
  };

  return (
    <div className="my-4 text-center">
      <h2>Nuestros Intereses</h2>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {temas.map((tema, index) => (
          <Button
            key={tema}
            variant={buttonColors[index]}
            onClick={() => handleClick(index)}
          >
            {tema}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GaleriaIntereses;