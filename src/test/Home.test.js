import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { AppContext } from "../context"
import { Home } from '../components/home/Home'

describe('Home component', () => {
    test('Resultados de podcasts', async () => {
        const podcastsMock = [
            {
                id: {
                    attributes: {
                        "im:id": 1
                    }
                },
                "im:image": [{ label: '' }, { label: '' }, { label: '' }],
                "im:name": { label: 'Podcast name 1' },
                "im:artist": { label: 'Artist name 1' },
            },
            {
                id: {
                    attributes: {
                        "im:id": 2
                    }
                },
                "im:image": [{ label: '' }, { label: '' }, { label: '' }],
                "im:name": { label: 'Podcast name 2' },
                "im:artist": { label: 'Artist name 2' },
            }
        ];

        render(
            <BrowserRouter>
                <AppContext.Provider value={{ podcasts: podcastsMock }}>
                    <Home />
                </AppContext.Provider>
            </BrowserRouter>
        );

        const name = screen.getByTestId('name-element0');
        const author = screen.getByTestId('author-element0');

        expect(name).toHaveTextContent('Podcast name 1')
        expect(author).toHaveTextContent('Author: Artist name 1')

    });
});