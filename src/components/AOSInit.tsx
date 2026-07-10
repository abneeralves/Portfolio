'use client'

import { useEffect } from 'react'

export default function AOSInit() {
    useEffect(() => {
        import('aos').then((mod) => {
            const AOS = mod.default ?? mod
            AOS.init({ duration: 1500, once: true })
        })
    }, [])
    return null
}
