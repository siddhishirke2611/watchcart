import React from 'react'
import News from './news/News'
import GetInApp from './getinapp/GetInApp'
import LanguageSelector from '../../component/language-selector/LanguageSelector'
import Currency from './currency/Currency'

const Header = () => {
  return (
    <>
      <header>
        <div className='header-top'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='main-header'>
              <GetInApp />
              <News />
              <LanguageSelector/>
              <Currency/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header