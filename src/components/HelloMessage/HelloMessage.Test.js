import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { HelloMessage } from '.';

describe("HelloMessage tests", () => {
    it("should return the passed message", () => {
        const { getByText, debug } = render(<HelloMessage message={'World'}/>);
        getByText(/World/i);
        debug();
        // expect(querByText(/world/i).length(1))
    });
});
