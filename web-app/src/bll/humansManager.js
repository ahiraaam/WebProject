const humansRepository = require('../dal/humansRepository')

exports.getAllHumans = function(callback){
	humansRepository.getAllHumans(function(humans){
		// TODO: Also handle errors.
		callback(humans)
	})
}