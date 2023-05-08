import type { NextApiRequest, NextApiResponse } from 'next'
import CONFIG from '@/config'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let maxResults = 6
  const { subject, startIndex } = req.query
  const gbooksReqParams = new URLSearchParams()
  gbooksReqParams.set('q', `Subject:${subject}`)
  gbooksReqParams.set('key', `${CONFIG.KEY}`)
  gbooksReqParams.set('startIndex', `${startIndex}`)
  gbooksReqParams.set('maxResults', `${maxResults}`)
  gbooksReqParams.set('langRestrict', `en`)
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}`
  )
  const booksData = await response.json()

  res.status(200).send({
    booksData,
  })
}
