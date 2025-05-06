import React from 'react'
import './OrderSticker.css'
const OrderSticker = ({OrderName}) => {
  return (
    <div className='order-sticker'>{OrderName}</div>
  )
}

export default OrderSticker