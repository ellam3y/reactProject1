import { TiThMenu } from "react-icons/ti";
import logoBarca from "../../assets/logoBarca.webp";
import "../../style/Header.css";
import { useState } from "react";
export default function Header() {
  const [menu, setMenu] = useState(false);
  let menuClick = () => {
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <div className="header col-12">
      <header className="App-header d-flex justify-content-between align-items-center g-3  col-12 bg-black text-white text-center">
        <img src={logoBarca} className="col-1 rounded text-center" />
        <h1 className="col-3 text-center">Barcelona</h1>
        <TiThMenu
          className="col-1 text-center bg-warning"
          onClick={menuClick}
        />

        {menu ? (
          <div
            className="menuFull"
            onClick={() => {
              setMenu(false);
            }}
          >
            <div
              className="content bg-white animate__animated animate__fadeInRight"
              onClick={(e) => e.stopPropagation()}
            >
              <p>13213</p>
              <p>8888</p>
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
}
