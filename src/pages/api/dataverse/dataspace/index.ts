import type { NextApiRequest, NextApiResponse } from 'next'
import { dataspaces } from '../../init'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method !== 'GET') {
    res.status(405).send(null)
    return
  }

  res.status(200).json(dataspaces.toIndexedSeq().toArray())
}

export default handler
