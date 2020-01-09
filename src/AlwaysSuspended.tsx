import React from 'react';

const AlwaysSuspended = React.lazy(() => (new Promise(() => {}) as any));
export default AlwaysSuspended;