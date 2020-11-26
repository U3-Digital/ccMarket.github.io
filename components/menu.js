import React from 'react';

const Menu = () => {
    return(
		<div className="header-main">
			<div className="top-bar">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8 col-sm-4 col-7">
							<div className="top-bar-left d-flex">
								<div className="clearfix">
									<ul className="socials">
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-facebook"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-twitter"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-linkedin"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-google-plus"></i></a>
										</li>
									</ul>
								</div>
								<div className="clearfix">
									<ul className="contact border-left">
										<li className="mr-5 d-lg-none">
											<a href="#" className="callnumber text-dark"><span><i className="fa fa-phone mr-1"></i>: +425 345 8765</span></a>
										</li>
										<li className="select-country mr-5">
											<select className="form-control select2-flag-search" data-placeholder="Select Country">
												<option value="UM">United States of America</option>
												<option value="AF">Afghanistan</option>
												<option value="AL">Albania</option>
												<option value="AD">Andorra</option>
												<option value="AG">Antigua and Barbuda</option>
												<option value="AU">Australia</option>
												<option value="AM">Armenia</option>
												<option value="AO">Angola</option>
												<option value="AR">Argentina</option>
												<option value="AT">Austria</option>
												<option value="AZ">Azerbaijan</option>
												<option value="BA">Bosnia and Herzegovina</option>
												<option value="BB">Barbados</option>
												<option value="BD">Bangladesh</option>
												<option value="BE">Belgium</option>
												<option value="BF">Burkina Faso</option>
												<option value="BG">Bulgaria</option>
												<option value="BH">Bahrain</option>
												<option value="BJ">Benin</option>
												<option value="BN">Brunei</option>
												<option value="BO">Bolivia</option>
												<option value="BT">Bhutan</option>
												<option value="BY">Belarus</option>
												<option value="CD">Congo</option>
												<option value="CA">Canada</option>
												<option value="CF">Central African Republic</option>
												<option value="CI">Cote d'Ivoire</option>
												<option value="CL">Chile</option>
												<option value="CM">Cameroon</option>
												<option value="CN">China</option>
												<option value="CO">Colombia</option>
												<option value="CU">Cuba</option>
												<option value="CV">Cabo Verde</option>
												<option value="CY">Cyprus</option>
												<option value="DJ">Djibouti</option>
												<option value="DK">Denmark</option>
												<option value="DM">Dominica</option>
												<option value="DO">Dominican Republic</option>
												<option value="EC">Ecuador</option>
												<option value="EE">Estonia</option>
												<option value="ER">Eritrea</option>
												<option value="ET">Ethiopia</option>
												<option value="FI">Finland</option>
												<option value="FJ">Fiji</option>
												<option value="FR">France</option>
												<option value="GA">Gabon</option>
												<option value="GD">Grenada</option>
												<option value="GE">Georgia</option>
												<option value="GH">Ghana</option>
												<option value="GH">Ghana</option>
												<option value="HN">Honduras</option>
												<option value="HT">Haiti</option>
												<option value="HU">Hungary</option>
												<option value="ID">Indonesia</option>
												<option value="IE">Ireland</option>
												<option value="IL">Israel</option>
												<option value="IN">India</option>
												<option value="IQ">Iraq</option>
												<option value="IR">Iran</option>
												<option value="IS">Iceland</option>
												<option value="IT">Italy</option>
												<option value="JM">Jamaica</option>
												<option value="JO">Jordan</option>
												<option value="JP">Japan</option>
												<option value="KE">Kenya</option>
												<option value="KG">Kyrgyzstan</option>
												<option value="KI">Kiribati</option>
												<option value="KW">Kuwait</option>
												<option value="KZ">Kazakhstan</option>
												<option value="LA">Laos</option>
												<option value="LB">Lebanons</option>
												<option value="LI">Liechtenstein</option>
												<option value="LR">Liberia</option>
												<option value="LS">Lesotho</option>
												<option value="LT">Lithuania</option>
												<option value="LU">Luxembourg</option>
												<option value="LV">Latvia</option>
												<option value="LY">Libya</option>
												<option value="MA">Morocco</option>
												<option value="MC">Monaco</option>
												<option value="MD">Moldova</option>
												<option value="ME">Montenegro</option>
												<option value="MG">Madagascar</option>
												<option value="MH">Marshall Islands</option>
												<option value="MK">Macedonia (FYROM)</option>
												<option value="ML">Mali</option>
												<option value="MM">Myanmar (formerly Burma)</option>
												<option value="MN">Mongolia</option>
												<option value="MR">Mauritania</option>
												<option value="MT">Malta</option>
												<option value="MV">Maldives</option>
												<option value="MW">Malawi</option>
												<option value="MX">Mexico</option>
												<option value="MZ">Mozambique</option>
												<option value="NA">Namibia</option>
												<option value="NG">Nigeria</option>
												<option value="NO">Norway</option>
												<option value="NP">Nepal</option>
												<option value="NR">Nauru</option>
												<option value="NZ">New Zealand</option>
												<option value="OM">Oman</option>
												<option value="PA">Panama</option>
												<option value="PF">Paraguay</option>
												<option value="PG">Papua New Guinea</option>
												<option value="PH">Philippines</option>
												<option value="PK">Pakistan</option>
												<option value="PL">Poland</option>
												<option value="QA">Qatar</option>
												<option value="RO">Romania</option>
												<option value="RU">Russia</option>
												<option value="RW">Rwanda</option>
												<option value="SA">Saudi Arabia</option>
												<option value="SB">Solomon Islands</option>
												<option value="SC">Seychelles</option>
												<option value="SD">Sudan</option>
												<option value="SE">Sweden</option>
												<option value="SG">Singapore</option>
												<option value="TG">Togo</option>
												<option value="TH">Thailand</option>
												<option value="TJ">Tajikistan</option>
												<option value="TL">Timor-Leste</option>
												<option value="TM">Turkmenistan</option>
												<option value="TN">Tunisia</option>
												<option value="TO">Tonga</option>
												<option value="TR">Turkey</option>
												<option value="TT">Trinidad and Tobago</option>
												<option value="TW">Taiwan</option>
												<option value="UA">Ukraine</option>
												<option value="UG">Uganda</option>
												<option value="UY">Uruguay</option>
												<option value="UZ">Uzbekistan</option>
												<option value="VA">Vatican City (Holy See)</option>
												<option value="VE">Venezuela</option>
												<option value="VN">Vietnam</option>
												<option value="VU">Vanuatu</option>
												<option value="YE">Yemen</option>
												<option value="ZM">Zambia</option>
												<option value="ZW">Zimbabwe</option>
											</select>
										</li>
										<li className="dropdown mr-5">
											<a href="#" className="text-dark" data-toggle="dropdown"><span> Language <i className="fa fa-caret-down text-muted"></i></span> </a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
												<a href="#" className="dropdown-item" >
													English
												</a>
												<a className="dropdown-item" href="#">
													Arabic
												</a>
												<a className="dropdown-item" href="#">
													German
												</a>
												<a href="#" className="dropdown-item" >
													Greek
												</a>
												<a href="#" className="dropdown-item" >
													Spanish
												</a>
											</div>
										</li>
										<li className="dropdown">
											<a href="#" className="text-dark" data-toggle="dropdown"><span>Currency <i className="fa fa-caret-down text-muted"></i></span></a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
												<a href="#" className="dropdown-item" >
													USD
												</a>
												<a className="dropdown-item" href="#">
													EUR
												</a>
												<a className="dropdown-item" href="#">
													INR
												</a>
												<a href="#" className="dropdown-item" >
													GBP
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-sm-8 col-5">
							<div className="top-bar-right">
								<ul className="custom">
									<li>
										<a href="register.html" className="text-dark"><i className="fa fa-user mr-1"></i> <span>Register</span></a>
									</li>
									<li>
										<a href="login.html" className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Login</span></a>
									</li>
									<li className="dropdown">
										<a href="#" className="text-dark" data-toggle="dropdown"><i className="fa fa-home mr-1"></i><span> My Dashboard</span></a>
										<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
											<a href="mydash.html" className="dropdown-item" >
												<i className="dropdown-icon icon icon-user"></i> My Profile
											</a>
											<a className="dropdown-item" href="#">
												<i className="dropdown-icon icon icon-speech"></i> Inbox
											</a>
											<a className="dropdown-item" href="#">
												<i className="dropdown-icon icon icon-bell"></i> Notifications
											</a>
											<a href="mydash.html" className="dropdown-item" >
												<i className="dropdown-icon  icon icon-settings"></i> Account Settings
											</a>
											<a className="dropdown-item" href="#">
												<i className="dropdown-icon icon icon-power"></i> Log out
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="horizontal-header clearfix ">
				<div className="container">
					<a id="horizontal-navtoggle" className="animated-arrow"><span></span></a>
					<span className="smllogo"><img src="../img/brand/logo.png" width="120" alt=""/></span>
					<a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i></a>
				</div>
			</div>
			
			<div className="horizontal-main bg-dark-transparent clearfix">
				<div className="horizontal-mainwrapper container clearfix">
					<div className="desktoplogo">
						<a href="index.html"><img src="../img/brand/logo1.png" alt=""/></a>
					</div>
					<div className="desktoplogo-1">
						<a href="index.html"><img src="../img/brand/logo.png" alt=""/></a>
					</div>
					
					<nav className="horizontalMenu clearfix d-md-flex">
						<ul className="horizontalMenu-list">
							<li aria-haspopup="true"><a href="#" className="active">Home <span className="fa fa-caret-down m-0"></span></a>
								<ul className="sub-menu">
									<li aria-haspopup="true"><a href="index.html">Home-default</a></li>
									<li aria-haspopup="true"><a href="classNameifieds-text.html">Home style-1</a></li>
									<li aria-haspopup="true"><a href="classNameifieds-slides.html">Home style-2</a></li>
									<li aria-haspopup="true"><a href="classNameifieds-video.html">Home style-3</a></li>
									<li aria-haspopup="true"><a href="classNameifieds-animation.html">Home style-4 </a></li>
									<li aria-haspopup="true"><a href="classNameifieds-map.html">Home style-5</a></li>
									<li aria-haspopup="true"><a href="intro-page.html">Home Intro Page</a></li>
									<li aria-haspopup="true"><a href="popup-login.html">Home Pop-up login</a></li>
									<li aria-haspopup="true"><a href="banner.html">Banners</a></li>
								</ul>
							</li>
							<li aria-haspopup="true"><a href="about.html">About Us </a></li>
							<li aria-haspopup="true"><a href="widgets.html">Widgets</a></li>
							<li aria-haspopup="true"><a href="#">Pages <span className="fa fa-caret-down m-0"></span></a>
								<div className="horizontal-megamenu clearfix">
									<div className="container">
										<div className="megamenu-content">
											<div className="row">
												<ul className="col link-list">
													<li className="title">Custom pages</li>
													<li>
														<a href="classNameifieds-list.html">classNameifieds List</a>
													</li>
													<li>
														<a href="classNameifieds-list-right.html">classNameifieds List Right</a>
													</li>
													<li>
														<a href="classNameifieds-list-map.html">classNameifieds Map list</a>
													</li>
													<li>
														<a href="classNameifieds-list-map2.html">classNameifieds Map list 02</a>
													</li>
													<li>
														<a href="classNameifieds-list-map3.html">classNameifieds Map style 03</a>
													</li>
													<li>
														<a href="categories.html">Categories</a>
													</li>
													<li>
														<a href="inovice.html">Invoice</a>
													</li>
													<li>
														<a href="usersall.html">User Lists</a>
													</li>
												</ul>
												<ul className="col link-list">
													<li className="title">Custom pages</li>
													<li>
														<a href="ad-list.html">Ad Listing</a>
													</li>
													<li>
														<a href="ad-list-right.html">Ad Listing Right</a>
													</li>
													<li>
														<a href="ad-details.html">Ad Details</a>
													</li>
													<li>
														<a href="ad-details-right.html">Ad Details Right</a>
													</li>
													<li>
														<a href="ad-posts.html">Ad Posts</a>
													</li>
													<li>
														<a href="ad-posts2.html">Ad Posts2</a>
													</li>
													<li>
														<a href="pricing.html">Pricing</a>
													</li>
													<li>
														<a href="typography.html">Typography</a>
													</li>
												</ul>
												<ul className="col link-list">
													<li>
														<a href="userprofile.html"> User Profile</a>
													</li>
													<li>
														<a href="mydash.html">My Dashboard</a>
													</li>
													<li>
														<a href="myads.html">Ads</a>
													</li>
													<li>
														<a href="myfavorite.html">Favorite Ads</a>
													</li>
													<li>
														<a href="manged.html">Manged Ads</a>
													</li>
													<li>
														<a href="payments.html">Payments</a>
													</li>
													<li>
														<a href="orders.html"> Orders</a>
													</li>
													<li>
														<a href="settings.html"> Settings</a>
													</li>
													<li>
														<a href="tips.html">Tips</a>
													</li>
												</ul>
												<ul className="col link-list">
													<li className="title">User pages</li>
													<li><a href="underconstruction.html">Under Constructions</a></li>
													<li><a href="404.html">404</a></li>
													<li><a href="register.html">Register</a></li>
													<li><a href="login.html">Login</a></li>
													<li><a href="login-2.html">Login 02</a></li>
													<li><a href="forgot.html">Forgot Password</a></li>
													<li><a href="lockscreen.html">Lock Screen</a></li>
													<li><a href="faq.html">Faq</a></li>
												</ul>
												<ul className="col link-list">
													<li className="title">User pages</li>
													<li><a href="header-style1.html">Header Style 01</a></li>
													<li><a href="header-style2.html">Header Style 02</a></li>
													<li><a href="header-style3.html">Header Style 03</a></li>
													<li><a href="header-style4.html">Header Style 04</a></li>
													<li><a href="footer-style.html">Footer Style 01</a></li>
													<li><a href="footer-style2.html">Footer Style 02</a></li>
													<li><a href="footer-style3.html">Footer Style 03</a></li>
													<li><a href="footer-style4.html">Footer Style 04</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li aria-haspopup="true"><a href="#">Blog <span className="fa fa-caret-down m-0"></span></a>
								<ul className="sub-menu">
									<li aria-haspopup="true"><a href="#">Blog Grid <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
										 <ul className="sub-menu">
											<li aria-haspopup="true"><a href="blog-grid.html">Blog Grid Left</a></li>
											<li aria-haspopup="true"><a href="blog-grid-right.html">Blog Grid Right</a></li>
											<li aria-haspopup="true"><a href="blog-grid-center.html">Blog Grid Center</a></li>
										</ul>
									</li>
									<li aria-haspopup="true"><a href="#">Blog List <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
										 <ul className="sub-menu">
											<li aria-haspopup="true"><a href="blog-list.html">Blog List Left</a></li>
											<li aria-haspopup="true"><a href="blog-list-right.html">Blog List Right</a></li>
											<li aria-haspopup="true"><a href="blog-list-center.html">Blog List Center</a></li>
										</ul>
									</li>
									<li aria-haspopup="true"><a href="#">Blog Details <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
										<ul className="sub-menu">
											<li aria-haspopup="true"><a href="blog-details.html">Blog Details Left</a></li>
											<li aria-haspopup="true"><a href="blog-details-right.html">Blog Details Right</a></li>
											<li aria-haspopup="true"><a href="blog-details-center.html">Blog Details Center</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li aria-haspopup="true"><a href="#">Categories <span className="fa fa-caret-down m-0"></span></a>
								<ul className="sub-menu">
									<li aria-haspopup="true"><a href="classNameified.html">classNameifieds Left</a></li>
									<li aria-haspopup="true"><a href="classNameified-right.html">classNameifieds Rights </a></li>
								</ul>
							</li>
							<li aria-haspopup="true"><a href="contact.html"> Contact Us <span className="wsarrow"></span></a></li>
							<li aria-haspopup="true" className="d-lg-none mt-5 pb-5 mt-lg-0">
								<span><a className="btn btn-orange" href="ad-posts.html">Post Free Ad</a></span>
							</li>
						</ul>
						<ul className="mb-0">
							<li aria-haspopup="true" className="mt-5 d-none d-lg-block ">
								<span><a className="btn btn-orange ad-post " href="ad-posts.html">Post Free Ad</a></span>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
    );
};

export default Menu;