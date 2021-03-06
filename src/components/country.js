import React, { useState, useEffect, useRef } from "react";
import components from ".";
import { Container, Form, Row } from "react-bootstrap";

const Countries = () => {
  const { CountryCard } = components;

  const firstUpdate = useRef(true);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();


  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    };
    setIsPending(true);
    const abortCont = new AbortController();

    let initial_url = `https://restcountries.com/v3.1/name/`;
    let url = initial_url + searchTerm;

    fetch(url, { signal: abortCont.signal })
        .then(res => {
            if (!res.ok) {
                throw Error('Unfortunately we can\'t find a country with that name :(');
            }
            return res.json();
        })
        .then(data => {
            setItems(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setIsPending(false);
                setError(err.message);
            }
        })

    return () => abortCont.abort();
  }, [searchTerm])

  useEffect(() => {
    setIsPending(true);
    const result = [];
    for (let i of items) {
      if (i.name.official.toLowerCase().includes(searchTerm.toLowerCase())) {
        result.push(i);
      }
    }
    setSearchResults(result);
    setIsPending(false);
  }, [items]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="main__wrapper">
        <Container className="p-2">
            <div className="input-group">
                <span className="input-group-text my-2 p-2">🔍</span>
                <Form.Control
                    type="text"
                    placeholder="start typing to see the results"
                    value={searchTerm}
                    onChange={(e) => handleChange(e)}
                    className="searchbox mt-2 mb-2 p-2"
                />
            </div>    
            
            <div className="response__wrapper">
              <Container className="p-0">
                <div className="heading">
                  <div className="heading__text text-center display-3">Countries</div>
                </div>
              </Container>
          
              { isPending && <p className='lead p-4'>loading...</p> }

              { ! isPending && error && <h2 className='text-center mt-5'>{error}</h2> }

              { !isPending && 
                  <Container className="p-0">
                      <Row className="align-items-center justify-content-center">
                        { !error && searchResults.map((item, index) => (
                            <CountryCard country={item} type='save' key={index} />
                        )) }
                      </Row>
                  </Container>
              }
            </div>
          </Container>
    </div>
  );
};

export default Countries;