/* eslint-disable react/jsx-no-bind */
import { Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// import './styles.scss';

export default function SearchBar({ inputValue, onInputChange, onInputSubmit }) {
  function handleInputChange(event) {
    return onInputChange(event.target.value);
  }

  return (
    <Segment>
      <Form onSubmit={onInputSubmit}>
        <Form.Input
          icon="search"
          iconPosition="left"
          placeholder="Rechercher"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputSubmit: PropTypes.func.isRequired,
};
