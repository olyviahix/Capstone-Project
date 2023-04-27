import React, { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';


function Notifications() {
  const [position, setPosition] = useState('top-start');

  return (
    <div className="notifications">
        <p>John liked your photo</p>
        <i class="bi bi-caret-right-fill"></i>
    </div>
  );
}

export default Notifications;