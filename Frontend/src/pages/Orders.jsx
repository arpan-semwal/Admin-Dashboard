import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchOrders } from '../api/orders'

const Orders = () => {

  const {data:ordersData , isLoading}  = useQuery({
    queryKey:["orders"],
    queryFn:fetchOrders
  })



  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          {ordersData?.carts?.map((order) => (
            <div key={order.id}>
              <h3>{order.total}</h3>
             
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders