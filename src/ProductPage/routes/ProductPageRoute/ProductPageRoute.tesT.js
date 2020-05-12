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
import { ProductAPI } from "../../services/ProductService";
import { ProductStore } from "../../stores/ProductStore";
import getProductResponse from "../../fixtures/getUserSignInResponse.json";
import { ProductPageRoute } from ".";

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));

describe("ProductPage Route Tests", () => {
    let productAPI;
    let productStore;

    beforeEach(() => {
        productAPI = new ProductAPI();
        productStore = new ProductStore(productAPI);
    });

    afterEach(() => jest.resetAllMocks());


    it("test the Signout Function", () => {
        
    });
});
