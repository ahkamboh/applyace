


import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['creditCard', 'sadapay', 'jazzcash', 'easypaisa', 'creditCardBtn', 'sadapayBtn', 'jazzcashBtn', 'easypaisaBtn']

  showForm(event) {
    const formName = event.currentTarget.dataset.formName;
    const forms = ['creditCard', 'sadapay', 'jazzcash', 'easypaisa'];
    const buttons = ['creditCardBtn', 'sadapayBtn', 'jazzcashBtn', 'easypaisaBtn'];
    forms.forEach(form => {
      if (form === formName) {
        this[form + 'Target'].classList.remove('hidden');
      } else {
        this[form + 'Target'].classList.add('hidden');
      }
    });
    
    buttons.forEach(button => {
      if (button === formName + 'Btn') {
        this[button + 'Target'].classList.add('nav-btn-color');
      } else {
        this[button + 'Target'].classList.remove('nav-btn-color');
      }
    });
  }

}







// typed.js animation 
var typed = new Typed('.element', {
  strings: ['Jazz Cash', ' Easy Paisa ', ' Cerdit Card ', ' Sadapay '],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 50,
});
  
// Parsley.js

$(document).ready(function () {
  // Initialize Parsley for the form
  $('#creditCardForm').parsley();

  document.getElementById('expiration_date').addEventListener('input', function (event) {
    let value = event.target.value;
    if (value.length == 2 && event.inputType != 'deleteContentBackward') {
      event.target.value = value + '/';
    }
  });

  window.Parsley.addValidator('expirationdate', {
    requirementType: 'string',
    validateString: function (value) {
      let date = new Date();
      let month = date.getMonth() + 1;
      let year = date.getFullYear().toString().slice(-2);
      let input = value.split('/').map(function (x) { return parseInt(x); });
      if (input[0] < 1 || input[0] > 12 || input[1] < year || (input[1] == year && input[0] < month)) {
        return false;
      }
      return true;
    },
    messages: {
      en: 'Your credit card has expired.',
    }
  });

});



$(document).ready(function () {
  // Initialize Parsley for the form
  $('.mobileValidation').parsley();
});

setTimeout(function() {
  $('.inner div').addClass('done'); 
  
  setTimeout(function() {
    $('.inner div').addClass('page'); 
    
    setTimeout(function() {
    	$('.pageLoad').addClass('off'); 
      
      $('body, html').addClass('on'); 
      
      
  	}, 500)
  }, 500)
}, 1500)



