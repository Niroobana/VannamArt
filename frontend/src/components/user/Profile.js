import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Your Profile'} />

                   
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                        <div className="about_img">
              <img src="images/h2.jpeg" alt="img" />
          </div>
                           
                        </div>
                       
                        <div className="col-12 col-md-5 pro" >
                        <h1 className="mt-5 ml-5 file h">My Profile</h1>
                            <h4>Full Name :  {user.name} </h4>
                           
                            <h4>Email Address :  {user.email}</h4>
                            

                            <h4>Joined On : {String(user.createdAt).substring(0, 10)}</h4>
                           

                            {user.role !== 'admin' && (
                                <Link to="/orders/me" className="btn btn-danger btn-block mt-5 ord">
                                    My Orders
                                </Link>
                            )}

                            <Link to="/password/update" className="btn btn-primary btn-block mt-3 pass">
                                Change Password
                            </Link>
                            <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-3">
                                Edit Profile
                            </Link>
                        </div>
                        
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Profile