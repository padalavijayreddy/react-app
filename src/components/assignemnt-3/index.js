import React from "react";
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";


export default function FormComponent() {
  let history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
      <div>
      <div class="navigation">
       <button className="navigator-button" type="button" onClick={handleClick}><IoMdArrowBack/></button>
       <b className="navigator-bar">Form Component</b>
      </div>
        <nav>
          <ul>
            <li>
            <Link to="/FormComponent/Greetings">Greetings</Link>
            </li>
            <li>
            <Link to="/FormComponent/FavouriteDesert">FavouriteDesert</Link>
            </li>
            <li>
            <Link to="/FormComponent/VisitedCities">VisitedCities</Link>
            </li>
            <li>
            <Link to="/FormComponent/YourState">YourState</Link>
            </li>
            <li>
            <Link to="/FormComponent/DisabledButton">DisabledButton</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

