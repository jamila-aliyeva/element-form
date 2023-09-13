import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";

const ElementsTable = ({ elements }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {elements.length ? (
          elements.map((element, i) => {
            <tr key={element.id}>
              <td>{i + 1}</td>
              <td>{element.name}</td>
              <td>{element.price}</td>
              <td>{element.category}</td>
              <td>{element.quantity}</td>
              <td>{element.description}</td>
            </tr>;
          })
        ) : (
          <tr>
            <td colSpan={6} className="text-center">
              not found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

ElementsTable.prototype = {
  elements: PropTypes.array,
};


const MemoElementsTable = memo(ElementsTable);
export default MemoElementsTable;
