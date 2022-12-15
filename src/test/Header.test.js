import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { AppContext } from "./../context"
import { Header } from '../components/shared/Header'

describe('Header component', () => {
    test('Contiene titulo Podcasts', async () => {

        render(
            <BrowserRouter>
                <AppContext.Provider value={{ loading: false }}>
                    <Header />
                </AppContext.Provider>
            </BrowserRouter>
        );

        const element = screen.getByTestId('link-element')
        expect(element).toHaveTextContent('Podcasts')
    });
});