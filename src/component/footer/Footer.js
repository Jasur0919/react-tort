import React from 'react'
import './Footer.css'
import Logo from '../../assent/images/LOGO.svg'
import Ins from '../../assent/images/footer-instagram.svg'
import Face from '../../assent/images/footer-facebook.svg'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer_box">
                <div className="footer_text">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer_text">
                    <p>Каталог</p>
                    <p>о компании</p>
                    <p>Индивидуальная </p>
                    <p>Партнерам</p>
                </div>
                <div className="footer_text">
                   <p>2D, 3D модели</p>
                   <p>Шоу-румы</p>
                   <p>Дилерам</p>
                   <p>Контакты</p>
                   <p>Конфигуратор</p>
                </div>
                <div className="footer_text">
                   <span><img src={Ins} alt="" />
                   <img src={Face} alt="" /></span>
                   <p>+38 (099)-638-45-37</p>
                   <div className="input">
                    <input type="text" placeholder='Персональная консультация' />
                    
                   </div>
                </div>

            </div>

            <div className="footer_bot">
                <p>© 1993–2021 Интернет-магазин «LOGO» — truck</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
