import { Segment, Form } from 'semantic-ui-react';

// import './styles.scss';

export default function SearchBar() {
  return (
    <Segment>
      <Form>
        <Form.Input
          icon="search"
          iconPosition="left"
          placeholder="Rechercher"
        />
      </Form>
    </Segment>
  );
}
