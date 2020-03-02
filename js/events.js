var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

Vue.component('event', {
  props:['eventprop'],
  template: '<section class="section"><h3 class="title">{{eventprop.name}}</h3><p class="subtitle">{{humanTime(eventprop.time)}}</p><p class="location">{{eventprop.location}}</p><p>{{eventprop.description}}</p><p><a href="#">Put in your calendar and smoke it.</a></p></section>',
});

Vue.config.devtools = true;

var eventsapp = new Vue({
  el: '#events',
  data(){
    return{
      events: '',
      burgerIsActive: false,
      thereAreEvents: false,
      currentEvent: 0
    }
  },
  methods:{
    humanTime: function(jsTime, granularity){
      //Friday, March 23, 2018 at 8:00pm
      //jsTime = jsTime*1000.0;
      var tempDate = new Date();
      tempDate.setTime(jsTime);
      var ampm;
      tempDate.getHours()<12 ? ampm="am" : ampm="pm";
      if (granularity == "day"){
        return ""+days[tempDate.getDay()]+", "+months[tempDate.getMonth()]+" "+tempDate.getDate();
      }
      return ""+days[tempDate.getDay()]+", "+months[tempDate.getMonth()]+" "+tempDate.getDate()+", "+tempDate.getFullYear()+" at "+(tempDate.getHours() > 12 ? tempDate.getHours()-12 : tempDate.getHours())+":"+(tempDate.getMinutes()<10 ? "0"+tempDate.getMinutes() : tempDate.getMinutes())+ampm;
    },
    loadEvent: function(eventId){
      if(this.events){
        for (var i = this.events.length - 1; i >= 0; i--) {
          if(this.events[i].id == eventId) this.currentEvent = this.events[i];
        }
      }
    }
  },
  mounted(){
    var self = this;
    axios.get('https://gleeclub.gatech.edu/cgi-bin/api/public_events')
    .then(function (response) {
      response.data = response.data.filter(event => event.time > Date.now());
      self.events = response.data;
      if(self.events.length) self.thereAreEvents = true;
      // console.log(response);
      self.currentEvent = self.events[0];
    })
    .catch(function (error) {
      console.log(error);
    });
  }
});

