import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
    static styles = css`p {
      color: blue
    }`;

    @property()
    name = 'Somebody';

    render() {
        return html`<p>Hello, ${this.name}!</p>
        <button @click=${this.clickButton}>click</button>
        <input placeholder="Enter your name" @input=${this.changeName}>
        `;
    }

    clickButton(event: Event) {
        this.name = 'Clicked';
    }

    changeName(event: Event) {
        const input = event.target as HTMLInputElement;
        this.name = input.value;
    }

}
