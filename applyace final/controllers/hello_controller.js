import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["image", "link", "page","hBtn", "aboutBtn","feature", "activeColor", "cross"]

  connect() {
    // Set up the image slideshow
    this.showCurrentImage()
    setInterval(() => {
      this.showNextImage()
    }, 3000)

    // Set up the navigation menu
    this.linkTargets.forEach(link => {
      link.addEventListener("click", () => {
        this.showPage(link)
      })
    })

    // learn more btn 
    this.hBtnTarget.addEventListener("click", () => {
      this.toggleLearnMore()
    })

  }

  // ------------------------

 
 // Set up the image slideshow
 currentIndex = 0
  showCurrentImage() {
    this.imageTargets.forEach((image, index) => {
      if (index === this.currentIndex) {
        image.classList.remove("hidden", "fade-image")
      } else {
        image.classList.add("hidden", "fade-image")
      }
    })
  }
 // Set up the image slideshow
  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageTargets.length
    this.showCurrentImage()
  }

  // --------------------------------------

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
// ----------------------------

  // learn more btn  in about section 
  toggleLearnMore(){
    if (this.hBtnTarget.classList.contains("h-full")) {
      this.hBtnTarget.classList.remove("h-full")
      this.hBtnTarget.classList.add("h-[42.79rem]")
    } else {
      this.hBtnTarget.classList.add("h-full")
      this.hBtnTarget.classList.remove("h-[42.79rem]")
    }
    this.hBtnTarget.classList.toggle("overflow-about")
    this.aboutBtnTarget.classList.toggle("aboutbtn")
  }

  // ---------------------------------

  // toggle Feature 
  toggleFeature (event) {
    let feature = event.currentTarget
    let index = this.featureTargets.indexOf(feature)
    let activeColor = this.activeColorTargets[index]
    let cross = this.crossTargets[index]

    if (feature.classList.contains('h-full')) {
      feature.classList.add('h-10');
      feature.classList.remove("h-full");
      activeColor.classList.remove("active-color");
      cross.classList.remove('hidden');
    } else {
      feature.classList.remove('h-10');
      feature.classList.add("h-full");
      activeColor.classList.add("active-color");
      cross.classList.add('hidden');
    }
  }


}

// SCroll animation caller
AOS.init();