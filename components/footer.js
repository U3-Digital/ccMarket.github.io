import React from 'react';
import useScript from '../hooks/scripts';

const Footer = () => {
	useScript('../js/vendors/jquery-3.2.1.min.js');
	useScript('../stylesheets/plugins/bootstrap-4.3.1-dist/js/popper.min.js');
	useScript('../stylesheets/plugins/bootstrap-4.3.1-dist/js/bootstrap.min.js');
	useScript('../js/vendors/jquery.sparkline.min.js');
	useScript('../js/vendors/circle-progress.min.js');
	useScript('../stylesheets/plugins/rating/jquery.rating-stars.js');
	useScript('../stylesheets/plugins/counters/counterup.min.js');
	useScript('../stylesheets/plugins/counters/waypoints.min.js');
    useScript('../stylesheets/plugins/counters/numeric-counter.js');
    useScript('../stylesheets/plugins/owl-carousel/owl.carousel.js');
    useScript('../stylesheets/plugins/Horizontal2/Horizontal-menu/horizontal.js');
    useScript('../js/jquery.touchSwipe.min.js');
    useScript('../stylesheets/plugins/select2/select2.full.min.js');
    useScript('../js/select2.js');
    useScript('../js/sticky.js');
    useScript('../stylesheets/plugins/cookie/jquery.ihavecookies.js');
    useScript('../stylesheets/plugins/cookie/cookie.js');
    useScript('../stylesheets/plugins/scroll-bar/jquery.mCustomScrollbar.concat.min.js');
    useScript('../js/swipe.js');
    useScript('../js/scripts2.js');
	useScript('../js/custom.js');
    return(
	<></>
    );
}

export default Footer;