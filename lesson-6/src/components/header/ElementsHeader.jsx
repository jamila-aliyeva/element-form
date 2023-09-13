import { memo, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { category } from "../../data/category";

const ElementsHeader = ({ searching, handleSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredCategories = category.filter((el) =>
    el.toLowerCase().includes(selectedCategory.toLowerCase())
  );
  return (
    <header>
      <InputGroup className="my-3">
        <Form.Control
          value={searching}
          onChange={handleSearch}
          placeholder="Searching..."
        />
        <Form.Select onChange={handleCategoryChange}>
          <option>Categories</option>
          {filteredCategories.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
          ;
        </Form.Select>
      </InputGroup>
    </header>
  );
};

ElementsHeader.propTypes = {
  searching: PropTypes.string,
  handleSearch: PropTypes.func,
};

const MemoElementsHeader = memo(ElementsHeader);
export default MemoElementsHeader;
