import "./index.css";

const Header = () => {
  return (
    <header className="Header">
      <ul className="Header__List">
        <li className="Header__List--Item">
          <a href="#">Elemento 1</a>
        </li>
        <li className="Header__List--Item">
          <a href="#">Elemento 2</a>
        </li>
        <li className="Header__List--Item">
          <a href="#">Elemento 3</a>
        </li>
        <li className="Header__List--Item">
          <a href="#">Elemento 4</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
