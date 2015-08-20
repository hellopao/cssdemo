requirejs.config({
	baseUrl: "./scripts/",
	paths: {
		"jquery": "jquery.min"
	}
});

require(['config','jquery'], function (config,$) {
	function Page(opts) {
		this.opts = opts;
		this.show();
	}

	Page.prototype.show = function () {
		console.dir(this.opts)
		// $('body').css({
		// 	'backgroundColor': this.opts.bgColor || this.getRndColor()
		// });
		
		if (this.opts.content.type === "image"){
			$('#content').html('<img src="' + this.opts.content.src + '" class="' + this.opts.animation + '">');
		} else {
			$('#content').html('<p class="' + this.opts.animation + '">' + this.opts.content.words + '</p>');
		}
		
		if (this.opts.words) {
			$('#words').html(this.opts.words);
		}
	}
	
	Page.prototype.getRndColor = function (){
		var colors = ["#F1A30B", "#835A2C", "#0050EF", "#A20025", "#1BA0E1", "#D90073", "#A4C400", "#6A00FF", "#60AA17", "#008A00", "#765F89", "#6D8764", "#FA6900", "#F473D0", "#E51400", "#793B3E", "#657688", "#01ABAA", "#AA00FF", "#D8C101"];
		return colors[Math.ceil(Math.random() * colors.length)];
	}

	var interval = 1000;

	var showItem = function (item) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				new Page(item);
				resolve();
			}, interval);
		});
	};
	
	var delay = function (timeout){
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, timeout);
		});
	}

	var first = config.shift();

	var promise = showItem(first);

	config.forEach(function (item) {
		promise = promise
			.then(function () {
				return showItem(item);
			})
	});
})
