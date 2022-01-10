import { FC } from 'react'
import styled from 'styled-components'

interface LayoutContainerProps {
  children: React.ReactNode
}

const LayoutContainer: FC<LayoutContainerProps> = ({ children }) => {
  return <div>{children}</div>
}

export default LayoutContainer
