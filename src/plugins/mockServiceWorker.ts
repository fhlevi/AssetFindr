import { setupWorker } from 'msw/browser'
import MockApi from '@/mocks/api'

const worker = setupWorker(...MockApi)

worker.start()

export default worker;