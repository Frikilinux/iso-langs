import { Request, Response } from 'express'
import { languages } from '../data/languages'

const getLangs = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: languages,
  })
}

const getLang = async (req: Request, res: Response) => {
  const lang = req.params.lang
  const language = languages.find((l) => l.code === lang)
  if (language) {
    res.status(200).json({
      success: true,
      data: language,
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'Language not found',
    })
  }
}

export { getLangs, getLang }
