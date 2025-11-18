import React from 'react'
import MenuCard from './MenuCard'

const menuItems = [
  {
    id: 1,
    name: 'Espresso',
    price: '$3.50',
    category: 'Hot',
    img: 'https://i.ibb.co.com/ds5JXxBc/9.jpg',
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: '$4.50',
    category: 'Hot',
    img: 'https://i.ibb.co.com/sv0mZZRv/7.jpg',
  },
  {
    id: 3,
    name: 'Latte',
    price: '$4.75',
    category: 'Hot',
    img: 'https://i.ibb.co.com/992MzYmY/6.jpg',
  },
  {
    id: 4,
    name: 'Iced Coffee',
    price: '$3.75',
    category: 'Cold',
    img: 'https://i.ibb.co.com/Mkvyd9vk/5.jpg',
  },
  {
    id: 5,
    name: 'Mocha',
    price: '$5.00',
    category: 'Hot',
    img: 'https://i.ibb.co.com/27Q2jTwn/4.jpg',
  },
  {
    id: 6,
    name: 'Americano',
    price: '$3.25',
    category: 'Hot',
    img: 'https://i.ibb.co.com/mC0N1zrH/3.jpg',
  },
  {
    id: 7,
    name: 'Cold Brew',
    price: '$4.25',
    category: 'Cold',
    img: 'https://i.ibb.co.com/KcWhspLh/2.jpg',
  },
  {
    id: 8,
    name: 'Frappuccino',
    price: '$5.50',
    category: 'Cold',
    img: 'https://i.ibb.co.com/ksh4wVm5/1.jpg',
  },
]

export default function MenuSection() {
  return (
    <section id="menu">
      <h2 className="text-3xl font-extrabold mb-6">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
