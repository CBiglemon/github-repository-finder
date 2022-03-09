import logo from 'src/assets/images/logo-github.png';

import './styles.scss';

export default function App() {
  return (
    <div className="app-header">
      <img className="app-header__img" alt="logo of GitHub" src={logo} />
    </div>
  );
}
