import React, { useState, useEffect } from "react";
import components from ".";
import { Container, Form, Row } from "react-bootstrap";

const Countries = () => {
  const { useSortableData, CountryCard } = components;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();

  // useEffect(() => {
  //   let initial_url = "https://restcountries.com/v3.1/name/";
  //   let url = initial_url + searchTerm;
  //   fetch(+url)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setItems(result);
  //         setIsLoaded(true);
  //       },
  //       (error) => {
  //         setError(error);
  //         setIsLoaded(true);
  //       }
  //     );
  // }, [searchTerm]);


  useEffect(() => {
    if (searchTerm === "" || searchTerm === null) {
      setItems([]);
      setIsLoaded(true);
    } else {
      let initial_url = `https://restcountries.com/v3.1/name/`;
      let url = initial_url + searchTerm;
      fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('typ:', result.typeof)
          console.log('results for: \'', searchTerm, '\'', result.map(
            country => {
              console.log('kraj: ', country.name.official);
          }));
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
    }
  }, [searchTerm]);



  // useEffect(() => {
  //   if (searchTerm === "" || searchTerm === null) {
  //     console.log('jest pusto');
  //     setItems([]);
  //     setIsLoaded(true);
  //   } else {
  //     const fecthPosts = async () => {
  //       let initial_url = `https://restcountries.com/v3.1/name/` 
  //       let url = initial_url + searchTerm;
  //       console.log('current url:', url);
        
  //       const res = await fetch(url);
  //       const {result} = await res.json();

  //       setItems(result);
  //       setIsLoaded(true);
  //       fecthPosts();
  //     }
  //   }
  // }, [searchTerm]);










  // if (pathArray.toLowerCase().indexOf("blah") != -1{}
  // pathArray.map(function(s) { return s.toLowerCase(); }).indexOf('blah') !== -1










  const { data, requestSort, getClassNamesFor } = useSortableData(items);

  useEffect(() => {
    const result = [];
    for (let i of data) {
      if (i.name.official.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        result.push(i);
      }
    }
    setSearchResults(result);
  }, [searchTerm, data]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="main__wrapper">
      {!isLoaded && <p>loading...</p>}
      {error && <h2>{error}</h2>}
      {isLoaded && (
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
              <div
                onClick={() => requestSort("name")}
                className="heading"
                xs={4}
              >
                <div className={"heading__text text-center display-3 " + getClassNamesFor("name")}>
                  Countries
                </div>
              </div>
            </Container>

            <Container className="p-0">
                <Row className="align-items-center justify-content-center">
                    {searchResults && searchResults.map((item, index) => (
                        <CountryCard country={item} type='save' key={index} />
                    ))}
                </Row>
            </Container>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Countries;