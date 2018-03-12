// https://gleeclub.gatech.edu/dev/matt/api.php?action=events
var events = 
	{"events":
		[
			{
				"id":"2253",
				"name":"Spring Semester Concert! Invite your friends!",
				"time":"1523318400",
				"location":"WV175",
				"summary":"Come spend an evening with the Glee Club!",
				"description":""
			},
			{
				"id":"2254",
				"name":"Eddie's Attic",
				"time":"1523328400",
				"location":"Eddie's Attic",
				"summary":"It's Britney bitch (and also Agnes Scott)",
				"description":""
			}
		],
		"status":"ok"
	};
Vue.component('event', {
	props:['eventprop'],
  template: '<div class="event"><h3>{{eventprop.name}}</h3><p>{{eventprop.time}}</p><p class="location">{{eventprop.location}}</p><p>{{eventprop.description}}</p><p><a href="#">Put in your calendar and smoke it.</a></p></div>'
});

var eventsapp = new Vue({
  el: '#events',
  data: events
});