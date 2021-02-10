import React, { useState } from 'react';
import firebase from '../firebase';

const Topbar = () => {

  const usuario = firebase.auth().currentUser;
  const usuarios = firebase.firestore().collection('usuarios');

  const [nombre, setNombre] = useState('Pedic');
  const [theme, setTheme] = useState(false);

  /*usuarios.doc(usuario.uid).get().then((snapshot) => {
    setNombre(snapshot.data().nombre);
  }).catch((error) => {
    console.log(error);
  });*/

  if (!theme) {
    // setTheme(readLocalStorage());    
  }

  function readLocalStorage() {
    
    const read = 'light';
    let returnValue = '';

    if (read) {
      returnValue = read;
    } else {
      localStorage.setItem('theme', 'light');
      returnValue = 'light';
    }

    if (returnValue === 'light') {
      document.getElementsByTagName('body')[0].classList.remove('dark-only');
    } else if (returnValue === 'dark') {
      document.getElementsByTagName('body')[0].classList.add('dark-only');
    }
    return returnValue;
  }

  function toggleMode() {
    if (theme === 'light') {

      document.getElementsByTagName('body')[0].classList.add('dark-only');
      
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('dark-only');
      console.log(document.getElementsByTagName('body')[0].classList);
      
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  const logout = () => {
    firebase.auth().signOut().then(function () {
      window.location.href = 'controlPanel/'
    }).catch(function (error) {
      // An error happened.
    });
  }

  return (
    <div className="page-main-header">
      <div className="main-header-right row m-0">
        <form className="form-inline search-full" action="#" method="get">
          <div className="form-group w-100">
            <div className="Typeahead Typeahead--twitterUsers">
              <div className="u-posRelative">
                <input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Cuba .." name="q" title="" autoFocus />
                <div className="spinner-border Typeahead-spinner" role="status"><span className="sr-only">Loading...</span></div><i className="close-search" data-feather="x"></i>
              </div>
              <div className="Typeahead-menu"></div>
            </div>
          </div>
        </form>
        <div className="main-header-left">
          <div className="logo-wrapper"><a href="index.html"><img className="img-fluid" src="../backend/assets/images/logo/logo.png" alt="" /></a></div>
          <div className="toggle-sidebar"><i className="status_toggle middle" data-feather="grid" id="sidebar-toggle"> </i></div>
        </div>
        <div className="left-menu-header col horizontal-wrapper pl-0">

        </div>
        <div className="nav-right col-8 pull-right right-menu">
          <ul className="nav-menus">
            <li className="language-nav">
            </li>
            <li>
              <span className="header-search">
                <i data-feather="search"></i>
              </span>
            </li>
            <li className="onhover-dropdown">
              <div className="notification-box"><i data-feather="bell"></i><span className="badge badge-pill badge-secondary">4</span></div>
              <ul className="notification-dropdown onhover-show-div">
                <li className="bg-primary">
                  <h6 className="f-18 mb-0">Notitication</h6>
                  <p className="mb-0">You have 4 new notification</p>
                </li>
                <li>
                  <p className="mb-0"><i className="fa fa-circle-o mr-3 font-primary"> </i>Delivery processing <span className="pull-right">10 min.</span></p>
                </li>
                <li>
                  <p className="mb-0"><i className="fa fa-circle-o mr-3 font-success"></i>Order Complete<span className="pull-right">1 hr</span></p>
                </li>
                <li>
                  <p className="mb-0"><i className="fa fa-circle-o mr-3 font-info"></i>Tickets Generated<span className="pull-right">3 hr</span></p>
                </li>
                <li>
                  <p className="mb-0"><i className="fa fa-circle-o mr-3 font-danger"></i>Delivery Complete<span className="pull-right">6 hr</span></p>
                </li>
                <li><a className="btn btn-primary" href="#">Check all notification</a>
                </li>
              </ul>
            </li>
            <li>
              <div id="toggleMode" className="mode" onClick={() => toggleMode()}><i id="moon" className="far fa-moon"></i></div>
            </li>
            <li className="cart-nav onhover-dropdown">
              <div className="cart-box"><i data-feather="shopping-cart"></i><span className="badge badge-pill badge-primary">2</span></div>
              <ul className="cart-dropdown chat-dropdown onhover-show-div">
                <li className="bg-primary text-center">
                  <h6 className="f-18">Shoping cart</h6>
                  <p className="mb-0">You have 3 items in your cart  </p>
                </li>
                <li className="mt-0">
                  <div className="media"><img className="img-fluid rounded-circle mr-3 img-60" src="../backend/assets/images/ecommerce/01.jpg" alt="" />
                    <div className="media-body"><span>Boy's T-shirt</span>
                      <p>It is a long established fact that a reader</p>
                      <h6 className="f-12 light-font">1 x $ 299.00</h6>
                    </div>
                    <div className="close-circle"><a href="#"><i data-feather="x"></i></a></div>
                  </div>
                </li>
                <li>
                  <div className="media"><img className="img-fluid rounded-circle mr-3 img-60" src="../backend/assets/images/ecommerce/02.jpg" alt="" />
                    <div className="media-body"><span>Girls's T-shirt</span>
                      <p>It is a long established fact that a reader</p>
                      <h6 className="f-12 light-font">1 x $ 199.00</h6>
                    </div>
                    <div className="close-circle"><a href="#"><i data-feather="x"></i></a></div>
                  </div>
                </li>
                <li>
                  <div className="media"><img className="img-fluid rounded-circle mr-3 img-60" src="../backend/assets/images/ecommerce/08.jpg" alt="" />
                    <div className="media-body"><span>Girls's T-shirt</span>
                      <p>It is a long established fact that a reader</p>
                      <h6 className="f-12 light-font">2 x $ 199.00</h6>
                    </div>
                    <div className="close-circle"><a href="#"><i data-feather="x"></i></a></div>
                  </div>
                </li>
                <li>
                  <div className="total">
                    <h6 className="mb-0 mt-1">Subtotal : <span className="f-right">$799.00</span></h6>
                  </div>
                </li>
                <li>
                  <div className="buttons">
                    <h6 className="mb-0"><a className="view-cart" href="cart.html">View Cart</a><a className="checkout f-right" href="#">Checkout</a></h6>
                  </div>
                </li>
              </ul>
            </li>
            <li className="onhover-dropdown"><i data-feather="message-square"></i>
              <ul className="chat-dropdown onhover-show-div">
                <li className="bg-primary text-center">
                  <h6 className="f-18 mb-0">Message Box</h6>
                  <p className="mb-0">You have 3 new messages </p>
                </li>
                <li>
                  <div className="media"><img className="img-fluid rounded-circle mr-3" src="../backend/assets/images/user/1.jpg" alt="" />
                    <div className="status-circle online"></div>
                    <div className="media-body"><span>Erica Hughes</span>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                    <p className="f-12 font-success">58 mins ago</p>
                  </div>
                </li>
                <li>
                  <div className="media"><img className="img-fluid rounded-circle mr-3" src="../backend/assets/images/user/2.jpg" alt="" />
                    <div className="status-circle online"></div>
                    <div className="media-body"><span>Kori Thomas</span>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                    <p className="f-12 font-success">1 hr ago</p>
                  </div>
                </li>
                <li>
                  <div className="media"><img className="img-fluid rounded-circle mr-3" src="../backend/assets/images/user/4.jpg" alt="" />
                    <div className="status-circle offline"></div>
                    <div className="media-body"><span>Ain Chavez</span>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                    <p className="f-12 font-danger">32 mins ago</p>
                  </div>
                </li>
                <li className="text-center"> <a className="btn btn-primary" href="#">View All     </a></li>
              </ul>
            </li>
            <li className="profile-nav onhover-dropdown p-0">
              <div className="media profile-media"><img className="b-r-10" src="../backend/assets/images/dashboard/profile.jpg" alt="" />
                <div className="media-body"><span>{nombre}</span>
                  <p className="mb-0 font-roboto">Admin <i className="middle fa fa-angle-down"></i></p>
                </div>
              </div>
              <ul className="profile-dropdown onhover-show-div">
                <li><i data-feather="user"></i><span>Account </span></li>
                <li><i data-feather="mail"></i><span>Inbox</span></li>
                <li><i data-feather="file-text"></i><span>Taskboard</span></li>
                <li><i data-feather="settings"></i><span>Settings</span></li>
                <li onClick={() => logout()}><i data-feather="log-in"> </i><span>Log in</span></li>
              </ul>
            </li>
          </ul>
        </div>
        <script id="result-template" type="text/x-handlebars-template">
          <div className="ProfileCard u-cf">
            <div className="ProfileCard-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay m-0"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></div>
            <div className="ProfileCard-details">
              <div className="ProfileCard-realName"></div>
            </div>
          </div>
        </script>
        <script id="empty-template" type="text/x-handlebars-template"><div className="EmptyMessage">Your search turned up 0 results. This most likely means the backend is down, yikes!</div></script>
      </div>
    </div>
  );
};

export default Topbar;