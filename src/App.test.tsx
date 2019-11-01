import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import App from './App';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Quotes from './pages/Quotes';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders Homepage component', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Homepage />
        </MemoryRouter>,
    ).toJSON();

    expect(component).toMatchSnapshot();
});

test('renders About component', () => {
    const component = renderer.create(
        <MemoryRouter>
            <About />
        </MemoryRouter>,
    ).toJSON();

    expect(component).toMatchSnapshot();
});

test('renders Quotes component', () => {
    const component = renderer.create(
        <Quotes name="peteca" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('renders Projects component', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Projects />
        </MemoryRouter>,
    ).toJSON();

    expect(component).toMatchSnapshot();
});

test('renders Nav component', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Nav />
        </MemoryRouter>,
    ).toJSON();

    expect(component).toMatchSnapshot();
});

test('renders Footer component', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>,
    ).toJSON();

    expect(component).toMatchSnapshot();
});
