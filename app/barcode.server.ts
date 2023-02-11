import util from 'util'
import bwip from 'bwip-js'

const generate2DBarcode = util.promisify<bwip.ToBufferOptions, Buffer>(bwip.toBuffer)

export default generate2DBarcode
