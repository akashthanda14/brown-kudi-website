// routes/Home.jsx
import React, { lazy, Suspense } from 'react';
const Hero = lazy(() => import('../Components/Hero'));
export default function Home() {
  return (
    <Suspense fallback={<div aria-busy="true">Loading…</div>}>
      <Hero />
    </Suspense>
  );
}
