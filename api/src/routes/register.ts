import { Router } from 'express';
import { User } from '../model';
import { registerSchema, validation } from '../validation';
import { login } from '../auth';
import { guest, catchAsync } from '../middleware';

const router = Router()

router.post('/register', guest, catchAsync(async (req, res) => {
    await validation(registerSchema, req.body)
    //await registerSchema.validateAsync(req.body, { abortEarly: false })
    const { email, name, password } = req.body
    const found = await User.exists({ email })
    if (found) throw new BadRequest('Invalid email')
    const user = await User.create({ email, name, password })
    login(req, user.id)
    res.json({ msg: 'Working fine.', ...user })
}))

export default router