import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='footer'>
            <div className="footer_left">
                <h3>Liên hệ với em Lượng để được tư vấn, hỗ trợ nhiệt tình</h3>
                <p>Địa chỉ trường học: 12 Nguyễn Văn Bảo, P. 1, Q. Gò Vấp, Hồ Chí Minh</p>
                <p>Địa chỉ nhà: 1423/218 khu phố Vườn Dừa, P. Phước Tân, TP. Biên Hoà, Đồng Nai</p>
                <p>Điện thoại: 0379.499.255</p>
                <p>Điện thoại: 0559.599.255</p>
                <p>Email: dotienluong1402@gmail.com</p>
            </div>
            <div className="footer_right">  
                <h3>Gửi tin nhắn email cho em Lượng nếu như không tiện gọi điện</h3>
                <form action="">
                    <input type="text" placeholder='Tên' />
                    <input type="email" placeholder='Email' />
                    <textarea name="" id="" placeholder='Nội dung'></textarea>
                    <button type='submit'>Gửi</button>
                </form>
            </div>
        </div>
        <div className="copy_right">
            <p>Copyright © 2025 DTL Services. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer