import { Router } from 'express';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';
import { VerifyTokenUserController } from './useCases/verifyTokenUser/VerifyTokenUserController';
import { CreateUserController } from './useCases/createUser/CreateUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const verifyTokenController = new VerifyTokenUserController();

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/verifyToken', verifyTokenController.handle);
router.get('/privateRoute', ensureAuthenticated, (_, response) => {
  return response.json({
    success: true,
    message: 'Succeeded access to private route',
  });
});

export { router };
