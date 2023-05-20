import { Controller } from "@hotwired/stimulus";

export default class extends Controller { // Controller
    static targets = ["text", "name"] // Target

    connect() {
        this.textTarget.textContent = "# Hello Controller";
    }

    greet() { // Action
        alert(`Hello, ${this.name}\!`);
    }

    get name() {
        return this.nameTarget.value;
    }
}