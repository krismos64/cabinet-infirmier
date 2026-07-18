import React, { Suspense, lazy } from 'react';

const Lottie = lazy(() => import('lottie-react'));

function LazyLottie(props) {
  return (
    <Suspense fallback={null}>
      <Lottie {...props} />
    </Suspense>
  );
}

export default LazyLottie;
