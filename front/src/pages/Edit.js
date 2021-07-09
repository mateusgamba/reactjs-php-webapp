import React from 'react';
import { Link, useParams} from 'react-router-dom';

export default function Edit() {
    const { id } = useParams();
    return (
        <div>
          <p><b>React Section</b></p>
          <Link to="/">Back</Link>
          <p>React URL Parameter: {id}</p>
        </div>
    );
}
