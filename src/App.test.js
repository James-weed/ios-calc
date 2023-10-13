// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { CalcProvider, useCalcContext } from './context';

jest.mock('./context', () => ({
  ...jest.requireActual('./context'),
  useCalcContext: jest.fn(),
}));

jest.mock('./components/Calculator', () => {
  return function MockCalculator() {
    return (
      <div data-testid="mock-calculator">
        Mock Calculator
      </div>
    );
  };
});

describe('App', () => {
  it('renders App component with Calculator and Calculator Provider', () => {
    const mockUseCalcContext = jest.fn();
    mockUseCalcContext.mockReturnValue({
      next: '2',
      total: '5',
      putNumber: jest.fn(),
      putOperator: jest.fn(),
      putSign: jest.fn(),
      putPercentage: jest.fn(),
      clear: jest.fn(),
      calc: jest.fn(),
    });

    useCalcContext.mockImplementation(mockUseCalcContext);

    const { getByTestId } = render(
      <CalcProvider>
        <App />
      </CalcProvider>
    );

    // Add your assertions here
    const calculatorElement = getByTestId('mock-calculator');
    expect(calculatorElement).toBeInTheDocument();
  });
});
