Vue.config.devtools = true;

var bookingapp = new Vue({
  el: '#booking',
  data: function(){
  	return {
  		bookingOrg: "",
  		bookingContactName: "",
  		bookingContactPhoneNumber: "",
  		bookingContactEmail: "",
  		bookingNameOfEvent: "",
  		bookingDateOfEvent: "",
  		bookingTimeOfEvent: "",
  		bookingLocationOfEvent: "",
  		bookingComments: "",
      submitted: true,
      isLoading: true
  	}
  }, 
  methods:{
    submitForm: function(){
      // console.log(this.bookingOrg);
      console.log("submitted");
      this.isLoading = true;

      var self = this;
      axios.post('https://gleeclub.gatech.edu/dev/matt/api.php?action=gigreq', {
        choir: 'glee',
        bookingOrg: self.bookingOrg,
        bookingContactName: self.bookingContactName,
        bookingContactPhoneNumber: self.bookingContactPhoneNumber,
        bookingContactEmail: self.bookingContactEmail,
        bookingNameOfEvent: self.bookingNameOfEvent,
        bookingDateOfEvent: self.bookingDateOfEvent,
        bookingTimeOfEvent: self.bookingTimeOfEvent,
        bookingLocationOfEvent: self.bookingLocationOfEvent,
        bookingComments: self.bookingComments
      })
      .then(function (response) {
        console.log(response);
        if(response.statusText == "OK" && response.status == 200){
          //do something nice for the user
          console.log("we gucci fam");
          self.submitted = false;
          self.isLoading = true;
        };
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});