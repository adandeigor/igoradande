import { POST } from '../route'

describe('API Route /api/send-email', () => {
  it('should export POST function', () => {
    expect(typeof POST).toBe('function')
  })

  it('should be an async function', () => {
    expect(POST.constructor.name).toBe('AsyncFunction')
  })
})
