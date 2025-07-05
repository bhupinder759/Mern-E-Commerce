import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { brandOptionsMap, categoryOptionsMap } from '@/config'

const ShoppingProductTile = ({product, handleGetProductDetails, handleAddtoCart}) => {
  return (
    <Card className='w-full max-w-sm mx-auto'>
        <div onClick={() => handleGetProductDetails(product?._id)}>
            <div className='relative'>
                <img 
                src={product?.image}
                alt={product?.title}
                className='w-full h-[300px] object-cover rounded-t-lg'
                />
                {
                    product?.totalStock === 0 ? <Badge className='absolute top-2 left-2 bg-red-600 hover:bg-red-700'>Out of Stock</Badge> : 
                    product?.totalStock <10 ? <Badge className='absolute top-2 left-2 bg-yellow-600 hover:bg-yellow-700'>{`Only ${product?.totalStock} left`}</Badge> :
                    product?.salePritce > 0 ?
                    <Badge className='absolute top-2 left-2 bg-red-600 hover:bg-red-700'>Sale</Badge> : null
                }
            </div>
            <CardContent className='p-4'>
                <h2 className='text-xl font-bold mb-2'>{product?.title}</h2>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-[16px] text-muted-foreground'>{categoryOptionsMap[product?.category]}</span>
                    <span className='text-sm text-muted-foreground'>${brandOptionsMap[product?.brand]}</span>
                </div>

                <div className='flex justify-between items-center mb-2'>
                    <span className={`${product?.salePritce > 0 ? "line-through" : ""} text-lg text-semibold text-primary`}>${product?.price}</span>
                    {
                        product?.salePritce > 0 ?
                        <span className="text-lg text-semibold text-primary">${product?.salePritce}</span> : null
                    }
                </div>
            </CardContent>
        </div>
        <CardFooter>
                {
                    product?.totalStock === 0 ? (
                        <Button className='w-full opacity-60 cursor-not-allowed'>Out Of Stock</Button>
                    ) : (
                        <Button onClick={() => handleAddtoCart(product?._id, product?.totalStock)} className='w-full'>Add to Cart</Button>
                    )
                }
            </CardFooter>
    </Card>
  )
}

export default ShoppingProductTile
