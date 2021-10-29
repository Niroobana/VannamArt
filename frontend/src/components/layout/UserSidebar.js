import React from 'react'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
    return (

          <div class="sidebar-wrapper">
              <nav id="sidebar">
                  <ul class="list-unstyled components">
                  <li>
                      <a href="#"><i class="fas fa-tachometer-alt"></i> Categories</a>
                  </li>
                  <li>
                    
                    <a href="#"><i class="fas fa-shopping-basket"></i> Pencil Drawings</a>
                </li>

                <li>
                    <a href="#"><i class="fas fa-shopping-basket"></i> Oil Paintings</a>
                </li>

                <li>
                    <a href="#"><i class="fas fa-users"></i> Mandala Art</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-users"></i> Water Coloring</a>
              </li>
              <li>
                <a href="#"><i class="fas fa-users"></i> Copper Works</a>
            </li>
          
              </ul>
             


              <ul class="list-unstyled components">
                <li>
                    <a href="#"><i class="fas fa-tachometer-alt"></i> Artists</a>
                </li>
        
                <li>
                    
                    <a href="#"><i class="fas fa-shopping-basket"></i> Inosha</a>
                </li>

                <li>
                    <a href="#"><i class="fas fa-shopping-basket"></i> Sarangi</a>
                </li>

                <li>
                    <a href="#"><i class="fas fa-users"></i> Vithun</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-users"></i> Kabilan</a>
              </li>
              <li>
                <a href="#"><i class="fas fa-users"></i> Afrose</a>
            </li>
        
            </ul>
              </nav>
 </div> 
 )
}
      export default UserSidebar