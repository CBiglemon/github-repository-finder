import { Card } from 'semantic-ui-react';
import Repo from 'src/components/Repo';

import './styles.scss';

export default function ReposResults() {
  return (
    <div className="repos-results">
      <Card.Group itemsPerRow={4} stackable>
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </Card.Group>
    </div>
  );
}
