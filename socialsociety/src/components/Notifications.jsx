import React, { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';


function Notifications(props) {
  

  return (
    <div className="notifications">
        <p>{props.notif}</p>
        <i class="bi bi-caret-right-fill"></i>
    </div>
  );
}

export default Notifications;