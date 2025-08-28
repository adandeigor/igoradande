interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

class RateLimiter {
  private store: RateLimitStore = {}
  private readonly windowMs: number
  private readonly maxRequests: number

  constructor(windowMs: number = 15 * 60 * 1000, maxRequests: number = 5) {
    this.windowMs = windowMs
    this.maxRequests = maxRequests
  }

  private getKey(identifier: string): string {
    return `rate_limit:${identifier}`
  }

  private cleanup(): void {
    const now = Date.now()
    Object.keys(this.store).forEach(key => {
      if (this.store[key].resetTime < now) {
        delete this.store[key]
      }
    })
  }

  isAllowed(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    this.cleanup()
    
    const key = this.getKey(identifier)
    const now = Date.now()
    
    if (!this.store[key]) {
      this.store[key] = {
        count: 1,
        resetTime: now + this.windowMs
      }
      return {
        allowed: true,
        remaining: this.maxRequests - 1,
        resetTime: this.store[key].resetTime
      }
    }

    if (now > this.store[key].resetTime) {
      this.store[key] = {
        count: 1,
        resetTime: now + this.windowMs
      }
      return {
        allowed: true,
        remaining: this.maxRequests - 1,
        resetTime: this.store[key].resetTime
      }
    }

    if (this.store[key].count >= this.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: this.store[key].resetTime
      }
    }

    this.store[key].count++
    return {
      allowed: true,
      remaining: this.maxRequests - this.store[key].count,
      resetTime: this.store[key].resetTime
    }
  }
}

// Instance globale du rate limiter
export const rateLimiter = new RateLimiter(15 * 60 * 1000, 5) // 5 requêtes par 15 minutes

export function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const realIP = req.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}
