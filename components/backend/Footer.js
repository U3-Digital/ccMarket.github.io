import React from 'react';
import useScript from '../../hooks/scripts';
import { useRouter } from 'next/router';

const Footer = () => {

	const router = useRouter();

	if (router.pathname !== '/controlPanel') {
		
		useScript('../backend/assets/js/jquery-3.5.1.min.js');
		useScript('../backend/assets/js/bootstrap/popper.min.js');
		useScript('../backend/assets/js/bootstrap/bootstrap.js');
		useScript('../backend/assets/js/icons/feather-icon/feather.min.js');
		useScript('../backend/assets/js/icons/feather-icon/feather-icon.js');
		useScript('../backend/assets/js/sidebar-menu.js');
		useScript('../backend/assets/js/config.js');
		useScript('../backend/assets/js/chart/chartist/chartist.js');
		useScript('../backend/assets/js/chart/chartist/chartist-plugin-tooltip.js');
		useScript('../backend/assets/js/chart/knob/knob.min.js');
		useScript('../backend/assets/js/chart/knob/knob-chart.js');
		useScript('../backend/assets/js/chart/apex-chart/apex-chart.js');
		useScript('../backend/assets/js/chart/apex-chart/stock-prices.js');
		useScript('../backend/assets/js/notify/bootstrap-notify.min.js');
        useScript('../backend/assets/js/notify/index.js');

        useScript('../backend/assets/js/time-picker/jquery-clockpicker.min.js');
        useScript('../backend/assets/js/time-picker/highlight.min.js');
        useScript('../backend/assets/js/time-picker/clockpicker.js');

        useScript('../backend/assets/js/tooltip-init.js');
		useScript('../backend/assets/js/datepicker/date-picker/datepicker.js');
		useScript('../backend/assets/js/datepicker/date-picker/datepicker.en.js');
		useScript('../backend/assets/js/datepicker/date-picker/datepicker.custom.js');
		// useScript('../backend/assets/js/typeahead/handlebars.js');
		// useScript('../backend/assets/js/typeahead/typeahead.bundle.js');
		// useScript('../backend/assets/js/typeahead/typeahead.custom.js');
		// useScript('../backend/assets/js/typeahead-search/typeahead-custom.js');
		useScript('../backend/assets/js/script.js');
		// useScript('../backend/assets/js/dashboard/default.js');
        useScript('../backend/assets/js/typeahead-search/handlebars.js');
        
        useScript('../backend/assets/js/dashboard/default.js')
	}
    return(
        <></>
    );
};

/*
*/

export default Footer;