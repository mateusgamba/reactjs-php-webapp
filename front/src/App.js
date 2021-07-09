import React, {useEffect} from 'react';
import { BrowserRouter, Route, HashRouter, useLocation, useHistory, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';

const isCreate = window.location.pathname.includes('create.php');
const isEdit = window.location.pathname.includes('edit.php');

console.log(window.location.pathname);

const A = () => {
  const d = useLocation();
  console.log({d});
  const history = useHistory();
  useEffect(() => {

    if (isCreate) {
      history.push('/create');
    }
    if (isEdit) {
      history.push('/edit/' + d.search.replace(/\D/g, "") );
    }
  }, []);

  // useEffect(() => {
  //   if (d.pathname==='/') {
  //     console.log('chegou');

  //   }
  // }, [d]);


  return <div></div>;
}

export default function App() {

  const b = window.location.pathname; //.substring(0, window.location.pathname.indexOf(".php/") + 4);
  console.log("b", b);
  const c = b.substring(0, b.indexOf(".php/") + 4);
  console.log("c", c);
    return (



      <BrowserRouter basename={c}>
        <A />
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
      </BrowserRouter>
    );
}
