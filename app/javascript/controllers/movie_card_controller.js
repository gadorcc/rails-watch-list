import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movie-card"
export default class extends Controller {
  connect() {
    console.log("Hello from our first Stimulus controller")
  }
  link () {
    link_to list.name, list_path(list)
  }
}
