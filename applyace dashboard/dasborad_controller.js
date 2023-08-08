import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["link", "page"]

  connect() {
  
    // Set up the navigation menu
    this.linkTargets.forEach(link => {
      link.addEventListener("click", () => {
        this.showPage(link)
      })
    })
  }

// Set up the navigation menu

  showPage(link) {
    // Remove the active-color class from all navigation links
    this.linkTargets.forEach(link => {
      link.classList.remove("active-color")
    })
    // Add the active-color class to the clicked link
    link.classList.add("active-color")
    // Show the corresponding page
    this.pageTargets.forEach(page => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active")
      } else {
        page.classList.remove("active")
      }
    })
  }

}