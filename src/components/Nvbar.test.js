/* eslint-disable import/first */
let container = null;
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Nvabar from './Nvabar';
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove();
    container = null;
})

describe('<Nvabar/>', () => {
    it("should have text 'Home'", () => {
        act(() => {
            render(<Nvabar />, container);
        })
        expect(container.textContent).toBe('Home')
    })
})