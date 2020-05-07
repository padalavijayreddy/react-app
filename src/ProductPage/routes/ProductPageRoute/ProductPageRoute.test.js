/*
global expect
global jest
*/

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import { SIGN_IN_PATH } from "../../constants/RouteConstants";
import { PRODUCT_PAGE_PATH } from "../../../ProductPage/constants/RouteConstants";
import { AuthAPI } from "../../services/AuthenticationService";
import { AuthStore } from "../../stores/AuthStore";
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";
import { SignInRoute } from ".";
