import React from 'react'
import News from './news/News'
import GetInApp from './getinapp/GetInApp'

const Header = () => {
  return (
    <>
      <header>
        <div className='header-top'>
          <div className='container-fluid-lg'>
            <div className='row'>
              <div className='main-header'>
              <GetInApp />
              <News />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header