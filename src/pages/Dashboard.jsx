import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Nav from './../components/Nav';
import Footer from './../components/Footer';
import axios from 'axios';
import { path } from './../path';
import { useToasts } from 'react-toast-notifications';
// import { Ripple } from "react-css-spinner";
import { Ripple } from 'react-css-spinners';

import Sidebar from '../components/Sidebar';
import { setDashboard } from './../actions/dashboard';

function Dashboard() {
  const dispatch = useDispatch();
  const usersCountList = useSelector((state) => state.dashboard.usersCount);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const admins = useSelector((state) => state.admins.admins);

  React.useEffect(() => {
    dispatch(setDashboard());
  }, []);

  return (
    <div className='dashboard'>
      <div class='main-panel'>
        <Nav />

        <div class='content'>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div class='card card-stats'>
                  <div class='card-header card-header-warning card-header-icon'>
                    <div class='card-icon'>
                      <i class='material-icons'>content_copy</i>
                    </div>
                    <p class='card-category'>Total Workers</p>
                    <h3 class='card-title'>
                      {usersCountList && usersCountList.workers}
                    </h3>
                  </div>
                  <div class='card-footer'>
                    <div class='stats'>
                      <i class='material-icons'>date_range</i>
                      <a href='javascript:;'>this is total users count</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div class='card card-stats'>
                  <div class='card-header card-header-success card-header-icon'>
                    <div class='card-icon'>
                      <i class='material-icons'>store</i>
                    </div>
                    <p class='card-category' style={{ fontSize: 12 }}>
                      Total categories
                    </p>
                    <h3 class='card-title'>
                      {' '}
                      {usersCountList && usersCountList.categories}{' '}
                    </h3>
                  </div>
                  <div class='card-footer'>
                    <div class='stats' style={{ fontSize: 12 }}>
                      <i class='material-icons'>date_range</i> this is total
                      categories count
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div class='card card-stats'>
                  <div class='card-header card-header-danger card-header-icon'>
                    <div class='card-icon'>
                      <i class='material-icons'>info_outline</i>
                    </div>
                    <p class='card-category'>Total Admins</p>
                    <h3 class='card-title'>
                      {/* {productsCount}  */}
                      {usersCountList && usersCountList.admins}
                    </h3>
                  </div>
                  <div class='card-footer'>
                    <div class='stats'>
                      <i class='material-icons'>local_offer</i> this is total
                      admins count
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div class='card card-stats'>
                  <div class='card-header card-header-info card-header-icon'>
                    <div class='card-icon'>
                      <i class='fa fa-twitter'></i>
                    </div>
                    <p class='card-category'>User Requests</p>
                    <h3 class='card-title'>
                      {/* {servicesCount}  */}
                      {usersCountList && usersCountList.userRequests}
                    </h3>
                  </div>
                  <div class='card-footer'>
                    <div class='stats'>
                      <i class='material-icons'>update</i> this is total User
                      Requests
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col-lg-7 col-md-12'>
                <div class='card'>
                  <div class='card-header card-header-warning'>
                    <h4 class='card-title'>Admin Stats</h4>
                    <p class='card-category'></p>
                  </div>
                  <div class='card-body table-responsive'>
                    <table class='table table-hover'>
                      <thead class='text-warning'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                      </thead>
                      <tbody>
                        {admins &&
                          admins.map(
                            (admin, index) =>
                              index < 2 && (
                                <tr>
                                  <td> {index + 1} </td>
                                  <td>{admin.name}</td>
                                  <td>{admin.email}</td>
                                  <td>
                                    {new Date(
                                      parseInt(admin._id.substring(0, 8), 16) *
                                        1000
                                    ).toDateString()}
                                  </td>
                                </tr>
                              )
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
