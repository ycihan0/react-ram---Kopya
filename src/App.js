import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes';
function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar />
      </div>
      <Routes>
        
      <Route path="/" element={<Home/>}/>
      <Route path="/episodes" element={<Episodes/>}/>
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      
      {/* <h1 className="text-center Ubuntu my-5">Rick & Morty</h1> */}
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container text-center">
        <div className="row">
          {/* <div className="col-3">
            <Filters />
          </div> */}
          <div className="col">
            <div className="row">
              <Cards results={results} />

            </div>
          </div>

        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
