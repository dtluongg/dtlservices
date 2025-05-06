import React from 'react'
import Banner from '../../component/Banner/Banner'
import './LaptopService.css'
const LaptopService = () => {
  const images = [
    process.env.PUBLIC_URL + "/images/laptop/acer1.jpg",
    process.env.PUBLIC_URL + "/images/laptop/dell1.jpg",
    process.env.PUBLIC_URL + "/images/laptop/hp1.jpg",
    process.env.PUBLIC_URL + "/images/laptop/laptop1.jpg",
    process.env.PUBLIC_URL + "/images/laptop/laptop2.jpg",
    process.env.PUBLIC_URL + "/images/laptop/laptop3.jpg"
  ];
  return (
    <div className='laptop-service'>
        <h2>Dịch vụ Mua bán laptop , nâng cấp & sửa chữa laptop rẻ nhất mọi nơi</h2>
        <Banner images={images} />
    </div>
  )
}

export default LaptopService