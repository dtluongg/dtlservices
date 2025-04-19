import React from 'react'
import './ServiceOption.css'
// ram, ssd, pin, màn hình, cục sạc, cài win + office 
const ServiceOption = () => {
  return (
    <div className='service_option' id="service-option">
        <h2>Laptop của bạn đang cần nâng cấp gì?</h2>
        <div className='service_option_list'>
            <div className='service_option_item'>
                <img src={`${process.env.PUBLIC_URL}/images/services/upgrade_laptop/ram_services.jpg`} alt="Laptop" />
                <h3>RAM Laptop - PC chỉ từ 250k cho 4GB</h3>
                <p>Tăng dung lượng RAM để tăng tốc độ xử lý và tăng khả năng đa nhiệm nhiều tab.</p>
            </div>
            <div className='service_option_item'>
                <img src={`${process.env.PUBLIC_URL}/images/services/upgrade_laptop/disk_services.jpg`} alt="Laptop" />
                <h3>SSD 2.5, NVME chỉ từ 350k cho 120GB</h3>
                <p>Tăng dung lượng ổ đĩa để tăng khả năng lưu trữ cho máy của bạn.</p>
            </div>
            <div className='service_option_item'>
                <img src={`${process.env.PUBLIC_URL}/images/services/upgrade_laptop/laptop.jpeg`} alt="Laptop" />
                <h3>Vệ sinh laptop - PC chỉ từ 100k</h3>
                <p>Vệ sinh máy của bạn định kỳ để máy hoạt động ổn định và mượt mà hơn.</p>
            </div>
            <div className='service_option_item'>
                <img src={`${process.env.PUBLIC_URL}/images/services/upgrade_laptop/linhkien.jpg`} alt="Laptop" />
                <h3>Sạc laptop, bàn phím, màn hình</h3>
                <p>Hỗ trợ chỉ chỗ mua link kiện giá rẻ nhất.</p>
            </div>
            <div className='service_option_item'>
                <img src={`${process.env.PUBLIC_URL}/images/services/upgrade_laptop/caiwin.png`} alt="Laptop" />
                <h3>Cài đặt window + office chỉ từ 100k</h3>
                <p>Đưa máy trở về trạng thái như mới mua và bộ office làm việc văn phòng vình viễn.</p>
            </div>
            
        </div>
    </div>
  )
}

export default ServiceOption