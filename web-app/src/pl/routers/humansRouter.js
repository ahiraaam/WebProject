const express = require('express')
const humansManager = require('../../bll/humansManager')

const router = express.Router()

router.get("/", function(request, response){
	
	humansManager.getAllHumans(function(humans){
		// TODO: Also handle errors.
		const model = {
			humans
		}
		response.render("humans.hbs", model)
	})
	
})

module.exports = router