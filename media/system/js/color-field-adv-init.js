jQuery(document).ready(function ($){

	function initMinicolors(event, container) {
		$(container || document).find('.minicolors').each(function() {
			$(this).minicolors({
				control: $(this).attr('data-control') || 'hue',
				format: $(this).attr('data-validate') === 'color'
					? 'hex'
					: ($(this).attr('data-format') === 'rgba'
						? 'rgb'
						: $(this).attr('data-format'))
					|| 'hex',
				keywords: $(this).attr('data-keywords') || '',
				opacity: $(this).attr('data-format') === 'rgba' ? true : false || false,
				position: $(this).attr('data-position') || 'default',
				theme: 'bootstrap'
			});
		});
	}

	initMinicolors();
	$(document).on('subform-row-add', initMinicolors);
});
