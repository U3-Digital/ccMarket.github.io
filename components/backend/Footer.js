import React from 'react';
import useScript from '../../hooks/scripts';

const Footer = () => {
    useScript('../../js/vendors/jquery-3.2.1.min.js');
    useScript('../../stylesheets/plugins/bootstrap-4.3.1-dist/js/popper.min.js');
    useScript('../../stylesheets/plugins/bootstrap-4.3.1-dist/js/bootstrap.min.js');
    useScript('../../js/vendors/jquery.sparkline.min.js');
    useScript('../../js/vendors/selectize.min.js');
    useScript('../../js/vendors/jquery.tablesorter.min.js');
    useScript('../../js/vendors/circle-progress.min.js');
    useScript('../../stylesheets/plugins/rating/jquery.rating-stars.js');

    useScript('../../stylesheets/plugins/toggle-sidebar/sidemenu.js');

    useScript('../../stylesheets/plugins/counters/counterup.min.js');
    useScript('../../stylesheets/plugins/counters/waypoints.min.js');
    return(
        <></>
    );
};

/* <!-- Dashboard js -->
		<script src="../assets/js/vendors/jquery-3.2.1.min.js"></script>
		<script src="../assets/plugins/bootstrap-4.3.1-dist/js/popper.min.js"></script>
		<script src="../assets/plugins/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
		<script src="../assets/js/vendors/jquery.sparkline.min.js"></script>
		<script src="../assets/js/vendors/selectize.min.js"></script>
		<script src="../assets/js/vendors/jquery.tablesorter.min.js"></script>
		<script src="../assets/js/vendors/circle-progress.min.js"></script>
		<script src="../assets/plugins/rating/jquery.rating-stars.js"></script>
		<!-- p-scroll bar Js-->
		<script src="../assets/plugins/pscrollbar/pscrollbar.js"></script>
		<script src="../assets/plugins/pscrollbar/pscroll.js"></script>

		<!-- Fullside-menu Js-->
		<script src="../assets/plugins/toggle-sidebar/sidemenu.js"></script>

		<!--Counters -->
		<script src="../assets/plugins/counters/counterup.min.js"></script>
		<script src="../assets/plugins/counters/waypoints.min.js"></script>


		<!-- Custom Js-->
		<script src="../assets/js/admin-custom.js"></script> */

export default Footer;