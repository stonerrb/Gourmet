import { Typography } from '@mui/material'
import React from 'react'
import './Ordercard.css'

export default function OrdersCard(order) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }

  const date = formatDate(order.created_at);
  
  return (
    <div className='order-card'>
        <div className='order-card-left'><div>{order.id}</div><div>{date}</div></div>
        <div className='order-card-right'>{order.status}</div>
    </div>
  )
}
