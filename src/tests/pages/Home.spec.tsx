import { render, screen } from '@testing-library/react'
import Home from '../../pages'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        push: jest.fn()
      }
    }
  }
})

jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false]
  }
})

describe('Home page', () => {
  it('renders corectly', () => {
    render(<Home product={{ priceId: 'fake-price-id', amount: 'R$10,00' }} />)

    expect(screen.getByText("for R$10,00 month")).toBeInTheDocument();
  })
})