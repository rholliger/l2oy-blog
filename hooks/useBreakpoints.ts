import { useCallback, useEffect, useRef, useState } from 'react'
import { sizes } from '../styles/responsive'

export enum Breakpoint {
  MOBILE = 'm',
  TABLET = 't',
  DESKTOP = 'd',
}

const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState<Breakpoint>(Breakpoint.MOBILE)

  const onResizeCallback = useCallback(() => {
    if (window.innerWidth <= sizes.tablet) {
      setBreakpoints(Breakpoint.MOBILE)
    } else if (window.innerWidth <= sizes.laptop) {
      setBreakpoints(Breakpoint.TABLET)
    } else {
      setBreakpoints(Breakpoint.DESKTOP)
    }
  }, [])

  useEffect(() => {
    onResizeCallback()

    window.addEventListener('resize', onResizeCallback)

    return () => {
      window.removeEventListener('resize', onResizeCallback)
    }
  }, [onResizeCallback])

  return breakpoints
}

export default useBreakpoints
