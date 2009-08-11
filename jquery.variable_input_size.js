(function($) {

	$.fn.variable_size = function(params) {
		
		// merge default and user parameters
		params = $.extend( {default_size: 10}, params);
		
		// traverse all nodes
		this.each(function() {
			var $this = $(this);
			
			var trimmer = Math.max(($this.attr('value').length / 4), 1);
		  var dynamic_size = $this.attr('value').length - trimmer);
			if ($this.attr('value').length == 0)
				$this.attr('size', params.default_size);
			else
				$this.attr('size', dynamic_size);
			
			$this.focus(function() {
				var trimmer = Math.max(($this.attr('value').length / 4), 1);
			  var dynamic_size = $this.attr('value').length - trimmer);
				if($this.attr('value').length > params.default_size)
					$this.attr('size', dynamic_size);
				else
					$this.attr('size', params.default_size);
					
				$this.keyup(function() {
					if($this.attr('value').length > params.default_size)
						$this.attr('size', dynamic_size);
					else
						$this.attr('size', params.default_size);
				});
				
			}).blur(function() {
				var trimmer = Math.max(($this.attr('value').length / 4), 1);
			  var dynamic_size = $this.attr('value').length - trimmer);
				if ($this.attr('value').length == 0)
					$this.attr('size', params.default_size);
				else
					$this.attr('size', dynamic_size);
			});

		});

		// allow jQuery chaining
		return this;
	};

})(jQuery);