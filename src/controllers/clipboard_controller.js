import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static classes = ["supported"]
    static targets = ["text", "source"];

    connect() {
        this.textTarget.textContent = "# Clipboard Controller"
        if ("clipboard" in navigator) {
            this.element.classList.add(this.supportedClass);
        }
    }

    copy() {
        event.preventDefault();
        navigator.clipboard.writeText(this.sourceTarget.value).then(
            alert("Copied")
        )
    }
}
