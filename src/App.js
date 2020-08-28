import React  from 'react';
import './App.css';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import ListItems from './components/ListItems'
import BookDetails from './components/BookDetails'
import Layout from './components/layout/index';
import data from  './services/data.json';

function App() {


  return (
      <BrowserRouter>
        <Switch>
          <Layout>
              <Route exact path="/" 
                render={(props) => (
                  <ListItems {...props} data={data}/>
                )}
              />

              <Route exact path="/book/:id" 
                render={(props) => (
                  <BookDetails {...props} />
                )}
              />
           </Layout>
        </Switch>
      </BrowserRouter>    
  );
}

export default App;
