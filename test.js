const OBSController = require('./index');

let cont = new OBSController('localhost', '4444');

cont.setProfile('Undefined')
	.then((error) => {
		if (error === false) {
			console.log("Updated profile to '" + cont.getProfile() + "'");
		} else {
			console.log("Failed to update the profile. Reason: " + error);
		}
	});

cont.setScene('Screen Scene')
	.then((error) => {
		if (error === false) {
			console.log("Updated scene to '" + cont.getScene() + "'");
		} else {
			console.log("Failed to update the scene. Reason: " + error);
		}
	});