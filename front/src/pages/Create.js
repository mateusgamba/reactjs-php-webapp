import React from 'react';
import { Link } from 'react-router-dom';

export default function Create() {
    return (
        <div>
          <p><b>React Section</b></p>
          <Link to="/">Back</Link>
          <input type="text" /><button type="button">Send</button>
        </div>
    );
}
