import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

export default function Repo({
  title, description, url, imageUrl,
}) {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <a href={url} className="date">{title}</a>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

Repo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
