//import React, { Fragment } from 'react'
import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import MetaData from './layout/MetaData'
import Loader from './layout/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Product from './product/Product'
// import ProductDetails from './product/ProductDetails'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

import UserSidebar from './layout/UserSidebar'

import About from './layout/About'
import { useAlert } from 'react-alert';

// import '../../App.css';
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = ({match}) => {
//     const [price, setPrice] = useState([1, 10000])
//     const [category, setCategory] = useState('')
//     const [artist, setArtist] = useState('')
//     const [rating, setRating] = useState(0)
//     const categories = [
//         'Pencil sketch',
//         'Oil painting',
//         'Water colour painting',
//         'Mandela Art',
//         'Modern Art',
//         "Copper Art",
//         'Acrylic',
//         'Abstract'
        
//     ]
//     const artists = [
//       'Inosha',
//       'Kishon',
//       'Ratheena',
//       'Vithun',
//       'Kabilan',
//       'Thuvaraka',
//       "Afrose",
//       'Sharmila',
//       'Sarvesh',
      
//       'Karuna'
      
//   ]
  const [currentPage, setCurrentPage] = useState(1)


   const alert = useAlert();
    const dispatch = useDispatch();

    const {  products, error, productsCount, resPerPage,loading } = useSelector(state => state.products)

    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts(keyword, currentPage
            ));


    }, [dispatch, alert, error, keyword, currentPage
    ])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }
    return (
        <Fragment>
        {loading ? <Loader /> : (

            <Fragment>
                <MetaData title={'Buy Best Arts '}/>
                <div className="row">

                <div class="line" >
                </div>
    <div class="col-md-6 offset-md-6">
      <div class="location_icon_bottum">
          <ul>
              <li><img src="icon/call.png" />0774424294</li>
              <li><img src="icon/email.png" />vannamlk700@gmail.com</li>
              <li><img src="icon/loc.png" />Location</li>
          </ul>
    
  </div>
</div>

</div>

    <div className="row">
      <div className="col-2">
         <UserSidebar />
      </div>
      
      <div className="col-10">

       <h1 id="products_heading">Recent Works</h1>

<section id="products" class="container mt-5">
<div className="row">
       

    {products && products.map(product => (
      <Product key={product._id} product={product} />
    ))}
    
   
    
 </div>
 <div class="col-md-12">
          <a class="read-more">See More</a>
      </div>
     
      
</section> 
 {/* {resPerPage <= count && ( */}
  <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div> 

                    
</div>
</div>

<div class="line" >
                </div>
<div className="about">
      <div className="container">
           <About />
      </div>
      </div>

</Fragment>
        )
 }
</Fragment>

        
    )
}


export default Home