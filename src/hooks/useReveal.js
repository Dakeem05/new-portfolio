import { useEffect, useRef } from 'react'

/**
 * Adds the `revealed` class to every `[data-reveal]` descendant as it enters
 * the viewport. Returns a ref to attach to the section root.
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = Array.from(root.querySelectorAll('[data-reveal]'))
    if (!items.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
