import { useEffect, useRef } from 'react'
import './CursorFollower.css'

interface CursorFollowerProps {
  mousePosition: { x: number; y: number }
}

const CursorFollower = ({ mousePosition }: CursorFollowerProps) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cursorRef.current || !cursorDotRef.current) return

    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    const updateCursor = () => {
      cursor.style.left = `${mousePosition.x}px`
      cursor.style.top = `${mousePosition.y}px`
      
      cursorDot.style.left = `${mousePosition.x}px`
      cursorDot.style.top = `${mousePosition.y}px`
    }

    requestAnimationFrame(updateCursor)
  }, [mousePosition])

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        cursorRef.current?.classList.add('hover')
        cursorDotRef.current?.classList.add('hover')
      }
    }

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove('hover')
      cursorDotRef.current?.classList.remove('hover')
    }

    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-follower" />
      <div ref={cursorDotRef} className="cursor-dot" />
    </>
  )
}

export default CursorFollower
