import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto px-4 md:px-6 lg:px-6 xl:px-3 2xl:px-0 '>
        {children}
    </div>
  )
}

export default Container