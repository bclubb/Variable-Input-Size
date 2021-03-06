(function($) {

	$.fn.variable_size = function(params) {
		
		// merge default and user parameters
		params = $.extend( {default_size: 10}, params);
		
		// traverse all nodes
		this.each(function() {

			var $this = $(this);
			
			if ($this.attr('value').length == 0)
				$this.attr('size', params.default_size);
			else
				$this.attr('size', ($this.attr('value').length - Math.max(($this.attr('value').length / 5), 1)));
			
			$this.focus(function() {
				if($this.attr('value').length > params.default_size)
					$this.attr('size', ($this.attr('value').length - ($this.attr('value').length / 5)));
				else
					$this.attr('size', params.default_size);
					
				$this.keyup(function() {
					if($this.attr('value').length > params.default_size)
						$this.attr('size', ($this.attr('value').length - ($this.attr('value').length / 5)));
					else
						$this.attr('size', params.default_size);
				});
			}).blur(function() {
				if ($this.attr('value').length == 0)
					$this.attr('size', params.default_size);
				else
					$this.attr('size', ($this.attr('value').length - ($this.attr('value').length / 5)));
			});

		});

		// allow jQuery chaining
		return this;
	};

})(jQuery);