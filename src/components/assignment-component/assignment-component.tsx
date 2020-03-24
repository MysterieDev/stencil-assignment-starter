import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "my-assignment-component",
  styleUrl: "assignment-component.css",
  shadow: true
})
export class AssignmentComponent {
  @Prop() bold: boolean;

  render() {
    return (
      <Host>
        <p class={{ important: this.bold }}>
          <slot></slot>
        </p>
        <my-cta-button text="do that action"></my-cta-button>
      </Host>
    );
  }
}
