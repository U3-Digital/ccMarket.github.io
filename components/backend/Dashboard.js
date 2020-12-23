import React from 'react';
import dashboard from '../../pages/controlPanel/dashboard';

const Dashboard = () => {
    return(
        <>
        <div className="container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-6">
                  <h3>
                     Default</h3>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html"><i data-feather="home"></i></a></li>
                    <li className="breadcrumb-item">Dashboard</li>
                  </ol>
                </div>
                <div className="col-6">
                  <div className="bookmark pull-right">
                    <ul>
                      <li><a href="#" data-container="body" data-toggle="popover" data-placement="top" title="" data-original-title="Chat"><i data-feather="message-square"></i></a></li>
                      <li><a href="#" data-container="body" data-toggle="popover" data-placement="top" title="" data-original-title="Icons"><i data-feather="command"></i></a></li>
                      <li><a href="#" data-container="body" data-toggle="popover" data-placement="top" title="" data-original-title="Learning"><i data-feather="layers"></i></a></li>
                      <li><a href="#"><i className="bookmark-search" data-feather="star"></i></a>
                        <form className="form-inline search-form" action="#" method="get">
                          <div className="form-group form-control-search">
                            <div className="Typeahead Typeahead--twitterUsers">
                              <div className="u-posRelative">
                                <input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search.." name="q" title="" autoFocus />
                                <div className="spinner-border Typeahead-spinner" role="status"><span className="sr-only">Loading...</span></div>
                              </div>
                              <div className="Typeahead-menu"></div>
                              <script id="result-template" type="text/x-handlebars-template">
                                <div className="ProfileCard u-cf">                        
                                <div className="ProfileCard-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay m-0"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></div>
                                <div className="ProfileCard-details">
                                <div className="ProfileCard-realName">name</div>
                                </div>
                                </div>
                              </script>
                              <script id="empty-template" type="text/x-handlebars-template"><div className="EmptyMessage">Your search turned up 0 results. This most likely means the backend is down, yikes!</div></script>
                            </div>
                          </div>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row second-chart-list third-news-update">
              <div className="col-xl-4 col-lg-12 xl-50 morning-sec box-col-12">
                <div className="card o-hidden profile-greeting">
                  <div className="card-body">
                    <div className="media">
                      <div className="badge-groups w-100">
                        <div className="badge f-12"><i className="mr-1" data-feather="clock"></i><span id="txt"></span></div>
                        <div className="badge f-12"><i className="fa fa-spin fa-cog f-14"></i></div>
                      </div>
                    </div>
                    <div className="greeting-user text-center">
                      <div className="profile-vector"><img className="img-fluid" src="../backend/assets/images/dashboard/welcome.png" alt=""/></div>
                      <h4 className="f-w-600"><span id="greeting">Good Morning</span> <span className="right-circle"><i className="fa fa-check-circle f-14 middle"></i></span></h4>
                      <p><span> You have done 57.6% more sales today. Check your new badge in your profile.</span></p>
                      <div className="whatsnew-btn"><a className="btn btn-primary">Whats New !</a></div>
                      <div className="left-icon"><i className="fa fa-bell"> </i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 xl-100 dashboard-sec box-col-12">
                <div className="card earning-card">
                  <div className="card-body p-0">
                    <div className="row m-0">
                      <div className="col-xl-3 earning-content p-0">
                        <div className="row m-0 chart-left">
                          <div className="col-xl-12 p-0 left_side_earning">
                            <h5>Dashboard</h5>
                            <p className="font-roboto">Overview of last month</p>
                          </div>
                          <div className="col-xl-12 p-0 left_side_earning">
                            <h5>$4055.56 </h5>
                            <p className="font-roboto">This Month Earning</p>
                          </div>
                          <div className="col-xl-12 p-0 left_side_earning">
                            <h5>$1004.11</h5>
                            <p className="font-roboto">This Month Profit</p>
                          </div>
                          <div className="col-xl-12 p-0 left_side_earning">
                            <h5>90%</h5>
                            <p className="font-roboto">This Month Sale</p>
                          </div>
                          <div className="col-xl-12 p-0 left-btn"><a className="btn btn-gradient">Summary</a></div>
                        </div>
                      </div>
                      <div className="col-xl-9 p-0">
                        <div className="chart-right">
                          <div className="row m-0 p-tb">
                            <div className="col-xl-8 col-md-8 col-sm-8 col-12 p-0">
                              <div className="inner-top-left">
                                <ul className="d-flex list-unstyled">
                                  <li>Daily</li>
                                  <li className="active">Weekly</li>
                                  <li>Monthly</li>
                                  <li>Yearly</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-4 col-12 p-0 justify-content-end">
                              <div className="inner-top-right">
                                <ul className="d-flex list-unstyled justify-content-end">
                                  <li>Online</li>
                                  <li>Store</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="card-body p-0">
                                <div className="current-sale-container">
                                  <div id="chart-currently"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row border-top m-0">
                          <div className="col-xl-4 pl-0 col-md-6 col-sm-6">
                            <div className="media p-0">
                              <div className="media-left"><i className="icofont icofont-crown"></i></div>
                              <div className="media-body">
                                <h6>Referral Earning</h6>
                                <p>$5,000.20</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6 col-sm-6">
                            <div className="media p-0">
                              <div className="media-left bg-secondary"><i className="icofont icofont-heart-alt"></i></div>
                              <div className="media-body">
                                <h6>Cash Balance</h6>
                                <p>$2,657.21</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-12 pr-0">
                            <div className="media p-0">
                              <div className="media-left"><i className="icofont icofont-cur-dollar"></i></div>
                              <div className="media-body">
                                <h6>Sales forcasting</h6>
                                <p>$9,478.50     </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 xl-100 chart_data_left box-col-12">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="row m-0 chart-main">
                      <div className="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                        <div className="media align-items-center">
                          <div className="hospital-small-chart">
                            <div className="small-bar">
                              <div className="small-chart flot-chart-container"></div>
                            </div>
                          </div>
                          <div className="media-body">
                            <div className="right-chart-content">
                              <h4>1001</h4><span>purchase </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                        <div className="media align-items-center">
                          <div className="hospital-small-chart">
                            <div className="small-bar">
                              <div className="small-chart1 flot-chart-container"></div>
                            </div>
                          </div>
                          <div className="media-body">
                            <div className="right-chart-content">
                              <h4>1005</h4><span>Sales</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                        <div className="media align-items-center">
                          <div className="hospital-small-chart">
                            <div className="small-bar">
                              <div className="small-chart2 flot-chart-container"></div>
                            </div>
                          </div>
                          <div className="media-body">
                            <div className="right-chart-content">
                              <h4>100</h4><span>Sales return</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                        <div className="media border-none align-items-center">
                          <div className="hospital-small-chart">
                            <div className="small-bar">
                              <div className="small-chart3 flot-chart-container"></div>
                            </div>
                          </div>
                          <div className="media-body">
                            <div className="right-chart-content">
                              <h4>101</h4><span>Purchase ret</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 xl-50 chart_data_right box-col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content">
                        <h4>$95,900<span className="new-box">Hot</span></h4><span>Purchase Order Value</span>
                      </div>
                      <div className="knob-block text-center">
                        <input className="knob1" data-width="10" data-height="70" data-thickness=".3" data-angleoffset="0" data-linecap="round" data-fgcolor="#7366ff" data-bgcolor="#eef5fb" value="60" readOnly/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 xl-50 chart_data_right second d-none"> 
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content"> 
                        <h4>$95,000<span className="new-box">New</span></h4><span>Product Order Value</span>
                      </div>
                      <div className="knob-block text-center">
                        <input className="knob1" data-width="50" data-height="70" data-thickness=".3" data-fgcolor="#7366ff" data-linecap="round" data-angleoffset="0" value="60" readOnly/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50 news box-col-6">
                <div className="card">
                  <div className="card-header">
                    <div className="header-top">
                      <h5 className="m-0">News & Update</h5>
                      <div className="card-header-right-icon">
                        <select className="button btn btn-primary">
                          <option>Today</option>
                          <option>Tomorrow</option>
                          <option>Yesterday</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="news-update">
                      <h6>36% off For pixel lights Couslations Types.</h6><span>Lorem Ipsum is simply dummy...</span>
                    </div>
                    <div className="news-update">
                      <h6>We are produce new product this</h6><span> Lorem Ipsum is simply text of the printing... </span>
                    </div>
                    <div className="news-update">
                      <h6>50% off For COVID Couslations Types.</h6><span>Lorem Ipsum is simply dummy...</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="bottom-btn"><a href="#">More...</a></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50 appointment-sec box-col-6">
                <div className="row"> 
                  <div className="col-xl-12 appointment">
                    <div className="card">
                      <div className="card-header card-no-border">
                        <div className="header-top">
                          <h5 className="m-0">appointment</h5>
                          <div className="card-header-right-icon">
                            <select className="button btn btn-primary">
                              <option>Today</option>
                              <option>Tomorrow</option>
                              <option>Yesterday</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="appointment-table table-responsive">
                          <table className="table table-bordernone">
                            <tbody>
                              <tr>
                                <td><img className="img-fluid img-40 rounded-circle mb-3" src="../backend/assets/images/appointment/app-ent.jpg" alt="Image description"/>
                                  <div className="status-circle bg-primary"></div>
                                </td>
                                <td className="img-content-box"><span className="d-block">Venter Loren</span><span className="font-roboto">Now</span></td>
                                <td>
                                  <p className="m-0 font-primary">28 Sept</p>
                                </td>
                                <td className="text-right">
                                  <div className="button btn btn-primary">Done<i className="fa fa-check-circle ml-2"></i></div>
                                </td>
                              </tr>
                              <tr>
                                <td><img className="img-fluid img-40 rounded-circle" src="../backend/assets/images/appointment/app-ent.jpg" alt="Image description"/>
                                  <div className="status-circle bg-primary"></div>
                                </td>
                                <td className="img-content-box"><span className="d-block">John Loren</span><span className="font-roboto">11:00</span></td>
                                <td>
                                  <p className="m-0 font-primary">22 Sept</p>
                                </td>
                                <td className="text-right">
                                  <div className="button btn btn-danger">Pending<i className="fa fa-check-circle ml-2"></i></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 alert-sec">
                    <div className="card bg-img">
                      <div className="card-header">
                        <div className="header-top">
                          <h5 className="m-0">Alert  </h5>
                          <div className="dot-right-icon"><i className="fa fa-ellipsis-h"></i></div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="body-bottom">
                          <h6>  10% off For drama lights Couslations...</h6><span className="font-roboto">Lorem Ipsum is simply dummy...It is a long established fact that a reader will be distracted by  </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50 notification box-col-6">
                <div className="card">
                  <div className="card-header card-no-border">
                    <div className="header-top">
                      <h5 className="m-0">notification</h5>
                      <div className="card-header-right-icon">
                        <select className="button btn btn-primary">
                          <option>Today</option>
                          <option>Tomorrow</option>
                          <option>Yesterday</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="media">
                      <div className="media-body">
                        <p>20-04-2020 <span>10:10</span></p>
                        <h6>Updated Product<span className="dot-notification"></span></h6><span>Quisque a consequat ante sit amet magna...</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <p>20-04-2020<span className="pl-1">Today</span><span className="badge badge-secondary">New</span></p>
                        <h6>Tello just like your product<span className="dot-notification"></span></h6><span>Quisque a consequat ante sit amet magna... </span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <div className="d-flex mb-3">
                          <div className="inner-img"><img className="img-fluid" src="../backend/assets/images/notification/1.jpg" alt="Product-1"/></div>
                          <div className="inner-img"><img className="img-fluid" src="../backend/assets/images/notification/2.jpg" alt="Product-2"/></div>
                        </div><span className="mt-3">Quisque a consequat ante sit amet magna...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50 appointment box-col-6">
                <div className="card">
                  <div className="card-header">
                    <div className="header-top">
                      <h5 className="m-0">Market Value</h5>
                      <div className="card-header-right-icon">
                        <select className="button btn btn-primary">
                          <option>Year</option>
                          <option>Month</option>
                          <option>Day</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-Body">
                    <div className="radar-chart">
                      <div id="marketchart">       </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-100 chat-sec box-col-6">
                <div className="card chat-default">
                  <div className="card-header card-no-border">
                    <div className="media media-dashboard">
                      <div className="media-body"> 
                        <h5 className="mb-0">Chat</h5>
                      </div>
                      <div className="icon-box"><i className="fa fa-ellipsis-h"></i></div>
                    </div>
                  </div>
                  <div className="card-body chat-box">
                    <div className="chat">
                      <div className="media left-side-chat">
                        <div className="media-body d-flex">
                          <div className="img-profile"> <img className="img-fluid" src="../backend/assets/images/User.jpg" alt="Profile"/></div>
                          <div className="main-chat">
                            <div className="message-main"><span className="mb-0">Hi deo, Please send me link.</span></div>
                            <div className="sub-message message-main"><span className="mb-0">Right Now</span></div>
                          </div>
                        </div>
                        <p className="f-w-400">7:28 PM</p>
                      </div>
                      <div className="media right-side-chat">
                        <p className="f-w-400">7:28 PM</p>
                        <div className="media-body text-right">
                          <div className="message-main pull-right"><span className="mb-0 text-left">How can do for you</span>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div className="media left-side-chat">
                        <div className="media-body d-flex">
                          <div className="img-profile"> <img className="img-fluid" src="../backend/assets/images/User.jpg" alt="Profile"/></div>
                          <div className="main-chat">
                            <div className="sub-message message-main mt-0"><span>It's argenty</span></div>
                          </div>
                        </div>
                        <p className="f-w-400">7:28 PM</p>
                      </div>
                      <div className="media right-side-chat">
                        <div className="media-body text-right">
                          <div className="message-main pull-right"><span className="loader-span mb-0 text-left" id="wave"><span className="dot"></span><span className="dot"></span><span className="dot"></span></span></div>
                        </div>
                      </div>
                      <div className="input-group">
                        <input className="form-control" id="mail" type="text" placeholder="Type Your Message..." name="text"/>
                        <div className="send-msg"><i data-feather="send"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 xl-50 calendar-sec box-col-6">
                <div className="card gradient-primary o-hidden">
                  <div className="card-body">
                    <div className="setting-dot">
                      <div className="setting-bg-primary date-picker-setting position-set pull-right"><i className="fa fa-spin fa-cog"></i></div>
                    </div>
                    <div className="default-datepicker">
                      <div className="datepicker-here" data-language="en"></div>
                    </div><span className="default-dots-stay overview-dots full-width-dots"><span className="dots-group"><span className="dots dots1"></span><span className="dots dots2 dot-small"></span><span className="dots dots3 dot-small"></span><span className="dots dots4 dot-medium"></span><span className="dots dots5 dot-small"></span><span className="dots dots6 dot-small"></span><span className="dots dots7 dot-small-semi"></span><span className="dots dots8 dot-small-semi"></span><span className="dots dots9 dot-small">                </span></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Dashboard;