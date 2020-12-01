import React from 'react'

const Menu = () => {
    
    return(
        <>
            <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
            <aside className="app-sidebar doc-sidebar">
                <div className="app-sidebar__user clearfix">
                    <div className="dropdown user-pro-body">
                        <div>
                            <img src="../img/faces/male/25.jpg" alt="user-img" className="avatar avatar-lg brround"/>
                            <a href="editprofile.html" className="profile-img">
                                <span className="fa fa-pencil" aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className="user-info">
                            <h2>Rubin Carmody</h2>
                            <span>Web Designer</span>
                        </div>
                    </div>
                </div>
                <ul className="side-menu">
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-tachometer"></i><span className="side-menu__label">Dashboard</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li><a className="slide-item" href="index.html">Dashboard 1</a></li>
                            <li><a className="slide-item" href="index2.html">Dashboard 2</a></li>
                            <li><a className="slide-item" href="index3.html">Dashboard 3</a></li>
                            <li><a className="slide-item" href="index4.html">Dashboard 4</a></li>
                            <li><a className="slide-item" href="index5.html">Dashboard 5</a></li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-cogs"></i><span className="side-menu__label">Admin settings</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li><a className="slide-item" href="admin-pricing.html">Admin Pricing</a></li>
                            <li><a className="slide-item" href="Ads.html">Ads List</a></li>
                            <li><a className="slide-item" href="comments.html">Comments</a></li>
                            <li><a className="slide-item" href="email-users.html">Email-Users</a></li>
                            <li><a className="slide-item" href="media-gallery.html">Media Gallery</a></li>
                            <li><a className="slide-item" href="newad.html">New Ad</a></li>
                            <li><a className="slide-item" href="newuser.html">New User</a></li>
                            <li><a className="slide-item" href="favourite-ads.html">Favourite-Ads</a></li>
                            <li><a className="slide-item" href="payment-orders.html">Payment Orders</a></li>
                            <li><a className="slide-item" href="payments-adpacks.html">Payment Adpacks</a></li>
                            <li><a className="slide-item" href="payment-settings.html">Payment Settings</a></li>
                            <li><a className="slide-item" href="payments-membership.html">Payment Membership</a></li>
                            <li><a className="slide-item" href="profile-admin.html">Profile Admin</a></li>
                            <li><a className="slide-item" href="settings.html">Settings</a></li>
                            <li><a className="slide-item" href="users-all.html">All Users</a></li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-rocket"></i><span className="side-menu__label">Apps</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="cards.html" className="slide-item">Cards design</a>
                            </li>
                            <li>
                                <a href="chat2.html" className="slide-item">Default Chat</a>
                            </li>
                            <li>
                                <a href="notify.html" className="slide-item">Notifications</a>
                            </li>
                            <li>
                                <a href="email.html" className="slide-item">Email</a>
                            </li>
                            <li>
                                <a href="emailservice.html" className="slide-item">Email Inbox</a>
                            </li>
                            <li>
                                <a href="sweetalert.html" className="slide-item">Sweet alerts</a>
                            </li>
                            <li>
                                <a href="rangeslider.html" className="slide-item">Range slider</a>
                            </li>
                            <li>
                                <a href="scroll.html" className="slide-item">Content Scroll bar</a>
                            </li>
                            <li>
                                <a href="counters.html" className="slide-item">Counters</a>
                            </li>
                            <li>
                                <a href="loaders.html" className="slide-item">Loaders</a>
                            </li>
                            <li>
                                <a href="time-line.html" className="slide-item">Time Line</a>
                            </li>
                            <li>
                                <a href="rating.html" className="slide-item">Rating </a>
                            </li>
                            <li>
                                <a href="users-list.html" className="slide-item">User List</a>
                            </li>
                            <li>
                                <a href="search.html" className="slide-item">Search page</a>
                            </li>
                            <li>
                                <a href="crypto-currencies.html" className="slide-item">Crypto-currencies</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="side-menu__item" href="widgets.html"><i className="side-menu__icon fa fa-window-restore"></i><span className="side-menu__label">Widget</span></a>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-calendar"></i><span className="side-menu__label">Calendar</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="calendar.html" className="slide-item">Default calendar</a>
                            </li>
                            <li>
                                <a href="calendar2.html" className="slide-item">Full calendar</a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-bar-chart"></i><span className="side-menu__label">Charts</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="chart-chartist.html" className="slide-item">Chartjs Charts </a>
                            </li>
                            <li>
                                <a href="chart-dygraph.html" className="slide-item">Dygraph Charts</a>
                            </li>
                            <li>
                                <a href="chart-echart.html" className="slide-item">Echart Charts</a>
                            </li>
                            <li>
                                <a href="chart-flot.html" className="slide-item">Flot Charts</a>
                            </li>
                            <li>
                                <a href="chart-nvd3.html" className="slide-item">Nvd3 Charts</a>
                            </li>
                            <li>
                                <a href="sparklinechart.html" className="slide-item">Sparkline Chart</a>
                            </li>
                            <li>
                                <a href="chart-morris.html" className="slide-item">Morris Charts</a>
                            </li>
                            <li>
                                <a href="charts.html" className="slide-item">C3 Bar Charts</a>
                            </li>
                            <li>
                                <a href="chart-line.html" className="slide-item">C3 Line Charts</a>
                            </li>
                            <li>
                                <a href="chart-donut.html" className="slide-item">C3 Donut Charts</a>
                            </li>
                            <li>
                                <a href="chart-pie.html" className="slide-item">C3 Pie charts</a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-cubes"></i><span className="side-menu__label"> Elements</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="alerts.html" className="slide-item">Alerts</a>
                            </li>
                            <li>
                                <a href="buttons.html" className="slide-item">Buttons</a>
                            </li>
                            <li>
                                <a href="colors.html" className="slide-item">Colors</a>
                            </li>
                            <li>
                                <a href="avatars.html" className="slide-item">Avatar-Square</a>
                            </li>
                            <li>
                                <a href="avatar-round.html" className="slide-item">Avatar-Rounded</a>
                            </li>
                            <li>
                                <a href="avatar-radius.html" className="slide-item">Avatar-Radius</a>
                            </li>
                            <li>
                                <a href="dropdown.html" className="slide-item">Drop downs</a>
                            </li>
                            <li>
                                <a href="thumbnails.html" className="slide-item">Thumbnails</a>
                            </li>
                            <li>
                                <a href="mediaobject.html" className="slide-item">Media Object</a>
                            </li>
                            <li>
                                <a href="list.html" className="slide-item">List</a>
                            </li>
                            <li>
                                <a href="tags.html" className="slide-item">Tags</a>
                            </li>
                            <li>
                                <a href="pagination.html" className="slide-item">Pagination</a>
                            </li>
                            <li>
                                <a href="navigation.html" className="slide-item">Navigation</a>
                            </li>
                            <li>
                                <a href="typography.html" className="slide-item">Typography</a>
                            </li>
                            <li>
                                <a href="breadcrumbs.html" className="slide-item">Breadcrumbs</a>
                            </li>
                            <li>
                                <a href="badge.html" className="slide-item">Badges</a>
                            </li>
                            <li>
                                <a href="jumbotron.html" className="slide-item">Jumbotron</a>
                            </li>
                            <li>
                                <a href="panels.html" className="slide-item">Panels</a>
                            </li>
                            <li>
                                <a href="modal.html" className="slide-item">Modal</a>
                            </li>
                            <li>
                                <a href="tooltipandpopover.html" className="slide-item">Tooltip and popover</a>
                            </li>
                            <li>
                                <a href="progress.html" className="slide-item">Progress</a>
                            </li>
                            <li>
                                <a href="carousel.html" className="slide-item">Carousels</a>
                            </li>
                            <li>
                                <a href="Accordion.html" className="slide-item">Accordions</a>
                            </li>
                            <li>
                                <a href="tabs.html" className="slide-item">Tabs</a>
                            </li>
                            <li>
                                <a href="headers.html" className="slide-item">Headers</a>
                            </li>
                            <li>
                                <a href="footers.html" className="slide-item">Footers</a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-th-large"></i><span className="side-menu__label">Forms</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="form-elements.html" className="slide-item">Form Elements</a>
                            </li>
                            <li>
                                <a href="form-wizard.html" className="slide-item">Form-wizard Elements</a>
                            </li>
                            <li>
                                <a href="wysiwyag.html" className="slide-item">Text Editor</a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-table"></i><span className="side-menu__label">Tables</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="tables.html" className="slide-item">Default table</a>
                            </li>
                            <li>
                                <a href="datatable.html" className="slide-item">Data Table</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="side-menu__item" href="maps.html"><i className="side-menu__icon fa fa-map-marker"></i><span className="side-menu__label"> Maps</span></a>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-codepen"></i><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="icons.html" className="slide-item">Font Awesome</a>
                            </li>
                            <li>
                                <a href="icons2.html" className="slide-item">Material Design Icons</a>
                            </li>
                            <li>
                                <a href="icons3.html" className="slide-item">Simple Line Iocns</a>
                            </li>
                            <li>
                                <a href="icons4.html" className="slide-item">Feather Icons</a>
                            </li>
                            <li>
                                <a href="icons5.html" className="slide-item">Ionic Icons</a>
                            </li>
                            <li>
                                <a href="icons6.html" className="slide-item">Flag Icons</a>
                            </li>
                            <li>
                                <a href="icons7.html" className="slide-item">pe7 Icons</a>
                            </li>
                            <li>
                                <a href="icons8.html" className="slide-item">Themify Icons</a>
                            </li>
                            <li>
                                <a href="icons9.html" className="slide-item">Typicons Icons</a>
                            </li>
                            <li>
                                <a href="icons10.html" className="slide-item">Weather Icons</a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-database"></i><span className="side-menu__label">Pages</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="profile1.html" className="slide-item">Profile</a>
                            </li>
                            <li>
                                <a href="editprofile1.html" className="slide-item">Edit Profile</a>
                            </li>
                            <li>
                                <a href="gallery.html" className="slide-item">Gallery</a>
                            </li>
                            <li>
                                <a href="about.html" className="slide-item">About Company</a>
                            </li>
                            <li>
                                <a href="company-history.html" className="slide-item">Company History</a>
                            </li>
                            <li>
                                <a href="services.html" className="slide-item">Services</a>
                            </li>
                            <li>
                                <a href="faq.html" className="slide-item">FAQS</a>
                            </li>
                            <li>
                                <a href="terms.html" className="slide-item">Terms and Conditions</a>
                            </li>
                            <li>
                                <a href="empty.html" className="slide-item">Empty Page</a>
                            </li>
                            <li>
                                <a href="construction.html" className="slide-item">Under Construction</a>
                            </li>
                            <li>
                                <a href="blog.html" className="slide-item">Blog</a>
                            </li>
                            <li>
                                <a href="invoice.html" className="slide-item">Invoice</a>
                            </li>
                            <li>
                                <a href="pricing.html" className="slide-item">Pricing Tables</a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-shopping-cart"></i><span className="side-menu__label">E-commerce</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="shop.html" className="slide-item">Products</a>
                            </li>
                            <li>
                                <a href="shop-des.html" className="slide-item">Product Details</a>
                            </li>
                            <li>
                                <a href="cart.html" className="slide-item">Shopping Cart</a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-chain-broken"></i><span className="side-menu__label">Custom  Pages</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="login.html" className="slide-item">Login</a>
                            </li>
                            <li>
                                <a href="register.html" className="slide-item">Register</a>
                            </li>
                            <li>
                                <a href="forgot-password.html" className="slide-item">Forgot password</a>
                            </li>
                            <li>
                                <a href="lockscreen.html" className="slide-item">Lock screen</a>
                            </li>
                        </ul>
                    </li>
                    <li className="slide">
                        <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-diamond"></i><span className="side-menu__label">Error pages</span><i className="angle fa fa-angle-right"></i></a>
                        <ul className="slide-menu">
                            <li>
                                <a href="400.html" className="slide-item">400 Error</a>
                            </li>
                            <li>
                                <a href="401.html" className="slide-item">401 Error</a>
                            </li>
                            <li>
                                <a href="403.html" className="slide-item">403 Error</a>
                            </li>
                            <li>
                                <a href="404.html" className="slide-item">404 Error</a>
                            </li>
                            <li>
                                <a href="500.html" className="slide-item">500 Error</a>
                            </li>
                            <li>
                                <a href="503.html" className="slide-item">503 Error</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="app-sidebar-footer">
                    <a href="emailservices.html">
                        <span className="fa fa-envelope" aria-hidden="true"></span>
                    </a>
                    <a href="profile.html">
                        <span className="fa fa-user" aria-hidden="true"></span>
                    </a>
                    <a href="editprofile.html">
                        <span className="fa fa-cog" aria-hidden="true"></span>
                    </a>
                    <a href="/controlPanel">
                        <span className="fa fa-sign-in" aria-hidden="true"></span>
                        </a>
                    <a href="chat.html">
                        <span className="fa fa-comment" aria-hidden="true"></span>
                    </a>
                </div>
            </aside>
        </>
    );
}

export default Menu;