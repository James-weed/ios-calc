import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '..';
import { useCalcContext } from '../../../context';

jest.mock('../../../context', () => ({
  useCalcContext: jest.fn(),
}));

describe('Button component', () => {
  it('should call putNumber function on click', () => {
    const putNumber = jest.fn();
    useCalcContext.mockReturnValue({ putNumber });

    const { getByText } = render(<Button type="number" value="1" />);
    fireEvent.click(getByText('1'));

    expect(putNumber).toHaveBeenCalledWith('1');
  });

  it('should call putOperator function on click', () => {
    const putOperator = jest.fn();
    useCalcContext.mockReturnValue({ putOperator });

    const { getByText } = render(<Button type="operator" value="+" />);
    fireEvent.click(getByText('+'));

    expect(putOperator).toHaveBeenCalledWith('+');
  });

  // Add more tests for other button types
});
