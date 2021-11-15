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

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  const { data, requestSort, getClassNamesFor } = useSortableData(items);

  useEffect(() => {
    const result = [];
    for (let i of data) {
      if (i.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
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
                <span class="input-group-text my-2 p-2">🔍</span>
                <Form.Control
                    type="text"
                    placeholder=" search"
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
                    {searchResults.map((item) => (
                        <CountryCard country={item} type='save' />
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