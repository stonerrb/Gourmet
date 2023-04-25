import { Typography } from '@mui/material'
import React from 'react'
import './Ordercard.css'

export default function OrdersCard() {
  return (
    <div className='order-card'>
        <div className='order-card-left'><div>Order ID:</div><div>Order Time</div><div>Value</div></div>
        <div className='order-card-right'>Time to cook</div>
    </div>
  )
}
