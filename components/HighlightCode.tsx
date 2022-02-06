import highlight from 'highlight.js'
import { createRef, FC, ReactNode, useEffect } from 'react'

import 'highlight.js/styles/a11y-dark.css'
import styled from 'styled-components'

interface HighlightCodeProps {
  language: string
  children: ReactNode
}

const StyledHighlighCodeContainer = styled.pre`
  box-shadow: rgba(13, 13, 13, 0.2) 0px 30px 25px -5px,
    rgba(10, 10, 10, 0.2) 0px 10px 10px -5px;
`

const HighlightCode: FC<HighlightCodeProps> = ({ children, language }) => {
  const code = createRef<HTMLElement>()

  useEffect(() => {
    code.current && highlight.highlightElement(code.current)
  })

  return (
    <StyledHighlighCodeContainer>
      <code ref={code} className={language}>
        {children}
      </code>
    </StyledHighlighCodeContainer>
  )
}

export default HighlightCode
