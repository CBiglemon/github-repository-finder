import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Repo from 'src/components/Repo';

import './styles.scss';

export default function ReposResults({ results }) {
  return (
    <div className="repos-results">
      <Card.Group itemsPerRow={4} stackable>
        {
          results
            .map((result) => (
              <Repo
                key={result.id}
                name={result.name}
                fullname={result.full_name}
                description={result.description}
                url={result.html_url}
                imgUrl={result.owner.avatar_url}
              />
            ))
        }
      </Card.Group>
    </div>
  );
}

ReposResults.propTypes = {
  results: PropTypes.array.isRequired,
};
