import React from 'react';

import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../components/ProtectedRoute';

import { PRODUCT_PAGE_PATH } from '../constants/RouteConstants';

import { ProductPage } from './ProductPageRoute';

export const ProductRoutes = [
    <ProtectedRoute
        key={PRODUCT_PAGE_PATH}
        path={PRODUCT_PAGE_PATH}
        component={ProductPage}
    />
];
