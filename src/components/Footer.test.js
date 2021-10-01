/* eslint-disable import/first */
let container = null;
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Footer from './Footer';

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove();
    container = null;
})

describe('<Footer/>', () => {
    it("should have text 'Footer'", () => {
        act(() => {
            render(<Footer />, container);
        })
        expect(container.textContent).toBe('FooterSomething here to give the footer a purpose!Copyright © BOOK DETAILS 2021.')
    })
})