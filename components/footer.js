import React from 'react'
import useScript from '../hooks/scripts';

const Footer = () => {
	useScript('../js/vendors/jquery-3.2.1.min.js');
	useScript('../stylesheets/plugins/bootstrap-4.3.1-dist/js/popper.min.js');
	useScript('../stylesheets/plugins/bootstrap-4.3.1-dist/js/bootstrap.min.js');
	useScript('../js/vendors/jquery.sparkline.min.js');
	useScript('../js/vendors/circle-progress.min.js');
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
        <>
        {/* <a href="#top" id="back-to-top" ><i className="fa fa-rocket"></i></a>
		<script src="../js/vendors/jquery-3.2.1.min.js"></script>
		<script src="../plugins/bootstrap-4.3.1-dist/js/popper.min.js"></script>
		<script src="../plugins/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
		<script src="../js/vendors/jquery.sparkline.min.js"></script>
		<script src="../js/vendors/circle-progress.min.js"></script>
		<script src="../plugins/rating/jquery.rating-stars.js"></script>
		<script src="../plugins/counters/counterup.min.js"></script>
		<script src="../plugins/counters/waypoints.min.js"></script>
		<script src="../plugins/counters/numeric-counter.js"></script>
		<script src="../plugins/owl-carousel/owl.carousel.js"></script>
		<script src="../plugins/Horizontal2/Horizontal-menu/horizontal.js"></script>
		<script src="../js/jquery.touchSwipe.min.js"></script>

		<script src="../plugins/select2/select2.full.min.js"></script>
		<script src="../js/select2.js"></script>
		<script src="../js/sticky.js"></script>
		<script src="../plugins/cookie/jquery.ihavecookies.js"></script>
		<script src="../plugins/cookie/cookie.js"></script>
		<script src="../plugins/scroll-bar/jquery.mCustomScrollbar.concat.min.js"></script>
		<script src="../js/swipe.js"></script>
		<script src="../js/scripts2.js"></script>
		<script src="../js/custom.js"></script> */}
        </>
    );
}

export default Footer;