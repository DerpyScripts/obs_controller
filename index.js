/**
 * @author Arturs Dobrecovs <mail@arturs.site>
 * @copyright 2019-present @derpyscripts and contributors
 * @license MIT
 */
'use strict';

const
	exec = require('child_process').exec,
	path = require('path');

	
const currentDir = process.cwd();
const OBS_COMMAND_EXEC = currentDir + '\\OBSCommand\\OBSCommand.exe';

class OBSController {
	
	constructor(host, port) {
		this._host = host;
		this._port = port;
		this._profile = null;
		this._password = null;
		this._scene = null;
		this._streaming = null;
		this._recording = null;
	}
	
	createCommand(name, value) {
		let baseline = OBS_COMMAND_EXEC + ' /server=' + this._host + ':' + this._port + ' /' + name + '=' + value;
		
		if (this._profile !== null && name !== "profile") {
			baseline += " /profile=" + this._profile;
		}
		
		if (this._password !== null && name !== "password") {
			baseline += " /password=" + this._password;
		}
		
		if (this._scene !== null && name !== "scene") {
			baseline += " /scene=" + this._scene;
		}
	}
	
	getProfile() {
		return this._profile;
	}
	
	setProfile(profile) {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /profile="' + profile + '"', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					that._profile = profile;
					resolve(false);
				}
			});
		});
	}
	
	setPassword(password) {
		this._password = password;
	}
	
	getScene() {
		return this._scene;
	}
	
	setScene(scene) {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /scene="' + scene + '"', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					that._scene = scene;
					resolve(false);
				}
			});
		});
	}
	
	showSource(source) {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /showsource="' + source + '"', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					resolve(false);
				}
			});
		});
	}
	
	hideSource(source) {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /hidesource="' + source + '"', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					resolve(false);
				}
			});
		});
	}
	
	startStream() {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /startstream', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					that._streaming = true;
					resolve(false);
				}
			});
		});
	}
	
	stopStream() {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /stopstream', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					that._streaming = false;
					resolve(false);
				}
			});
		});
	}
	
	startRecording() {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /startrecording', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					that._recording = true;
					resolve(false);
				}
			});
		});
	}
	
	stopRecording() {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /stoprecording', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					that._recording = false;
					resolve(false);
				}
			});
		});
	}
	
	toggleAudio(audio_source) {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /toggleaudio="' + audio_source + '"', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					resolve(false);
				}
			});
		});
	}
	
	muteAudio(audio_source) {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /mute="' + audio_source + '"', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					resolve(false);
				}
			});
		});
	}
	
	unmuteAudio(audio_source) {
		var that = this;
		
		return new Promise(function(resolve, reject) {
			exec(OBS_COMMAND_EXEC + ' /unmute="' + audio_source + '"', function(error, stdout, stderr) {
				stdout = stdout.trim();
				
				if (stdout !== "Ok") {
					resolve(stdout);
				} else {
					resolve(false);
				}
			});
		});
	}
	
}

module.exports = OBSController;