import React from 'react'

import Background from '../components/Background'

const WithBackground = (WrappedComponent: React.ComponentType) => {
  const Component = () => (
    <Background>
      <WrappedComponent />
    </Background>
  )
  return Component
}

export default WithBackground
