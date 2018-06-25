var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

Vue.component('event', {
	props:['eventprop'],
	template: '<div class="event"><h3>{{eventprop.name}}</h3><p>{{humanTime(eventprop.time)}}</p><p class="location">{{eventprop.location}}</p><p>{{eventprop.description}}</p><p><a href="#">Put in your calendar and smoke it.</a></p></div>',
	methods:{
		humanTime: function(jsTime){
			//Friday, March 23, 2018 at 8:00pm
			jsTime = jsTime*1000.0;
			var tempDate = new Date();
			tempDate.setTime(jsTime);
			var ampm;
			tempDate.getHours()<12 ? ampm="am" : ampm="pm";
			return ""+days[tempDate.getDay()]+", "+months[tempDate.getMonth()]+" "+tempDate.getDate()+", "+tempDate.getFullYear()+" at "+(tempDate.getHours()%12)+":"+(tempDate.getMinutes()<10 ? "0"+tempDate.getMinutes() : tempDate.getMinutes())+ampm;
		}
	}
});

Vue.config.devtools = true;

var indexapp = new Vue({
  el: '#minievents',
  data(){
  	return{
  		events: ''
  	}
  },
  mounted(){
  	var self = this;
  	axios.get('https://gleeclub.gatech.edu/dev/matt/api.php?action=publicevents')
  		.then(function (response) {
  			// console.log(response.data.events);
  			// console.log(self.events);
  			self.events = [];
  			self.events[0] = response.data.events[0];
  			if(response.data.events[1]) self.events[1] = response.data.events[1];
  			if(response.data.events[2]) self.events[2] = response.data.events[2];
  		})
  		.catch(function (error) {
  			console.log(error);
  			self.events = ":(";
  	});
  }
});