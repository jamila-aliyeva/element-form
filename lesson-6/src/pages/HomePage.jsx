import { useCallback, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ElementForm from "../components/form/ElementForm";
import ElementsHeader from "../components/header/ElementsHeader";
import ElementsTable from "../components/table/ElementsTable";
import { v4 } from "uuid";

const HomePage = () => {
  const gettingJson = localStorage.getItem("elements");
  const [validated, setValidated] = useState(false);
  const [elements, setelements] = useState(JSON.parse(gettingJson) || []);
  const [element, setelement] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    description: "",
  }); // saving form elements

  // searching
  const [searching, setSearching] = useState("");

  const handleSearch = useCallback((e) => {
    setSearching(e.target.value.trim().toLowerCase());
    console.log(e.target.value);
  }, []);

  const result = useMemo(
    () =>
      elements.filter((el) => {
        // el.name.trim().toLowerCase();
        console.log(el.name);
      }),
    [searching, elements]
  );

  const handleElement = useCallback(
    (e) => {
      setelement({ ...element, [e.target.id]: e.target.value });
    },
    [element]
  );

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      setValidated(true);
      event.preventDefault();
      if (form.checkValidity()) {
        let newStudents = [...elements, { ...element, id: v4() }];
        setelements(newStudents);
        localStorage.setItem("elements", JSON.stringify(newStudents));
        // console.log(elements);
        setValidated(false);
        setelement({
          name: "",
          price: "",
          category: "",
          quantity: "",
          description: "",
        });
      }
    },
    [element, elements]
  );
  console.log(elements);
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <ElementForm
            element={elements}
            handleElement={handleElement}
            handleSubmit={handleSubmit}
            validated={validated}
          />
        </Col>
        <Col lg={8}>
          <ElementsHeader searching={searching} handleSearch={handleSearch} />
          <ElementsTable elements={result} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
