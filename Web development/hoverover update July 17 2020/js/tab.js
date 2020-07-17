(function ($) {
	$.fn.myTabs = function (options) {
		options = $.extend({
			'tabSelectedClass': 'current', // the name of the class added to the selected tab
			'queryName': 'contents' // the query parameter name for the default tab
		}, options);
		return this.each(function () {
			
			/**
			 * Cache our selectors to minimize the amount of DOM queries
			 */
			var base = this,
				tabSelectedClass = options.tabSelectedClass,
				$base = $(this),
				$tabContainer = $base.find('#tabs'),
				$tabs = $tabContainer.find('li'),
				$tabContentContainer = $base.find('#contents'),
				$tabContent = $tabContentContainer.find(' > div');
			
			/**
			 * Initialize the tabs plugin
			 */
			this.init = function () {
				var _tabUrlIndex = parseFloat(base.getTabFromUrl()) - 1,
					_startIndex = _tabUrlIndex || 0;
				base.showContent(_startIndex);
				$tabs.find('a').on('click.myTabs', base.handleTabClick);
			};
			
			/**
			 * Get the tab index from the query parameter if provided
			 */
			this.getTabFromUrl = function () {
				var _currentUrl = window.location.href,
					_params = _currentUrl.slice(_currentUrl.indexOf('?') + 1).split('&'),
					i = 0, 
					_paramsLength = _params.length,
					_value = '';
				for (i; i < _paramsLength; i++) {
					_value = _params[i].split('=');
					if (_value[0] === options.queryName) {
						return _value[1];
					}
				}
				return undefined;
			};
			
			/**
			 * Catch the tab click and gather the selected tab's index
			 */
			this.handleTabClick = function (e) {
				var _tabIndex = $(this).parent('li').index();
				base.showContent(_tabIndex);
				e.preventDefault();
			};
			
			/**
			 * Show the contents and select the tab of the provided index
			 *
			 * @param {Integer} index The index of the tab and content to show
			 */
			this.showContent = function (index) {
				$tabs.find('a').filter(function () {
					return $(this).hasClass(tabSelectedClass);
				}).removeClass(tabSelectedClass);
				
				$tabContent.filter(function () {
					return $(this).index() !== index;
				}).hide();
				
				$tabs.eq(index).find('a').addClass(tabSelectedClass);
				$tabContent.eq(index).fadeIn('slow');
			};
			
			this.init();
		});
	};
}(jQuery));

$(document).ready(function () {
    $('div#Contact').myTabs();
});

$(document).ready(function () {
	$('div#WLC').myTabs();
});


