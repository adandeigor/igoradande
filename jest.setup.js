import '@testing-library/jest-dom'

// Polyfill pour Request et Response dans l'environnement de test
global.Request = class Request {
  constructor(url, options = {}) {
    this.url = url
    this.method = options.method || 'GET'
    this.headers = new Map(Object.entries(options.headers || {}))
    this.body = options.body
  }
  
  json() {
    return Promise.resolve(JSON.parse(this.body))
  }
}

global.Response = class Response {
  constructor(body, options = {}) {
    this.body = body
    this.status = options.status || 200
    this.headers = new Map(Object.entries(options.headers || {}))
  }
  
  json() {
    return Promise.resolve(this.body)
  }
}

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

// Mock Framer Motion avec des composants qui passent les props correctement
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => {
      // Filtrer les props spécifiques à Framer Motion
      const { animate, initial, transition, whileHover, whileTap, onHoverStart, onHoverEnd, ...restProps } = props
      return <div {...restProps}>{children}</div>
    },
    span: ({ children, ...props }) => {
      const { animate, initial, transition, ...restProps } = props
      return <span {...restProps}>{children}</span>
    },
    a: ({ children, ...props }) => {
      const { animate, initial, transition, whileHover, whileTap, onHoverStart, onHoverEnd, ...restProps } = props
      return <a {...restProps}>{children}</a>
    },
    button: ({ children, ...props }) => {
      const { animate, initial, transition, whileHover, whileTap, ...restProps } = props
      return <button {...restProps}>{children}</button>
    },
    p: ({ children, ...props }) => {
      const { animate, initial, transition, ...restProps } = props
      return <p {...restProps}>{children}</p>
    },
    h1: ({ children, ...props }) => {
      const { animate, initial, transition, ...restProps } = props
      return <h1 {...restProps}>{children}</h1>
    },
    h2: ({ children, ...props }) => {
      const { animate, initial, transition, ...restProps } = props
      return <h2 {...restProps}>{children}</h2>
    },
    h3: ({ children, ...props }) => {
      const { animate, initial, transition, ...restProps } = props
      return <h3 {...restProps}>{children}</h3>
    },
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock Intersection Observer
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
