import logo from 'src/assets/images/logo-github.png';

import './styles.scss';

export default function App() {
  return (
    <div className="header">
      <img className="header__img" alt="logo of GitHub" src={logo} />
    </div>
  );
}
