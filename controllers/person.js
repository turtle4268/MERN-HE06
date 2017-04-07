var Person = require('../models/person');

module.exports = function(req, res) {
	res.send('Success!');
	var person = new Person({
		usertname: req.body.usertname,
		password: req.body.password
	});
	person.save(function(err){
		if (err) throw err;
		console.log('person saved!');
	});
};
