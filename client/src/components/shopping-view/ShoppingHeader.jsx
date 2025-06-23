import { Sheet } from '../ui/sheet'
import React from 'react'
import { SheetContent, SheetTrigger } from '../ui/sheet'
import { HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import { useSelector } from 'react-redux';
import { shoppingViewHeaderMenuItems } from '@/config';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback } from '../ui/avatar';

function MenuItems() {
  return <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
    {
      shoppingViewHeaderMenuItems.map((menuItem) => (
        <Link className='text-sm font-medium' key={menuItem.id} to={menuItem.path}>{menuItem.label}</Link>
      ))
    }
  </nav>
}

function HeaderRightContent() {
  return <div className="flex lg:items-center lg:flex-row flex-col gap-4">
    <Button variant='outline' size='icon'>
      <ShoopingCart className='w-6 h-6' />
      <span className='sr-only'>User cart</span>
    </Button>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='bg-black'>
          <AvatarFallback className='bg-black text-white font-extrabold'>
            SM
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
    </DropdownMenu>
  </div>
}

const ShoppingHeader = () => {

  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
        <HousePlug className="h-6 w-6" />
        <span className="font-bold">Ecommerce</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className="w-full max-w-xs">
            <MenuItems />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>
          {
            isAuthenticated ? <div>
              <HeaderRightContent />
            </div> : null
          }
        
      </div>
    </header>
  )
}

export default ShoppingHeader
