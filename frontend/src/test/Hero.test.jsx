import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, test } from 'vitest';

import Hero from '../landing_page/home/Hero';

afterEach(() => {
    cleanup();
});

describe('Hero component', () => {
    test('renders hero image', () => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );

        const heroImage = screen.getByAltText('Home hero image');

        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', '/media/images/homeHero.png');
    });

    test('renders sign up button', () => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );

        const signUpButton = screen.getByRole('button', { name: 'Sign up Now' });

        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton).toHaveClass('btn-primary');
    });
});
