/**
 * GET
 * POST
 * PUT O PATCH
 * DELETE
 */

 var express = require('express')
 var router = express.Router()
 const RegisterController = require('../controllers/RegisterController')

 router.get('/',RegisterController.getAll)
 router.get('/:id', RegisterController.getOneById)
 router.post('/insert',RegisterController.insert)
 router.put('/update', RegisterController.update)
 router.delete('/delete',RegisterController.deleteById)

 module.exports = router