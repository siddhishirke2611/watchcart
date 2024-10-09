import React from 'react'
import { useTranslation } from 'react-i18next'

const News = () => {
  const { t } = useTranslation()
  return (
    <div className='timer-notification'>
      <h6>
        <strong className='me-1'>
          {t("strong")}
        </strong>
        {t("offer")}
        <strong className='me-1'>
          New Coupon Code: FAST50
        </strong>
      </h6>
    </div>
  )
}

export default News