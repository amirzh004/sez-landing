"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

// хук вызываем внутри компонента, который рендерится внутри Suspense
function ClientLayoutInner({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams()
    // ...если нужно, используй searchParams здесь
    // const ref = searchParams.get("ref")
    return <>{children}</>
}

export default function ClientLayout({
                                         children,
                                     }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ClientLayoutInner>{children}</ClientLayoutInner>
            </Suspense>
            <Analytics />
        </>
    )
}
