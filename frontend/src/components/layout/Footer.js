import React, { Fragment } from 'react'

import '../../App.css';

const Footer = () => {
    return (
        <Fragment>
 <footer class="footer-distributed">

<div class="footer-left">
{/* <img src="images/logo1.png" /> */}
    <h3>About  <span>Vannam</span></h3>

    

    <p class="footer-company-name">© 2021  Vannam .</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
          <p><span>No 202,
             Inuvil</span>
            Jaffna</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>0774424294
</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:vannamlk700@gmail.com">vannamlk700@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About the company</span>
        The best Art platform.</p>
    <div class="footer-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>  |
        <a href="#"><i class="fa fa-twitter"></i></a>  |
        <a href="#"><i class="fa fa-instagram"></i></a>  |
        <a href="#"><i class="fa fa-linkedin"></i></a>  |
        <a href="#"><i class="fa fa-youtube"></i></a>
    </div>
</div>
<a href="https://wa.me/0094750558497" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
</footer>
        </Fragment>
    )
}

export default Footer