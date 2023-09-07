<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@testing-library/react");
const App_1 = require("./App");
test('renders learn react link', () => {
    (0, react_2.render)(<App_1.default />);
    const linkElement = react_2.screen.getByText(/learn react/i);
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
    expect(linkElement).toBeInTheDocument();
});
