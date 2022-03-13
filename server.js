
var icmp = require ("icmp");
var response = icmp.ping("www.google.fr")
	.then(obj => {
			 console.log(obj.open ? 'Done' : 'Failed')
			 console.log(obj)
	 })
	 .catch(err => console.log(err));
