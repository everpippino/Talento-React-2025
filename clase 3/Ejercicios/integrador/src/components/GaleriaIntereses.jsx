import React, { useState }  from 'react';

function GaleriaIntereses({temas}){
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (index) => {
        setActiveButton(index);
    };
    return (
        <div>
            {temas.map((tema, index) => (
        <button
          key={index}
          className={`btn btn-outline-primary me-2 mb-2 ${
            activeButton === index ? 'bg-primary text-white' : ''
          }`}
          onClick={() => handleClick(index)}
        >
          {tema}
        </button>
      ))}
        </div>
    )
}

export default GaleriaIntereses;