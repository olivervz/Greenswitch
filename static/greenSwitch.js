(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Switch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCEDQhshrAAiYQAAiXBshrQBrhsCXAAQCYAABrBsQBrBrABCXQgBCYhrBrQhrBsiYAAQiXAAhrhsg");
	this.shape.setTransform(36.65,36.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Switch, new cjs.Rectangle(0,0,73.3,73.4), null);


(lib.StaticStockButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation_Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCEDQhshrAAiYQAAiXBshrQBrhrCXAAQCYAABrBrQBsBrAACXQAACYhsBrQhrBsiYgBQiXABhrhsg");
	this.shape.setTransform(0.025,-32.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98C355").s().p("AlgK6QiTiTAAjPIAAqvQAAjPCTiTQCSiTDOAAQDPAACSCTQCTCTAADPIAAKvQAADPiTCTQiSCTjPAAQjOAAiSiTg");
	this.shape_1.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-82.9,100,168.9);


(lib.StaticOffButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCEDQhshrAAiYQAAiXBshrQBrhsCXAAQCYAABrBsQBrBrABCXQgBCYhrBrQhrBsiYAAQiXAAhrhsg");
	this.shape.setTransform(0,34.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69952F").s().p("AkCJcQhshsAAiYIAAqvQAAiZBshqQBrhsCXAAQCYAABrBsQBrBqABCZIAAKvQgBCYhrBsQhrBriYAAQiXAAhrhrg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#69952F").s().p("AlgK6QiTiTAAjPIAAqvQAAjPCTiTQCSiTDOAAQDOAACTCTQCTCTAADPIAAKvQAADPiTCTQiTCTjOAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-84.4,100,168.9);


(lib.Circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCEDQhshrAAiYQAAiXBshrQBrhsCXAAQCYAABrBsQBrBrABCXQgBCYhrBrQhrBsiYAAQiXAAhrhsg");
	this.shape.setTransform(36.65,36.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Circle, new cjs.Rectangle(0,0,73.3,73.4), null);


(lib.ClickedDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* Stop a Movie Clip
		Stops the specified movie clip on stage.
		
		Instructions:
		1. Use this code for movie clips that are currently playing.
		*/
		
		this.movieClip_1.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// White
	this.instance = new lib.Circle();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,34.35,1,1,0,0,0,36.6,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// Mid
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69952F").s().p("AkCJcQhshsAAiYIAAqvQAAiZBshqQBrhsCXAAQCYAABrBsQBrBqABCZIAAKvQgBCYhrBsQhrBriYAAQiXAAhrhrg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D9932").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#729D36").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#76A239").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7AA63D").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7EAA40").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#83AE44").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#87B247").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8BB64B").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8FBB4E").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#94BF52").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#98C355").s().p("AkCJcQhshsAAiYIAAqvQAAiZBshqQBrhsCXAAQCYAABrBsQBrBqABCZIAAKvQgBCYhrBsQhrBriYAAQiXAAhrhrg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#90BB4F").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8CB84C").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#88B448").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#84B045").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#81AC42").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7DA83F").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#79A43C").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#75A139").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#719D35").s().p("AkCJcQhshrABiYIAAqxQgBiYBshrQBrhrCXAAQCYAABrBrQBsBrgBCYIAAKxQABCYhsBrQhrBriYAAQiXAAhrhrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// BG
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#69952F").s().p("AlgK6QiTiTAAjPIAAqvQAAjPCTiTQCSiTDOAAQDOAACTCTQCTCTAADPIAAKvQAADPiTCTQiTCTjOAAQjOAAiSiTg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D9932").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#729D36").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#76A239").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7AA63D").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7EAA40").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#83AE44").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#87B247").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8BB64B").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8FBB4E").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#94BF52").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#98C355").s().p("AlgK6QiTiTAAjPIAAqvQAAjPCTiTQCSiTDOAAQDOAACTCTQCTCTAADPIAAKvQAADPiTCTQiTCTjOAAQjOAAiSiTg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#90BB4F").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8CB84C").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#88B448").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#84B045").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#81AC42").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7DA83F").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#79A43C").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#75A139").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#719D35").s().p("AlhK6QiSiTAAjOIAAqxQAAjOCSiTQCUiSDNAAQDOAACUCSQCSCTAADOIAAKxQAADOiSCTQiUCSjOAAQjNAAiUiSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-84.4,100,168.9);


(lib.ClickableButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.StaticOffButton("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.ClickedDown();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCEDQhshrAAiYQAAiXBshrQBrhsCXAAQCYAABrBsQBrBrABCXQgBCYhrBrQhrBsiYAAQiXAAhrhsg");
	this.shape.setTransform(0,34.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98C355").s().p("AkCJcQhshsAAiYIAAqvQAAiZBshqQBrhsCXAAQCYAABrBsQBrBqABCZIAAKvQgBCYhrBsQhrBriYAAQiXAAhrhrg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#69952F").s().p("AlgK6QiTiTAAjPIAAqvQAAjPCTiTQCSiTDOAAQDOAACTCTQCTCTAADPIAAKvQAADPiTCTQiTCTjOAAQjOAAiSiTg");

	this.instance_2 = new lib.StaticStockButton("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-84.4,100,169.9);


// stage content:
(lib.greenSwitch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Button1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(25);
		}
	}
	this.frame_71 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// MovingSwitch
	this.instance = new lib.Switch();
	this.instance.parent = this;
	this.instance.setTransform(549.95,139.35,1,1,0,0,0,36.6,36.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({regX:36.7,regY:36.7,x:550.05,y:129.6},0).wait(1).to({y:119.75},0).wait(1).to({y:109.9},0).wait(1).to({y:100.1},0).wait(1).to({y:90.25},0).wait(1).to({y:80.4},0).wait(1).to({y:70.6},0).wait(1).to({y:70.7},0).wait(1).to({y:70.85},0).wait(1).to({y:70.95},0).wait(1).to({y:71.1},0).wait(1).to({y:71.2},0).wait(1).to({y:71.35},0).wait(1).to({y:71.45},0).wait(1).to({y:71.6},0).wait(1).to({y:71.75},0).wait(1).to({y:71.85},0).wait(1).to({x:561.7},0).wait(1).to({x:573.4},0).wait(1).to({x:585.05},0).wait(1).to({x:600.4},0).wait(1).to({x:615.8},0).wait(1).to({x:631.15},0).wait(1).to({x:646.55},0).wait(1).to({x:661.9},0).wait(1).to({x:677.25},0).wait(1).to({x:692.65},0).wait(1).to({x:708},0).wait(1).to({x:723.4},0).wait(1).to({x:738.75},0).wait(1).to({x:754.1},0).wait(1).to({x:769.5},0).wait(1).to({x:784.85},0).wait(1).to({x:800.2},0).wait(1).to({x:815.6},0).wait(1).to({x:830.95},0).wait(1).to({x:846.35},0).wait(1).to({x:861.7},0).wait(1).to({x:877.05},0).wait(1).to({x:892.45},0).wait(1).to({x:907.8},0).wait(1).to({x:923.2},0).wait(1).to({x:938.55},0).wait(1).to({x:953.9},0).wait(1).to({x:969.3},0).wait(1).to({x:984.65},0).wait(1).to({x:1000.05,y:71.9},0).wait(1));

	// MovingButtonBG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98C355").s().p("AkCJbQhshqABiZIAAqvQgBiYBshsQBrhrCXAAQCYAABrBrQBrBsAACYIAAKvQAACZhrBqQhrBsiYAAQiXAAhrhsg");
	this.shape.setTransform(550,105);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69952F").s().p("AlgK6QiTiTAAjPIAAqvQAAjPCTiTQCSiTDOAAQDOAACTCTQCTCTAADPIAAKvQAADPiTCTQiTCTjOAAQjOAAiSiTg");
	this.shape_1.setTransform(550,105);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#98C355").s().p("AkQJpQhxhxAAigIAAqvQAAigBxhxQBxhxCfAAQCgAABxBxQBxBxAACgIAAKvQAACghxBxQhxBxigAAQifAAhxhxg");
	this.shape_2.setTransform(550,105);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#709C34").s().p("AlhK6QiSiTAAjPIAAqvQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAKvQAADPiSCTQiUCSjOAAQjNAAiUiSgAkQpoQhxBxAACgIAAKvQAACgBxBxQBxBxCfAAQCgAABxhxQBxhxAAigIAAqvQAAighxhxQhxhxigAAQifAAhxBxg");
	this.shape_3.setTransform(550,105);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#98C355").s().p("AkdJ2Qh3h2AAioIAAqvQAAioB3h3QB2h2CnAAQCoAAB2B2QB3B3AACoIAAKvQAACoh3B2Qh2B3ioAAQinAAh2h3g");
	this.shape_4.setTransform(550,105);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76A23A").s().p("AlhK6QiSiTAAjPIAAqvQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAKvQAADPiSCTQiUCSjOAAQjNAAiUiSgAkdp2Qh3B3AACoIAAKvQAACoB3B2QB2B3CnAAQCoAAB2h3QB3h2AAioIAAqvQAAioh3h3Qh2h2ioAAQinAAh2B2g");
	this.shape_5.setTransform(550,105);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#98C355").s().p("AkrKEQh8h8AAiwIAAqvQAAiwB8h8QB9h8CuAAQCvAAB9B8QB8B8AACwIAAKvQAACwh8B8Qh9B8ivAAQiuAAh9h8g");
	this.shape_6.setTransform(550,105);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7DA93F").s().p("AlhK6QiSiTAAjPIAAqvQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAKvQAADPiSCTQiUCSjOAAQjNAAiUiSgAkrqDQh8B8AACwIAAKvQAACwB8B8QB9B8CuAAQCvAAB9h8QB8h8AAiwIAAqvQAAiwh8h8Qh9h8ivAAQiuAAh9B8g");
	this.shape_7.setTransform(550,105);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#98C355").s().p("Ak4KRQiCiBAAi4IAAqvQAAi4CCiCQCCiBC2AAQC3AACCCBQCCCCAAC4IAAKvQAAC4iCCBQiCCCi3AAQi2AAiCiCg");
	this.shape_8.setTransform(550,105);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#84AF45").s().p("AlhK6QiSiTAAjPIAAqvQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAKvQAADPiSCTQiUCSjOAAQjNAAiUiSgAk4qRQiCCCAAC4IAAKvQAAC4CCCBQCCCCC2AAQC3AACCiCQCCiBAAi4IAAqvQAAi4iCiCQiCiBi3AAQi2AAiCCBg");
	this.shape_9.setTransform(550,105);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#98C355").s().p("AlGKfQiHiIAAi/IAAqvQAAi/CHiIQCIiHC+AAQC/AACICHQCHCIAAC/IAAKvQAAC/iHCIQiICHi/AAQi+AAiIiHg");
	this.shape_10.setTransform(550,105);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8BB64A").s().p("AlhK6QiSiTAAjPIAAqvQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAKvQAADPiSCTQiUCSjOAAQjNAAiUiSgAlGqeQiHCIAAC/IAAKvQAAC/CHCIQCICHC+AAQC/AACIiHQCHiIAAi/IAAqvQAAi/iHiIQiIiHi/AAQi+AAiICHg");
	this.shape_11.setTransform(550,105);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#98C355").s().p("AlTKsQiNiNAAjHIAAqvQAAjHCNiOQCNiMDGAAQDHAACNCMQCNCOAADHIAAKvQAADHiNCNQiNCNjHAAQjGAAiNiNg");
	this.shape_12.setTransform(550,105);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#91BC50").s().p("AlhK6QiSiTAAjPIAAqvQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAKvQAADPiSCTQiUCSjOAAQjNAAiUiSgAlTqsQiNCOAADHIAAKvQAADHCNCNQCNCNDGAAQDHAACNiNQCNiNAAjHIAAqvQAAjHiNiOQiNiMjHAAQjGAAiNCMg");
	this.shape_13.setTransform(550,105);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#98C355").s().p("AlhK6QiSiTAAjPIAAqvQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAKvQAADPiSCTQiUCSjOAAQjNAAiUiSg");
	this.shape_14.setTransform(550,105);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#98C355").s().p("AlhJWQiSiTAAjPIAAnnQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAHnQAADPiSCTQiUCTjOAAQjNAAiUiTg");
	this.shape_15.setTransform(550,95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#98C355").s().p("AlhHyQiSiTAAjPIAAkfQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAAEfQAADPiSCTQiUCTjOAAQjNAAiUiTg");
	this.shape_16.setTransform(550,85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#98C355").s().p("AlhGOQiSiTAAjOIAAhYQAAjPCSiTQCUiTDNAAQDOAACUCTQCSCTAADPIAABYQAADOiSCTQiUCSjOAAQjNAAiUiSg");
	this.shape_17.setTransform(550,75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#98C355").s().p("AlhFiQiSiSAAjQQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADQiSCSQiTCSjPAAQjOAAiTiSg");
	this.shape_18.setTransform(550,72.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#98C355").s().p("AkKHRQhUgYhHg2Qg2gpgqg2Qhhh+AAimQAAikBgh+QAqg2A3gqQBGg1BSgXQB/glCPAAQCMAAB+AkQBVAXBHA3QA1AoApA1QBhB9ABClIAAADQgBCkhfB9QgqA4g4AqQhFAzhRAXQiAAmiPAAQiMAAh+gjg");
	this.shape_19.setTransform(550,72.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#98C355").s().p("AkxHiQhkgLhVgzQhAgng1g6Qh6iIAAi7QAAi5B6iIQA1g8BBgmQBUgyBigLQCXgTCdAAQCcAACVASQBlAMBVAzQBAAmAzA6QB6CIABC6IAAACQgBC5h4CHQg3A8hCAnQhTAxhhALQiXATieAAQicAAiUgSg");
	this.shape_20.setTransform(550,72.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#98C355").s().p("AlgK6QiTiTAAjPIAAqvQAAjPCTiTQCSiTDOAAQDPAACSCTQCTCTAADPIAAKvQAADPiTCTQiSCTjPAAQjOAAiSiTg");
	this.shape_21.setTransform(550,72.55,1,1,90);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#98C355").s().p("AnxH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAIPjAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_22.setTransform(550,72.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#98C355").s().p("AqLH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAIUXAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_23.setTransform(550,72.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#98C355").s().p("AslH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAIZLAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_24.setTransform(550,72.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#98C355").s().p("Au/H0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAId/AAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_25.setTransform(550,72.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#98C355").s().p("AxZH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMAizAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_26.setTransform(550,72.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#98C355").s().p("AzzH0QjPAAiSiSQiTiTAAjPQAAjOCTiTQCSiSDPAAMAnnAAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAg");
	this.shape_27.setTransform(550,72.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#98C355").s().p("A2NH0QjOAAiTiSQiTiTAAjPQAAjOCTiTQCTiSDOAAMAsbAAAQDOAACTCSQCTCTAADOQAADPiTCTQiTCSjOAAg");
	this.shape_28.setTransform(550,72.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#98C355").s().p("A4nH0QjOAAiTiSQiTiTAAjPQAAjOCTiTQCTiSDOAAMAxPAAAQDOAACTCSQCTCTAADOQAADPiTCTQiTCSjOAAg");
	this.shape_29.setTransform(550,72.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#98C355").s().p("A7BH0QjOAAiTiSQiTiTAAjPQAAjOCTiTQCTiSDOAAMA2DAAAQDOAACTCSQCTCTAADOQAADPiTCTQiTCSjOAAg");
	this.shape_30.setTransform(550,72.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#98C355").s().p("A9bH0QjOAAiTiSQiTiTAAjPQAAjOCTiTQCTiSDOAAMA63AAAQDOAACTCSQCTCTAADOQAADPiTCTQiTCSjOAAg");
	this.shape_31.setTransform(550,72.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#98C355").s().p("A/0H0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMA/pAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_32.setTransform(550,72.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#98C355").s().p("EgiOAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMBEdAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_33.setTransform(550,72.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#98C355").s().p("EgkoAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMBJRAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_34.setTransform(550,72.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#98C355").s().p("EgnCAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMBOFAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_35.setTransform(550,72.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#98C355").s().p("EgpcAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMBS5AAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_36.setTransform(550,72.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#98C355").s().p("Egr2AH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMBXtAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_37.setTransform(550,72.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#98C355").s().p("EguQAH0QjPAAiSiSQiTiTAAjPQAAjOCTiTQCSiSDPAAMBchAAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAg");
	this.shape_38.setTransform(550,72.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#98C355").s().p("EgwqAH0QjPAAiSiSQiTiTAAjPQAAjOCTiTQCSiSDPAAMBhVAAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAg");
	this.shape_39.setTransform(550,72.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#98C355").s().p("EgzEAH0QjPAAiSiSQiTiTAAjPQAAjOCTiTQCSiSDPAAMBmJAAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAg");
	this.shape_40.setTransform(550,72.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#98C355").s().p("Eg1eAH0QjPAAiSiSQiTiTAAjPQAAjOCTiTQCSiSDPAAMBq9AAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAg");
	this.shape_41.setTransform(550,72.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#98C355").s().p("Eg34AH0QjOAAiTiSQiTiTAAjPQAAjOCTiTQCTiSDOAAMBvxAAAQDOAACTCSQCTCTAADOQAADPiTCTQiTCSjOAAg");
	this.shape_42.setTransform(550,72.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#98C355").s().p("Eg6RAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMB0jAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_43.setTransform(550,72.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#98C355").s().p("Eg8rAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMB5XAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_44.setTransform(550,72.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#98C355").s().p("Eg/FAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMB+LAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_45.setTransform(550,72.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#98C355").s().p("EhBfAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMCC/AAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_46.setTransform(550,72.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#98C355").s().p("EhD5AH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMCHzAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_47.setTransform(550,72.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#98C355").s().p("EhGTAH0QjPAAiTiSQiSiTAAjPQAAjOCSiTQCTiSDPAAMCMnAAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAg");
	this.shape_48.setTransform(550,72.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},24).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape}]},6).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(1));

	// StillButton
	this.Button1 = new lib.ClickableButton();
	this.Button1.name = "Button1";
	this.Button1.parent = this;
	this.Button1.setTransform(550,105);
	new cjs.ButtonHelper(this.Button1, 0, 1, 2, false, new lib.ClickableButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Button1).to({_off:true},24).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,125.6,450,64.9);
// library properties:
lib.properties = {
	id: 'CD46870EE64144039F8E3EE52A67756D',
	width: 1100,
	height: 210,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CD46870EE64144039F8E3EE52A67756D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;