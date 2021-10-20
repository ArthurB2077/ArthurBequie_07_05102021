import DOMElementFactory from "../scripts/factory/domElementFactory.js";

const factory = new DOMElementFactory();

class Header {
    constructor(title, logo) {
        this.title = title;
        this.logo = logo;
    }

    get header() {
        return this.renderHeader();
    }

    renderHeader() {
        /**
         * A container for the logo and the title
         * @type {*}
         */
        const logoContainer = factory.createDOMElement('div', { class: 'd-flex flex-column' }, this.logo, this.title);
        /**
         * The header
         */
        const headerElement = factory.createDOMElement('header', { class: 'd-flex justify-content-center mb-3' }, logoContainer);

        return (
            document.getElementById('root').appendChild(headerElement)
        )
    }
}
/**
 * Page title
 */
const title = factory.createDOMElement('h1', {}, "Les petits plats");
/**
 * Page logo
 */
const logoPath = factory.createDOMElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d:'M39.5083 25.3424V35.1415H12.4024V25.3424C7.99768 25.3424 4.60945 21.9635 4.60945 17.5708C4.60945 13.1781 7.99768 9.79908 12.4024 9.79908C15.4518 9.79908 18.1624 11.4886 19.5177 14.1918L22.9059 12.5023C21.8895 10.8128 20.873 9.12328 19.1789 8.10958C20.5342 5.74429 22.9059 4.05479 25.9553 4.05479C30.36 4.05479 33.7483 7.43378 33.7483 11.8265C33.7483 13.1781 33.4095 14.5297 32.7318 15.8813L36.12 17.9087C37.1365 16.2192 37.8142 14.1918 37.8142 11.8265C37.8142 11.1507 37.8142 10.8128 37.8142 10.137C38.4918 9.79908 39.1695 9.79908 39.8471 9.79908C44.2518 9.79908 47.64 13.1781 47.64 17.5708C47.64 21.9635 43.913 25.3424 39.5083 25.3424ZM39.5083 42.9132H12.4024V39.1963H39.5083V42.9132ZM39.5083 6.08219C38.4918 6.08219 37.4753 6.42009 36.12 6.42009C34.0871 2.70319 30.36 0 25.9553 0C21.5506 0 17.4847 2.36529 15.7906 6.42009C14.7742 6.08219 13.7577 6.08219 12.4024 6.08219C5.96474 6.08219 0.882385 11.1507 0.882385 17.5708C0.882385 22.6393 4.27062 27.0319 8.67533 28.3835V46.2922H43.5742V28.7214C47.9789 27.0319 51.3671 22.9772 51.3671 17.9087C51.3671 11.4886 45.9459 6.08219 39.5083 6.08219ZM22.2283 31.0867H18.5012V23.653H22.2283V31.0867ZM33.7483 31.0867H30.0212V23.653H33.7483V31.0867Z', fill: '#D04F4F' });
const logo = factory.createDOMElement('svg', { class: 'align-self-center', width: '52', height: '47', viewBox: '0 0 52 47', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, logoPath);

const header = new Header(title, logo)
header.renderHeader()

export default Header;
