import React from 'react'
import { Route } from 'react-router-dom';

import { PRACTICE_ADVANCED_CONCEPTS_PATH } from '../../constants/RouteConstants';
import { PracticeAdvancedConceptRoute } from './PracticeAdvancedConceptRoute';

const commonRoutes = [
    <Route
        key= { PRACTICE_ADVANCED_CONCEPTS_PATH }
        exact path = {PRACTICE_ADVANCED_CONCEPTS_PATH}
        component={PracticeAdvancedConceptRoute}
    />
];

export { commonRoutes };
