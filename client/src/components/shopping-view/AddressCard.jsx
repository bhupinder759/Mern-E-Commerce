import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'

const AddressCard = ({addressInfo, handleDeleteAddress, handleEditAddress }) => {
  return (
    <Card>
        <CardContent className='grid p-4 gap-4'>
            <Label>Addres: {addressInfo?.adress}</Label> 
            <Label>City: {addressInfo?.city}</Label> 
            <Label>Pincode: {addressInfo?.pincode}</Label> 
            <Label>Phone{addressInfo?.phone}</Label> 
            <Label>Notes: {addressInfo?.notes}</Label> 
        </CardContent>
        <CardFooter className='p-3 flex justify-between'>
            <Button onClick={() => handleEditAddress(addressInfo)}>Edit</Button>
            <Button onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
        </CardFooter>
    </Card>
  )
}

export default AddressCard
