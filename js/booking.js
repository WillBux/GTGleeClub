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
      submitted: false,
      isLoading: false,
      bookingOrgFailed: false,
      bookingContactNameFailed: false,
      bookingContactPhoneNumberFailed: false,
      bookingContactEmailFailed: false
  	}
  }, 
  methods:{
    submitForm: function(){
      // console.log(this.bookingOrg);
      // console.log("submitted");
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
        if(response.data.status == "OK"){
          //do something nice for the user
          // console.log("we gucci fam");
          self.submitted = true;
          self.isLoading = false;
          // console.log("submitted", self.submitted);
          // console.log("isLoading", self.isLoading);
        }
        else{
          //tell them what they did wrong
          self.isLoading = false;
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    checkBookingOrg: function(){
      //check the org name
      if(this.bookingOrg == "") this.bookingOrgFailed = true;
      else this.bookingOrgFailed = false;
    },
    checkBookingContactName: function(){
      //check the person's name
      if(this.bookingContactName == "") this.bookingContactNameFailed = true;
      else this.bookingContactNameFailed = false;
    },
    checkBookingContactPhoneNumber: function(){
      //check the phone number
      if(this.bookingContactPhoneNumber > 0) this.bookingContactPhoneNumberFailed = false;
      else this.bookingContactPhoneNumberFailed = true;
    },
    checkBookingContactEmail: function(){
      //check their email
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(this.bookingContactEmail)) this.bookingContactEmailFailed = false;
      else this.bookingContactEmailFailed = true;
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