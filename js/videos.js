// https://gleeclub.gatech.edu/dev/matt/api.php?action=publicsongs
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// Vue.component('gcvideo', {
// 	props:['videoprop'],
// 	template: '<div class="video"><p>{{videoprop.title}}</p><ul>{{videoLinks(videoprop.links)}}</ul></div>',
// });

Vue.config.devtools = true;

var videoapp = new Vue({
  el: '#videos',
  data(){
  	return {
  		rep: '',
      burgerIsActive: false
  	}
  },
  mounted(){
  	var self = this;
    axios.post('https://gleeclub.gatech.edu/buzz/api.php?action=publicsongs', {
      choir: 'glee'
    })
    .then(function (response) {
      self.rep = response.data.songs;
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
});