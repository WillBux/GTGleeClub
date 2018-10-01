Vue.config.devtools = true;

var bookingapp = new Vue({
  el: '#booking',
  data: function(){
  	return {
      burgerIsActive: false,
  		bookingOrg: "",
  		bookingContactName: "",
  		bookingContactPhoneNumber: "",
  		bookingContactEmail: "",
  		bookingNameOfEvent: "",
  		bookingDateOfEvent: "",
  		bookingTimeOfEvent: "",
      bookingDateOfEventUnix: 0,
  		bookingLocationOfEvent: "",
  		bookingComments: "",
      submitted: false,
      isLoading: false,
      bookingOrgFailed: false,
      bookingContactNameFailed: false,
      bookingContactPhoneNumberFailed: false,
      bookingContactEmailFailed: false,
      bookingNameOfEventFailed: false,
      bookingDateOfEventFailed: false,
      bookingTimeOfEventFailed: false,
      bookingLocationOfEventFailed: false
  	}
  }, 
  methods:{
    submitForm: function(){
      // console.log(this.bookingOrg);
      // console.log("submitted");

      //is it actually filled out lol
      this.checkBookingOrg();
      this.checkBookingContactName();
      this.checkBookingContactPhoneNumber();
      this.checkBookingContactEmail();
      this.checkBookingNameOfEvent();
      this.checkBookingDateOfEvent();
      this.checkBookingTimeOfEvent();
      this.checkBookingLocationOfEvent();
      if(this.bookingOrgFailed || this.bookingContactNameFailed || this.bookingContactPhoneNumberFailed || this.bookingContactEmailFailed || this.bookingNameOfEventFailed || this.bookingDateOfEventFailed || this.bookingTimeOfEventFailed || this.bookingLocationOfEventFailed){
        //idk something maybe?
      }
      else{
        this.isLoading = true;
        var self = this;
        axios.post('https://gleeclub.gatech.edu/api.php?action=gigreq', {
          choir: 'glee',
          bookingOrg: self.bookingOrg,
          bookingContactName: self.bookingContactName,
          bookingContactPhoneNumber: self.bookingContactPhoneNumber,
          bookingContactEmail: self.bookingContactEmail,
          bookingNameOfEvent: self.bookingNameOfEvent,
          bookingDateOfEventUnix: self.bookingDateOfEventUnix,
          bookingLocationOfEvent: self.bookingLocationOfEvent,
          bookingComments: self.bookingComments
        })
        .then(function (response) {
          console.log(response);
          if(response.data.status == "ok"){
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
            alert("Ummm something went wrong behind the scenes. Email us and tell us: "+response.data.message);
          }
        })
        .catch(function (error) {
          // console.log(error);
        });
      }//end else
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
      var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if(regex.test(this.bookingContactPhoneNumber)) this.bookingContactPhoneNumberFailed = false;
      else this.bookingContactPhoneNumberFailed = true;
    },
    checkBookingContactEmail: function(){
      //check their email
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(this.bookingContactEmail)) this.bookingContactEmailFailed = false;
      else this.bookingContactEmailFailed = true;
    },
    checkBookingNameOfEvent: function(){
      //check the name exists      
      if(this.bookingNameOfEvent.length > 0) this.bookingNameOfEventFailed = false;
      else this.bookingNameOfEventFailed = true;
    },
    checkBookingDateOfEvent: function(){
      //is the date a date
      //2018-07-16
      if(moment(this.bookingDateOfEvent, "YYYY-MM-DD").format("X") > 0) this.bookingDateOfEventFailed = false;
      else this.bookingDateOfEventFailed = true;
    },
    checkBookingTimeOfEvent: function(){
      //check the time, what time is it?
      //13:00
      this.bookingDateOfEventUnix = moment(this.bookingDateOfEvent+" "+this.bookingTimeOfEvent, "YYYY-MM-DD HH:mm").format("X");
      if(this.bookingDateOfEventUnix > 0){
        this.bookingTimeOfEventFailed = false;
      }
      else{
        bookingTimeOfEventFailed = true;
        this.bookingDateOfEventUnix = 0;
      }
    },
    checkBookingLocationOfEvent: function(){
      //does it exist
      if(this.bookingLocationOfEvent.length > 0) this.bookingLocationOfEventFailed = false;
      else this.bookingLocationOfEventFailed = true;
    }
  }
});

