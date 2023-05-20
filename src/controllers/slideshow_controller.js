import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["slide", "text"]
    static values = { index: Number, default: 0 }

    connect() {
        this.textTarget.textContent = "# Slideshow Controller";
    }

    indexValueChanged() { // Magic
        this.showCurrentSlide();
    }

    next() {
        this.indexValue++
    }

    previous() {
        this.indexValue--
    }

    showCurrentSlide() {
        this.slideTargets.forEach((element, index) => {
            element.hidden = index !== this.indexValue
        })
    }
}
