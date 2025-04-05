import React from 'react'
import { Link } from 'react-router-dom'
import './Social.css'
import SocialList from '../../data/social.json'

const Social = () => {
  const { social } = SocialList;
  return (
    <div className='social'>
      <h2>Hãy liên kết với em Lượng qua mạng xã hội</h2>
      <div className='social-list'>
        {social.map((item) => (
          <div key={item.id} className='social-item'>
            <Link to={item.link} target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + item.icon} alt={item.name} />
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Social