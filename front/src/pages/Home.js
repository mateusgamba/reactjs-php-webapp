import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
          <p><b>React Section</b></p>
          <p>Links</p>
          <Link to="/create">Create</Link>
        </div>
    );
}