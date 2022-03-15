/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Message as MessageSUR } from 'semantic-ui-react';

import './styles.scss';

export default function SearchBar({ resultsFound }) {
  return (
    <div className="message">
      <MessageSUR>{resultsFound ? `La recherche a donné ${resultsFound} resultats` : resultsFound === 0 ? 'Aucun résultats' : 'Veuillez effectuer une recherche'}</MessageSUR>
    </div>
  );
}

SearchBar.propTypes = {
  resultsFound: PropTypes.string.isRequired,
};
