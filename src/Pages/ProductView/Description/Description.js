import React from 'react';

import './Description.css';

const h5RandomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pRandomText = "Donec laoreet tellus at diam ultricies, in cursus tortor dapibus. Nam quis lorem augue. Proin consectetur nulla lacus, eu faucibus ante egestas ac. Curabitur felis eros, semper at tristique a, convallis sed ex. Vivamus interdum accumsan felis. Duis sit amet lacus et lacus pharetra cursus luctus at ante. Integer non lectus nec ex lacinia aliquet vestibulum id mi. Integer facilisis nisi sed est suscipit, nec aliquam nisl luctus. Vivamus aliquam ac elit sed semper. Nulla sit amet justo varius, porta odio quis, molestie sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla scelerisque scelerisque lectus vel fermentum.";

const Description = () => {
    return (
        <div className = "card-panel">
            <h5>{h5RandomText}</h5>
            <p>{pRandomText}</p>
            <h5>{h5RandomText}</h5>
            <p>{pRandomText}</p>
            <h5>{h5RandomText}</h5>
            <p>{pRandomText}</p>
        </div>
    );
}

export default Description;