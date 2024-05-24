import { Router } from 'express'
import { getLang, getLangs } from '../controllers/langs'

const router = Router()

router.get('/', getLangs)
router.get('/:lang', getLang)

export default router
