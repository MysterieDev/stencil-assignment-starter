import { Component, Host, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "my-cta-button",
  styleUrl: "cta-button.css",
  shadow: true
})
export class CtaButton {
  @Prop() text: string | "default text";

  handleClick() {
    alert("YOU'VE BEEN ALERTED");
  }

  @Listen("click")
  handleClickEvent() {
    console.log("cta-button clicked");
  }

  render() {
    return (
      <Host>
        <button onClick={this.handleClick}>{this.text}</button>
      </Host>
    );
  }
}
