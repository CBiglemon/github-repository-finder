import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

export default function Repo({
  name, fullname, description, url, imgUrl,
}) {
  return (
    <Card>
      <Image src={imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{fullname}</Card.Header>
        <Card.Meta>
          <a href={url} className="date">{name}</a>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
