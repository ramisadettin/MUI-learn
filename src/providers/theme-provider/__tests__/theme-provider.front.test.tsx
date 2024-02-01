import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeProviderWrapper from "../ThemeProvider";
import React, { ReactNode } from "react";
import { Theme,  } from "@mui/material/styles";
import ThemeConsumer from "../TestConsumer";
import userEvent from "@testing-library/user-event";

var wrappedChildrenTestId = 'wrapped-children'

var themePorviderTestId = 'theme-provider-id'

var cssBaseLineTestId = 'css-baseline'


var wrappedChildren = (<div data-testid={wrappedChildrenTestId}></div>)

var ThemeProviderPropsCaller = jest.fn()

var responsiveFontTheme = 'responsive-theme'

var initialTheme = 'light'
var themeAfterToggle = 'dark'
var themeAfterToggle2 = 'light'

jest.mock('@mui/material/styles', () => ({
  __esModule: true,
  ...jest.requireActual('@mui/material/styles'),
  responsiveFontSizes: (theme: Theme) => responsiveFontTheme,
  ThemeProvider: ({ children, theme }: { children: ReactNode, theme: Theme }) => {
    ThemeProviderPropsCaller(theme)
    return <div data-testid={themePorviderTestId}>{children}</div>
  },
}))
jest.mock('@mui/material/CssBaseline', () => ({
  __esModule: true,
  default: () => <div data-testid={cssBaseLineTestId}></div>
}))

describe('@@@ ThemeProviderWrapper-component-frontend-test', () => {
  describe('** Rendering tests', () => {
    test('T: it renders children correctly', () => {
      render(<ThemeProviderWrapper>{wrappedChildren}</ThemeProviderWrapper>)
      const renderedChildren = screen.getByTestId(wrappedChildrenTestId)
      expect(renderedChildren).toBeInTheDocument()
    })
    test('T: it renders ThemeProvider correctly', () => {
      render(<ThemeProviderWrapper>{wrappedChildren}</ThemeProviderWrapper>)
      const renderedThemeProvider = screen.getByTestId(themePorviderTestId)
      expect(renderedThemeProvider).toBeInTheDocument()
    })
    test('T: it renders CssBaseline correctly', () => {
      render(<ThemeProviderWrapper>{wrappedChildren}</ThemeProviderWrapper>)
      const renderedCssBaseLine = screen.getByTestId(cssBaseLineTestId)
      expect(renderedCssBaseLine).toBeInTheDocument()
    })
  })
  describe(' ** Rendering with correct props', () => {
    test('T: it renders ThemeProvider with correct props', () => {
      render(<ThemeProviderWrapper>{wrappedChildren}</ThemeProviderWrapper>)
      expect(ThemeProviderPropsCaller).toHaveBeenCalledWith(responsiveFontTheme)
    })
  })
  describe(' ** Consumer behaviour', () => {
    test('T: it renders consumer with light mode initially', () => {
      render(<ThemeProviderWrapper><ThemeConsumer /></ThemeProviderWrapper>)
      let renderedConsumer = screen.getByRole('button')
      expect(renderedConsumer.innerHTML).toBe(initialTheme)
    })
    test('T: it toggles theme', async () => {
      render(<ThemeProviderWrapper><ThemeConsumer /></ThemeProviderWrapper>)
      let renderedConsumer = screen.getByRole('button')
      expect(renderedConsumer.innerHTML).toBe(initialTheme)
      const user = userEvent.setup()
      await user.click(renderedConsumer)
      expect(renderedConsumer.innerHTML).toBe(themeAfterToggle)
      await user.click(renderedConsumer)
      expect(renderedConsumer.innerHTML).toBe(themeAfterToggle2)
    })
  })
})