import { memo } from "react";
import { Button, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { category } from "../../data/category";

const ElementForm = ({ element, handleElement, handleSubmit, validated }) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group className="my-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleElement}
            value={element.name}
            type="text"
            placeholder="name"
            required
          />
          <Form.Control.Feedback>looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleElement}
            value={element.price}
            type="number"
            placeholder="price"
            required
          />
          <Form.Control.Feedback>looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={handleElement} value={element.category}>
            {category.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback>looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={handleElement}
            value={element.quantity}
            type="number"
            placeholder="quantity"
            required
          />
          <Form.Control.Feedback>looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleElement}
            value={element.description}
            type="text"
            placeholder="description"
            required
          />
          <Form.Control.Feedback>looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3 text-center">
        <Button type="submit">Add elements</Button>
      </Form.Group>
    </Form>
  );
};

ElementForm.prototype = {
  element: PropTypes.object,
  handleElement: PropTypes.func,
  handleSubmit: PropTypes.func,
  validated: PropTypes.bool,
};

const MemoElemenForm = memo(ElementForm);

export default MemoElemenForm;
