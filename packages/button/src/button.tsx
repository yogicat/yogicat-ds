import React from 'react'
import styled from '@emotion/styled'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const StyledButton = styled.button<Pick<ButtonProps, 'primary' | 'size'>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${({ primary }) => (primary ? 'white' : '#333')};
  background-color: ${({ primary }) => (primary ? '#1ea7fd' : 'transparent')};
  box-shadow: ${({ primary }) =>
    primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};

  font-size: ${({ size }) =>
    size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px'};
  padding: ${({ size }) =>
    size === 'small'
      ? '10px 16px'
      : size === 'medium'
      ? '11px 20px'
      : '12px 24px'};
`
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => (
  <StyledButton type="button" primary={primary} size={size} {...props}>
    {label}
  </StyledButton>
)
