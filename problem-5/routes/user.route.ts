import { validate } from './../middlewares/validate.middleware'
import { Router } from 'express'
import UserController from '../controllers/user.controller'
import { createUserDto, updateUserDto } from '../dtos/user.dto'
const router = Router()

router.get('/', UserController.getUsers)
router.get('/:id', UserController.getUser)
router.post('/', validate(createUserDto), UserController.create)
router.put('/:id', validate(updateUserDto), UserController.update)
router.delete('/:id', UserController.delete)

export default router
