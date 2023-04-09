import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const { themeState } = useContextGlobal()
  return (
    <footer style={{ background: themeState.background, colorf: themeState.colorf }}>
      <p>Powered by</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
    
    <img src="./images/DH.png" alt='DH-logo' width={200} style={{ marginRight: '10px' }} />
    <img src="./images/ico-whatsapp.png" alt="whatsapp" width={35} style={{ marginRight: '10px' }} />
    <img src="./images/ico-facebook.png" alt="facebook" width={35} style={{ marginRight: '10px' }} />
    <img src="./images/ico-whatsapp.png" alt="whatsapp" width={35} style={{ marginRight: '10px' }} />
    <img src="./images/ico-instagram.png" alt="instagram" width={35} style={{ marginRight: '10px' }} />
    <img src="./images/ico-tiktok.png" alt="tiktok" width={35} />
</div>
    </footer>
  )
}

export default Footer
