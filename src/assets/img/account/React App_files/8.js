(this["webpackJsonpecommerce"] = this["webpackJsonpecommerce"] || []).push([[8],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-multi-carousel/lib/styles.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./node_modules/react-multi-carousel/lib/styles.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./revicons.woff */ "./node_modules/react-multi-carousel/lib/revicons.woff");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./revicons.ttf */ "./node_modules/react-multi-carousel/lib/revicons.ttf");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./revicons.eot */ "./node_modules/react-multi-carousel/lib/revicons.eot");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@font-face{font-family:\"revicons\";fallback:fallback;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff'),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf'),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('ttf')}.react-multi-carousel-list{display:flex;align-items:center;overflow:hidden;position:relative}.react-multi-carousel-track{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;position:relative;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform,transition}.react-multiple-carousel__arrow{position:absolute;outline:0;transition:all .5s;border-radius:35px;z-index:1000;border:0;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer}.react-multiple-carousel__arrow:hover{background:rgba(0,0,0,0.8)}.react-multiple-carousel__arrow::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative}.react-multiple-carousel__arrow--left{left:calc(4% + 1px)}.react-multiple-carousel__arrow--left::before{content:\"\\e824\"}.react-multiple-carousel__arrow--right{right:calc(4% + 1px)}.react-multiple-carousel__arrow--right::before{content:\"\\e825\"}.react-multi-carousel-dot-list{position:absolute;bottom:0;display:flex;left:0;right:0;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center}.react-multi-carousel-dot button{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;transition:background .5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer}.react-multi-carousel-dot button:hover:active{background:#080808}.react-multi-carousel-dot--active button{background:#080808}.react-multi-carousel-item{transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.react-multi-carousel-item{flex-shrink:0 !important}.react-multi-carousel-track{overflow:visible !important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-multi-carousel/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-multi-carousel/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/react-multi-carousel/lib/index.js");

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/Arrows.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/Arrows.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    LeftArrow = function (_a) {
  var customLeftArrow = _a.customLeftArrow,
      getState = _a.getState,
      previous = _a.previous;
  return customLeftArrow ? React.cloneElement(customLeftArrow, {
    onClick: function () {
      return previous();
    },
    carouselState: getState()
  }) : React.createElement("button", {
    "aria-label": "Go to previous slide",
    className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left",
    onClick: function () {
      return previous();
    }
  });
};

exports.LeftArrow = LeftArrow;

var RightArrow = function (_a) {
  var customRightArrow = _a.customRightArrow,
      next = _a.next,
      getState = _a.getState;
  return customRightArrow ? React.cloneElement(customRightArrow, {
    onClick: function () {
      return next();
    },
    carouselState: getState()
  }) : React.createElement("button", {
    "aria-label": "Go to next slide",
    className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right",
    onClick: function () {
      return next();
    }
  });
};

exports.RightArrow = RightArrow;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/Carousel.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/Carousel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    return (extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    })(d, b);
  };

  return function (d, b) {
    function __() {
      this.constructor = d;
    }

    extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/react-multi-carousel/lib/utils/index.js"),
    types_1 = __webpack_require__(/*! ./types */ "./node_modules/react-multi-carousel/lib/types.js"),
    Dots_1 = __webpack_require__(/*! ./Dots */ "./node_modules/react-multi-carousel/lib/Dots.js"),
    Arrows_1 = __webpack_require__(/*! ./Arrows */ "./node_modules/react-multi-carousel/lib/Arrows.js"),
    CarouselItems_1 = __webpack_require__(/*! ./CarouselItems */ "./node_modules/react-multi-carousel/lib/CarouselItems.js"),
    common_1 = __webpack_require__(/*! ./utils/common */ "./node_modules/react-multi-carousel/lib/utils/common.js"),
    defaultTransitionDuration = 400,
    defaultTransition = "transform 400ms ease-in-out",
    Carousel = function (_super) {
  function Carousel(props) {
    var _this = _super.call(this, props) || this;

    return _this.containerRef = React.createRef(), _this.listRef = React.createRef(), _this.state = {
      itemWidth: 0,
      slidesToShow: 0,
      currentSlide: 0,
      totalItems: React.Children.count(props.children),
      deviceType: "",
      domLoaded: !1,
      transform: 0,
      containerWidth: 0
    }, _this.onResize = _this.onResize.bind(_this), _this.handleDown = _this.handleDown.bind(_this), _this.handleMove = _this.handleMove.bind(_this), _this.handleOut = _this.handleOut.bind(_this), _this.onKeyUp = _this.onKeyUp.bind(_this), _this.handleEnter = _this.handleEnter.bind(_this), _this.setIsInThrottle = _this.setIsInThrottle.bind(_this), _this.next = utils_1.throttle(_this.next.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.previous = utils_1.throttle(_this.previous.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.goToSlide = utils_1.throttle(_this.goToSlide.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.onMove = !1, _this.initialX = 0, _this.lastX = 0, _this.isAnimationAllowed = !1, _this.direction = "", _this.initialY = 0, _this.isInThrottle = !1, _this.transformPlaceHolder = 0, _this;
  }

  return __extends(Carousel, _super), Carousel.prototype.resetTotalItems = function () {
    var _this = this,
        totalItems = React.Children.count(this.props.children),
        currentSlide = utils_1.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, totalItems));

    this.setState({
      totalItems: totalItems,
      currentSlide: currentSlide
    }, function () {
      _this.setContainerAndItemWidth(_this.state.slidesToShow, !0);
    });
  }, Carousel.prototype.setIsInThrottle = function (isInThrottle) {
    void 0 === isInThrottle && (isInThrottle = !1), this.isInThrottle = isInThrottle;
  }, Carousel.prototype.setTransformDirectly = function (position, withAnimation) {
    var additionalTransfrom = this.props.additionalTransfrom,
        currentTransform = common_1.getTransform(this.state, this.props, position);
    this.transformPlaceHolder = position, this.listRef && this.listRef.current && (this.setAnimationDirectly(withAnimation), this.listRef.current.style.transform = "translate3d(" + (currentTransform + additionalTransfrom) + "px,0,0)");
  }, Carousel.prototype.setAnimationDirectly = function (animationAllowed) {
    this.listRef && this.listRef.current && (this.listRef.current.style.transition = animationAllowed ? this.props.customTransition || defaultTransition : "none");
  }, Carousel.prototype.componentDidMount = function () {
    this.setState({
      domLoaded: !0
    }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(!0), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && this.props.autoPlaySpeed && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, Carousel.prototype.setClones = function (slidesToShow, itemWidth, forResizing, resetCurrentSlide) {
    var _this = this;

    void 0 === resetCurrentSlide && (resetCurrentSlide = !1), this.isAnimationAllowed = !1;
    var childrenArr = React.Children.toArray(this.props.children),
        initialSlide = utils_1.getInitialSlideInInfiniteMode(slidesToShow || this.state.slidesToShow, childrenArr),
        clones = utils_1.getClones(this.state.slidesToShow, childrenArr),
        currentSlide = childrenArr.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
    this.setState({
      totalItems: clones.length,
      currentSlide: forResizing && !resetCurrentSlide ? currentSlide : initialSlide
    }, function () {
      _this.correctItemsPosition(itemWidth || _this.state.itemWidth);
    });
  }, Carousel.prototype.setItemsToShow = function (shouldCorrectItemPosition, resetCurrentSlide) {
    var _this = this,
        responsive = this.props.responsive;

    Object.keys(responsive).forEach(function (item) {
      var _a = responsive[item],
          breakpoint = _a.breakpoint,
          items = _a.items,
          max = breakpoint.max,
          min = breakpoint.min;
      window.innerWidth >= min && window.innerWidth <= max && (_this.setState({
        slidesToShow: items,
        deviceType: item
      }), _this.setContainerAndItemWidth(items, shouldCorrectItemPosition, resetCurrentSlide));
    });
  }, Carousel.prototype.setContainerAndItemWidth = function (slidesToShow, shouldCorrectItemPosition, resetCurrentSlide) {
    var _this = this;

    if (this.containerRef && this.containerRef.current) {
      var containerWidth = this.containerRef.current.offsetWidth,
          itemWidth_1 = utils_1.getItemClientSideWidth(this.props, slidesToShow, containerWidth);
      this.setState({
        containerWidth: containerWidth,
        itemWidth: itemWidth_1
      }, function () {
        _this.props.infinite && _this.setClones(slidesToShow, itemWidth_1, shouldCorrectItemPosition, resetCurrentSlide);
      }), shouldCorrectItemPosition && this.correctItemsPosition(itemWidth_1);
    }
  }, Carousel.prototype.correctItemsPosition = function (itemWidth, isAnimationAllowed, setToDomDirectly) {
    isAnimationAllowed && (this.isAnimationAllowed = !0), !isAnimationAllowed && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
    var nextTransform = this.state.totalItems < this.state.slidesToShow ? 0 : -itemWidth * this.state.currentSlide;
    setToDomDirectly && this.setTransformDirectly(nextTransform, !0), this.setState({
      transform: nextTransform
    });
  }, Carousel.prototype.onResize = function (value) {
    var shouldCorrectItemPosition;
    shouldCorrectItemPosition = !!this.props.infinite && ("boolean" != typeof value || !value), this.setItemsToShow(shouldCorrectItemPosition);
  }, Carousel.prototype.componentDidUpdate = function (_a, _b) {
    var _this = this,
        keyBoardControl = _a.keyBoardControl,
        autoPlay = _a.autoPlay,
        children = _a.children,
        containerWidth = _b.containerWidth,
        domLoaded = _b.domLoaded,
        currentSlide = _b.currentSlide;

    this.containerRef && this.containerRef.current && this.containerRef.current.offsetWidth !== containerWidth && setTimeout(function () {
      _this.setItemsToShow(!0);
    }, this.props.transitionDuration || defaultTransitionDuration), keyBoardControl && !this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), !keyBoardControl && this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), autoPlay && !this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), autoPlay || !this.props.autoPlay || this.autoPlay || (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)), children.length !== this.props.children.length ? setTimeout(function () {
      _this.props.infinite ? _this.setClones(_this.state.slidesToShow, _this.state.itemWidth, !0, !0) : _this.resetTotalItems();
    }, this.props.transitionDuration || defaultTransitionDuration) : this.props.infinite && this.state.currentSlide !== currentSlide && this.correctClonesPosition({
      domLoaded: domLoaded
    }), this.transformPlaceHolder !== this.state.transform && (this.transformPlaceHolder = this.state.transform);
  }, Carousel.prototype.correctClonesPosition = function (_a) {
    var _this = this,
        domLoaded = _a.domLoaded,
        childrenArr = React.Children.toArray(this.props.children),
        _b = utils_1.checkClonesPosition(this.state, childrenArr, this.props),
        isReachingTheEnd = _b.isReachingTheEnd,
        isReachingTheStart = _b.isReachingTheStart,
        nextSlide = _b.nextSlide,
        nextPosition = _b.nextPosition;

    this.state.domLoaded && domLoaded && (isReachingTheEnd || isReachingTheStart) && (this.isAnimationAllowed = !1, setTimeout(function () {
      _this.setState({
        transform: nextPosition,
        currentSlide: nextSlide
      });
    }, this.props.transitionDuration || defaultTransitionDuration));
  }, Carousel.prototype.next = function (slidesHavePassed) {
    var _this = this;

    void 0 === slidesHavePassed && (slidesHavePassed = 0);
    var _a = this.props,
        afterChange = _a.afterChange,
        beforeChange = _a.beforeChange;

    if (!utils_1.notEnoughChildren(this.state)) {
      var _b = utils_1.populateNextSlides(this.state, this.props, slidesHavePassed),
          nextSlides = _b.nextSlides,
          nextPosition = _b.nextPosition,
          previousSlide = this.state.currentSlide;

      void 0 !== nextSlides && void 0 !== nextPosition && ("function" == typeof beforeChange && beforeChange(nextSlides, this.getState()), this.isAnimationAllowed = !0, this.setState({
        transform: nextPosition,
        currentSlide: nextSlides
      }, function () {
        "function" == typeof afterChange && setTimeout(function () {
          afterChange(previousSlide, _this.getState());
        }, _this.props.transitionDuration || defaultTransitionDuration);
      }));
    }
  }, Carousel.prototype.previous = function (slidesHavePassed) {
    var _this = this;

    void 0 === slidesHavePassed && (slidesHavePassed = 0);
    var _a = this.props,
        afterChange = _a.afterChange,
        beforeChange = _a.beforeChange;

    if (!utils_1.notEnoughChildren(this.state)) {
      var _b = utils_1.populatePreviousSlides(this.state, this.props, slidesHavePassed),
          nextSlides = _b.nextSlides,
          nextPosition = _b.nextPosition;

      if (void 0 !== nextSlides && void 0 !== nextPosition) {
        var previousSlide = this.state.currentSlide;
        "function" == typeof beforeChange && beforeChange(nextSlides, this.getState()), this.isAnimationAllowed = !0, this.setState({
          transform: nextPosition,
          currentSlide: nextSlides
        }, function () {
          "function" == typeof afterChange && setTimeout(function () {
            afterChange(previousSlide, _this.getState());
          }, _this.props.transitionDuration || defaultTransitionDuration);
        });
      }
    }
  }, Carousel.prototype.componentWillUnmount = function () {
    window.removeEventListener("resize", this.onResize), this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0);
  }, Carousel.prototype.resetMoveStatus = function () {
    this.onMove = !1, this.initialX = 0, this.lastX = 0, this.direction = "", this.initialY = 0;
  }, Carousel.prototype.handleDown = function (e) {
    if (!(!types_1.isMouseMoveEvent(e) && !this.props.swipeable || types_1.isMouseMoveEvent(e) && !this.props.draggable || this.isInThrottle)) {
      var _a = types_1.isMouseMoveEvent(e) ? e : e.touches[0],
          clientX = _a.clientX,
          clientY = _a.clientY;

      this.onMove = !0, this.initialX = clientX, this.initialY = clientY, this.lastX = clientX, this.isAnimationAllowed = !1;
    }
  }, Carousel.prototype.handleMove = function (e) {
    if (!(!types_1.isMouseMoveEvent(e) && !this.props.swipeable || types_1.isMouseMoveEvent(e) && !this.props.draggable || utils_1.notEnoughChildren(this.state))) {
      var _a = types_1.isMouseMoveEvent(e) ? e : e.touches[0],
          clientX = _a.clientX,
          clientY = _a.clientY,
          diffX = this.initialX - clientX,
          diffY = this.initialY - clientY;

      if (!types_1.isMouseMoveEvent(e) && this.autoPlay && this.props.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), this.onMove) {
        if (!(Math.abs(diffX) > Math.abs(diffY))) return;

        var _b = utils_1.populateSlidesOnMouseTouchMove(this.state, this.props, this.initialX, this.lastX, clientX, this.transformPlaceHolder),
            direction = _b.direction,
            nextPosition = _b.nextPosition,
            canContinue = _b.canContinue;

        direction && (this.direction = direction, canContinue && void 0 !== nextPosition && this.setTransformDirectly(nextPosition)), this.lastX = clientX;
      }
    }
  }, Carousel.prototype.handleOut = function (e) {
    this.props.autoPlay && !this.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
    var shouldDisableOnMobile = "touchend" === e.type && !this.props.swipeable,
        shouldDisableOnDesktop = ("mouseleave" === e.type || "mouseup" === e.type) && !this.props.draggable;

    if (!shouldDisableOnMobile && !shouldDisableOnDesktop && this.onMove) {
      if (this.setAnimationDirectly(!0), "right" === this.direction) if (this.initialX - this.lastX >= this.props.minimumTouchDrag) {
        var slidesHavePassed = Math.round((this.initialX - this.lastX) / this.state.itemWidth);
        this.next(slidesHavePassed);
      } else this.correctItemsPosition(this.state.itemWidth, !0, !0);
      if ("left" === this.direction) if (this.lastX - this.initialX > this.props.minimumTouchDrag) {
        slidesHavePassed = Math.round((this.lastX - this.initialX) / this.state.itemWidth);
        this.previous(slidesHavePassed);
      } else this.correctItemsPosition(this.state.itemWidth, !0, !0);
      this.resetMoveStatus();
    }
  }, Carousel.prototype.onKeyUp = function (e) {
    switch (e.keyCode) {
      case 37:
        return this.previous();

      case 39:
        return this.next();
    }
  }, Carousel.prototype.handleEnter = function () {
    this.autoPlay && this.props.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0);
  }, Carousel.prototype.goToSlide = function (slide, skipCallbacks) {
    var _this = this;

    if (!this.isInThrottle) {
      var itemWidth = this.state.itemWidth,
          _a = this.props,
          afterChange = _a.afterChange,
          beforeChange = _a.beforeChange,
          previousSlide = this.state.currentSlide;
      "function" != typeof beforeChange || skipCallbacks && ("object" != typeof skipCallbacks || skipCallbacks.skipBeforeChange) || beforeChange(slide, this.getState()), this.isAnimationAllowed = !0, this.setState({
        currentSlide: slide,
        transform: -itemWidth * slide
      }, function () {
        _this.props.infinite && _this.correctClonesPosition({
          domLoaded: !0
        }), "function" != typeof afterChange || skipCallbacks && ("object" != typeof skipCallbacks || skipCallbacks.skipAfterChange) || setTimeout(function () {
          afterChange(previousSlide, _this.getState());
        }, _this.props.transitionDuration || defaultTransitionDuration);
      });
    }
  }, Carousel.prototype.getState = function () {
    return this.state;
  }, Carousel.prototype.renderLeftArrow = function () {
    var _this = this,
        customLeftArrow = this.props.customLeftArrow;

    return React.createElement(Arrows_1.LeftArrow, {
      customLeftArrow: customLeftArrow,
      getState: function () {
        return _this.getState();
      },
      previous: this.previous
    });
  }, Carousel.prototype.renderRightArrow = function () {
    var _this = this,
        customRightArrow = this.props.customRightArrow;

    return React.createElement(Arrows_1.RightArrow, {
      customRightArrow: customRightArrow,
      getState: function () {
        return _this.getState();
      },
      next: this.next
    });
  }, Carousel.prototype.renderButtonGroups = function () {
    var _this = this,
        customButtonGroup = this.props.customButtonGroup;

    return customButtonGroup ? React.cloneElement(customButtonGroup, {
      previous: function () {
        return _this.previous();
      },
      next: function () {
        return _this.next();
      },
      goToSlide: function (slideIndex, skipCallbacks) {
        return _this.goToSlide(slideIndex, skipCallbacks);
      },
      carouselState: this.getState()
    }) : null;
  }, Carousel.prototype.renderDotsList = function () {
    var _this = this;

    return React.createElement(Dots_1.default, {
      state: this.state,
      props: this.props,
      goToSlide: this.goToSlide,
      getState: function () {
        return _this.getState();
      }
    });
  }, Carousel.prototype.renderCarouselItems = function () {
    var clones = [];

    if (this.props.infinite) {
      var childrenArr = React.Children.toArray(this.props.children);
      clones = utils_1.getClones(this.state.slidesToShow, childrenArr);
    }

    return React.createElement(CarouselItems_1.default, {
      clones: clones,
      goToSlide: this.goToSlide,
      state: this.state,
      notEnoughChildren: utils_1.notEnoughChildren(this.state),
      props: this.props
    });
  }, Carousel.prototype.render = function () {
    var _a = this.props,
        deviceType = _a.deviceType,
        arrows = _a.arrows,
        removeArrowOnDeviceType = _a.removeArrowOnDeviceType,
        infinite = _a.infinite,
        containerClass = _a.containerClass,
        sliderClass = _a.sliderClass,
        customTransition = _a.customTransition,
        additionalTransfrom = _a.additionalTransfrom,
        renderDotsOutside = _a.renderDotsOutside,
        renderButtonGroupOutside = _a.renderButtonGroupOutside,
        className = _a.className;
     true && utils_1.throwError(this.state, this.props);

    var _b = utils_1.getInitialState(this.state, this.props),
        shouldRenderOnSSR = _b.shouldRenderOnSSR,
        shouldRenderAtAll = _b.shouldRenderAtAll,
        isLeftEndReach = utils_1.isInLeftEnd(this.state),
        isRightEndReach = utils_1.isInRightEnd(this.state),
        shouldShowArrows = arrows && !(removeArrowOnDeviceType && (deviceType && -1 < removeArrowOnDeviceType.indexOf(deviceType) || this.state.deviceType && -1 < removeArrowOnDeviceType.indexOf(this.state.deviceType))) && !utils_1.notEnoughChildren(this.state) && shouldRenderAtAll,
        disableLeftArrow = !infinite && isLeftEndReach,
        disableRightArrow = !infinite && isRightEndReach,
        currentTransform = common_1.getTransform(this.state, this.props);

    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "react-multi-carousel-list " + containerClass + " " + className,
      ref: this.containerRef
    }, React.createElement("ul", {
      ref: this.listRef,
      className: "react-multi-carousel-track " + sliderClass,
      style: {
        transition: this.isAnimationAllowed ? customTransition || defaultTransition : "none",
        overflow: shouldRenderOnSSR ? "hidden" : "unset",
        transform: "translate3d(" + (currentTransform + additionalTransfrom) + "px,0,0)"
      },
      onMouseMove: this.handleMove,
      onMouseDown: this.handleDown,
      onMouseUp: this.handleOut,
      onMouseEnter: this.handleEnter,
      onMouseLeave: this.handleOut,
      onTouchStart: this.handleDown,
      onTouchMove: this.handleMove,
      onTouchEnd: this.handleOut
    }, this.renderCarouselItems()), shouldShowArrows && !disableLeftArrow && this.renderLeftArrow(), shouldShowArrows && !disableRightArrow && this.renderRightArrow(), shouldRenderAtAll && !renderButtonGroupOutside && this.renderButtonGroups(), shouldRenderAtAll && !renderDotsOutside && this.renderDotsList()), shouldRenderAtAll && renderDotsOutside && this.renderDotsList(), shouldRenderAtAll && renderButtonGroupOutside && this.renderButtonGroups());
  }, Carousel.defaultProps = {
    slidesToSlide: 1,
    infinite: !1,
    draggable: !0,
    swipeable: !0,
    arrows: !0,
    containerClass: "",
    sliderClass: "",
    itemClass: "",
    keyBoardControl: !0,
    autoPlaySpeed: 3e3,
    showDots: !1,
    renderDotsOutside: !1,
    renderButtonGroupOutside: !1,
    minimumTouchDrag: 80,
    className: "",
    dotListClass: "",
    focusOnSelect: !1,
    centerMode: !1,
    additionalTransfrom: 0
  }, Carousel;
}(React.Component);

exports.default = Carousel;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/CarouselItems.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/CarouselItems.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/react-multi-carousel/lib/utils/index.js"),
    CarouselItems = function (_a) {
  var props = _a.props,
      state = _a.state,
      goToSlide = _a.goToSlide,
      clones = _a.clones,
      notEnoughChildren = _a.notEnoughChildren,
      itemWidth = state.itemWidth,
      children = props.children,
      infinite = props.infinite,
      itemClass = props.itemClass,
      partialVisbile = props.partialVisbile,
      partialVisible = props.partialVisible,
      _b = utils_1.getInitialState(state, props),
      flexBisis = _b.flexBisis,
      shouldRenderOnSSR = _b.shouldRenderOnSSR,
      domFullyLoaded = _b.domFullyLoaded,
      partialVisibilityGutter = _b.partialVisibilityGutter;

  return _b.shouldRenderAtAll ? (partialVisbile && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), React.createElement(React.Fragment, null, (infinite ? clones : React.Children.toArray(children)).map(function (child, index) {
    return React.createElement("li", {
      key: index,
      "data-index": index,
      onClick: function () {
        props.focusOnSelect && goToSlide(index);
      },
      "aria-hidden": utils_1.getIfSlideIsVisbile(index, state) ? "false" : "true",
      style: {
        flex: shouldRenderOnSSR ? "1 0 " + flexBisis + "%" : "auto",
        position: "relative",
        width: domFullyLoaded ? ((partialVisbile || partialVisible) && partialVisibilityGutter && !notEnoughChildren ? itemWidth - partialVisibilityGutter : itemWidth) + "px" : "auto"
      },
      className: "react-multi-carousel-item " + (utils_1.getIfSlideIsVisbile(index, state) ? "react-multi-carousel-item--active" : "") + " " + itemClass
    }, child);
  }))) : null;
};

exports.default = CarouselItems;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/Dots.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/Dots.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    clones_1 = __webpack_require__(/*! ./utils/clones */ "./node_modules/react-multi-carousel/lib/utils/clones.js"),
    dots_1 = __webpack_require__(/*! ./utils/dots */ "./node_modules/react-multi-carousel/lib/utils/dots.js"),
    common_1 = __webpack_require__(/*! ./utils/common */ "./node_modules/react-multi-carousel/lib/utils/common.js"),
    Dots = function (_a) {
  var props = _a.props,
      state = _a.state,
      goToSlide = _a.goToSlide,
      getState = _a.getState,
      showDots = props.showDots,
      customDot = props.customDot,
      dotListClass = props.dotListClass,
      infinite = props.infinite,
      children = props.children;
  if (!showDots || common_1.notEnoughChildren(state)) return null;
  var numberOfDotsToShow,
      currentSlide = state.currentSlide,
      slidesToShow = state.slidesToShow,
      slidesToSlide = common_1.getSlidesToSlide(state, props),
      childrenArr = React.Children.toArray(children);
  numberOfDotsToShow = infinite ? Math.ceil(childrenArr.length / slidesToSlide) : Math.ceil((childrenArr.length - slidesToShow) / slidesToSlide) + 1;
  var nextSlidesTable = dots_1.getLookupTableForNextSlides(numberOfDotsToShow, state, props, childrenArr),
      lookupTable = clones_1.getOriginalIndexLookupTableByClones(slidesToShow, childrenArr),
      currentSlides = lookupTable[currentSlide];
  return React.createElement("ul", {
    className: "react-multi-carousel-dot-list " + dotListClass
  }, Array(numberOfDotsToShow).fill(0).map(function (_, index) {
    var isActive, nextSlide;

    if (infinite) {
      nextSlide = nextSlidesTable[index];
      var cloneIndex = lookupTable[nextSlide];
      isActive = currentSlides === cloneIndex || cloneIndex <= currentSlides && currentSlides < cloneIndex + slidesToSlide;
    } else {
      var maximumNextSlide = childrenArr.length - slidesToShow,
          possibileNextSlides = index * slidesToSlide;
      isActive = (nextSlide = maximumNextSlide < possibileNextSlides ? maximumNextSlide : possibileNextSlides) === currentSlide || nextSlide < currentSlide && currentSlide < nextSlide + slidesToSlide && currentSlide < childrenArr.length - slidesToShow;
    }

    return customDot ? React.cloneElement(customDot, {
      index: index,
      active: isActive,
      key: index,
      onClick: function () {
        return goToSlide(nextSlide);
      },
      carouselState: getState()
    }) : React.createElement("li", {
      "data-index": index,
      key: index,
      className: "react-multi-carousel-dot " + (isActive ? "react-multi-carousel-dot--active" : "")
    }, React.createElement("button", {
      "aria-label": "Go to slide " + (index + 1),
      onClick: function () {
        return goToSlide(nextSlide);
      }
    }));
  }));
};

exports.default = Dots;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var Carousel_1 = __webpack_require__(/*! ./Carousel */ "./node_modules/react-multi-carousel/lib/Carousel.js");

exports.default = Carousel_1.default;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/revicons.eot":
/*!************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/revicons.eot ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/revicons.2feb69cc.eot";

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/revicons.ttf":
/*!************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/revicons.ttf ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/revicons.17629a5d.ttf";

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/revicons.woff":
/*!*************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/revicons.woff ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/revicons.04eb8fc5.woff";

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-multi-carousel/lib/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-multi-carousel/lib/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-multi-carousel/lib/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/types.js":
/*!********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/types.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    return (extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    })(d, b);
  };

  return function (d, b) {
    function __() {
      this.constructor = d;
    }

    extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function isMouseMoveEvent(e) {
  return "clientY" in e;
}

exports.isMouseMoveEvent = isMouseMoveEvent;

var Carousel = function (_super) {
  function Carousel() {
    return null !== _super && _super.apply(this, arguments) || this;
  }

  return __extends(Carousel, _super), Carousel;
}(React.Component);

exports.default = Carousel;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/clones.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/clones.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getOriginalCounterPart(index, _a, childrenArr) {
  var slidesToShow = _a.slidesToShow,
      currentSlide = _a.currentSlide;
  return childrenArr.length > 2 * slidesToShow ? index + 2 * slidesToShow : currentSlide >= childrenArr.length ? childrenArr.length + index : index;
}

function getOriginalIndexLookupTableByClones(slidesToShow, childrenArr) {
  if (childrenArr.length > 2 * slidesToShow) {
    for (var table = {}, firstBeginningOfClones = childrenArr.length - 2 * slidesToShow, firstEndOfClones = childrenArr.length - firstBeginningOfClones, firstCount = firstBeginningOfClones, i = 0; i < firstEndOfClones; i++) table[i] = firstCount, firstCount++;

    var secondBeginningOfClones = childrenArr.length + firstEndOfClones,
        secondEndOfClones = secondBeginningOfClones + childrenArr.slice(0, 2 * slidesToShow).length,
        secondCount = 0;

    for (i = secondBeginningOfClones; i <= secondEndOfClones; i++) table[i] = secondCount, secondCount++;

    var originalEnd = secondBeginningOfClones,
        originalCounter = 0;

    for (i = firstEndOfClones; i < originalEnd; i++) table[i] = originalCounter, originalCounter++;

    return table;
  }

  table = {};
  var totalSlides = 3 * childrenArr.length,
      count = 0;

  for (i = 0; i < totalSlides; i++) table[i] = count, ++count === childrenArr.length && (count = 0);

  return table;
}

function getClones(slidesToShow, childrenArr) {
  return childrenArr.length < slidesToShow ? childrenArr : childrenArr.length > 2 * slidesToShow ? childrenArr.slice(childrenArr.length - 2 * slidesToShow, childrenArr.length).concat(childrenArr, childrenArr.slice(0, 2 * slidesToShow)) : childrenArr.concat(childrenArr, childrenArr);
}

function getInitialSlideInInfiniteMode(slidesToShow, childrenArr) {
  return childrenArr.length > 2 * slidesToShow ? 2 * slidesToShow : childrenArr.length;
}

function checkClonesPosition(_a, childrenArr, props) {
  var isReachingTheEnd,
      currentSlide = _a.currentSlide,
      slidesToShow = _a.slidesToShow,
      itemWidth = _a.itemWidth,
      totalItems = _a.totalItems,
      nextSlide = 0,
      nextPosition = 0,
      isReachingTheStart = 0 === currentSlide,
      originalFirstSlide = childrenArr.length - (childrenArr.length - 2 * slidesToShow);
  return childrenArr.length < slidesToShow ? (nextPosition = nextSlide = 0, isReachingTheStart = isReachingTheEnd = !1) : childrenArr.length > 2 * slidesToShow ? ((isReachingTheEnd = currentSlide >= originalFirstSlide + childrenArr.length) && (nextPosition = -itemWidth * (nextSlide = currentSlide - childrenArr.length)), isReachingTheStart && (nextPosition = -itemWidth * (nextSlide = originalFirstSlide + (childrenArr.length - 2 * slidesToShow)))) : ((isReachingTheEnd = currentSlide >= 2 * childrenArr.length) && (nextPosition = -itemWidth * (nextSlide = currentSlide - childrenArr.length)), isReachingTheStart && (nextPosition = props.showDots ? -itemWidth * (nextSlide = childrenArr.length) : -itemWidth * (nextSlide = totalItems - 2 * slidesToShow))), {
    isReachingTheEnd: isReachingTheEnd,
    isReachingTheStart: isReachingTheStart,
    nextSlide: nextSlide,
    nextPosition: nextPosition
  };
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.getOriginalCounterPart = getOriginalCounterPart, exports.getOriginalIndexLookupTableByClones = getOriginalIndexLookupTableByClones, exports.getClones = getClones, exports.getInitialSlideInInfiniteMode = getInitialSlideInInfiniteMode, exports.checkClonesPosition = checkClonesPosition;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/common.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/common.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var elementWidth_1 = __webpack_require__(/*! ./elementWidth */ "./node_modules/react-multi-carousel/lib/utils/elementWidth.js");

function notEnoughChildren(state) {
  var slidesToShow = state.slidesToShow;
  return state.totalItems < slidesToShow;
}

function getInitialState(state, props) {
  var flexBisis,
      domLoaded = state.domLoaded,
      slidesToShow = state.slidesToShow,
      containerWidth = state.containerWidth,
      itemWidth = state.itemWidth,
      deviceType = props.deviceType,
      responsive = props.responsive,
      ssr = props.ssr,
      partialVisbile = props.partialVisbile,
      partialVisible = props.partialVisible,
      domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
  ssr && deviceType && !domFullyLoaded && (flexBisis = elementWidth_1.getWidthFromDeviceType(deviceType, responsive));
  var shouldRenderOnSSR = Boolean(ssr && deviceType && !domFullyLoaded && flexBisis);
  return {
    shouldRenderOnSSR: shouldRenderOnSSR,
    flexBisis: flexBisis,
    domFullyLoaded: domFullyLoaded,
    partialVisibilityGutter: elementWidth_1.getPartialVisibilityGutter(responsive, partialVisbile || partialVisible, deviceType, state.deviceType),
    shouldRenderAtAll: shouldRenderOnSSR || domFullyLoaded
  };
}

function getIfSlideIsVisbile(index, state) {
  var currentSlide = state.currentSlide,
      slidesToShow = state.slidesToShow;
  return currentSlide <= index && index < currentSlide + slidesToShow;
}

function getTransformForCenterMode(state, props, transformPlaceHolder) {
  var transform = transformPlaceHolder || state.transform;
  return !props.infinite && 0 === state.currentSlide || notEnoughChildren(state) ? transform : transform + state.itemWidth / 2;
}

function isInLeftEnd(_a) {
  return !(0 < _a.currentSlide);
}

function isInRightEnd(_a) {
  var currentSlide = _a.currentSlide,
      totalItems = _a.totalItems;
  return !(currentSlide + _a.slidesToShow < totalItems);
}

function getTransformForPartialVsibile(state, partialVisibilityGutter, props, transformPlaceHolder) {
  void 0 === partialVisibilityGutter && (partialVisibilityGutter = 0);
  var currentSlide = state.currentSlide,
      slidesToShow = state.slidesToShow,
      isRightEndReach = isInRightEnd(state),
      shouldRemoveRightGutter = !props.infinite && isRightEndReach,
      baseTransform = transformPlaceHolder || state.transform;
  if (notEnoughChildren(state)) return baseTransform;
  var transform = baseTransform + currentSlide * partialVisibilityGutter;
  return shouldRemoveRightGutter ? transform + (state.containerWidth - (state.itemWidth - partialVisibilityGutter) * slidesToShow) : transform;
}

function getTransform(state, props, transformPlaceHolder) {
  var partialVisbile = props.partialVisbile,
      partialVisible = props.partialVisible,
      responsive = props.responsive,
      deviceType = props.deviceType,
      centerMode = props.centerMode,
      transform = transformPlaceHolder || state.transform,
      partialVisibilityGutter = elementWidth_1.getPartialVisibilityGutter(responsive, partialVisbile || partialVisible, deviceType, state.deviceType);
  return partialVisible || partialVisbile ? getTransformForPartialVsibile(state, partialVisibilityGutter, props, transformPlaceHolder) : centerMode ? getTransformForCenterMode(state, props, transformPlaceHolder) : transform;
}

function getSlidesToSlide(state, props) {
  var domLoaded = state.domLoaded,
      slidesToShow = state.slidesToShow,
      containerWidth = state.containerWidth,
      itemWidth = state.itemWidth,
      deviceType = props.deviceType,
      responsive = props.responsive,
      slidesToScroll = props.slidesToSlide || 1,
      domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
  return props.ssr && props.deviceType && !domFullyLoaded && Object.keys(responsive).forEach(function (device) {
    var slidesToSlide = responsive[device].slidesToSlide;
    deviceType === device && slidesToSlide && (slidesToScroll = slidesToSlide);
  }), domFullyLoaded && Object.keys(responsive).forEach(function (item) {
    var _a = responsive[item],
        breakpoint = _a.breakpoint,
        slidesToSlide = _a.slidesToSlide,
        max = breakpoint.max,
        min = breakpoint.min;
    slidesToSlide && window.innerWidth >= min && window.innerWidth <= max && (slidesToScroll = slidesToSlide);
  }), slidesToScroll;
}

exports.notEnoughChildren = notEnoughChildren, exports.getInitialState = getInitialState, exports.getIfSlideIsVisbile = getIfSlideIsVisbile, exports.getTransformForCenterMode = getTransformForCenterMode, exports.isInLeftEnd = isInLeftEnd, exports.isInRightEnd = isInRightEnd, exports.getTransformForPartialVsibile = getTransformForPartialVsibile, exports.getTransform = getTransform, exports.getSlidesToSlide = getSlidesToSlide;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/dots.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/dots.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var clones_1 = __webpack_require__(/*! ./clones */ "./node_modules/react-multi-carousel/lib/utils/clones.js"),
    common_1 = __webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js");

function getLookupTableForNextSlides(numberOfDotsToShow, state, props, childrenArr) {
  var table = {},
      slidesToSlide = common_1.getSlidesToSlide(state, props);
  return Array(numberOfDotsToShow).fill(0).forEach(function (_, i) {
    var nextSlide = clones_1.getOriginalCounterPart(i, state, childrenArr);
    if (0 === i) table[0] = nextSlide;else {
      var now = table[i - 1] + slidesToSlide;
      table[i] = now;
    }
  }), table;
}

exports.getLookupTableForNextSlides = getLookupTableForNextSlides;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/elementWidth.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/elementWidth.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});
var hasWarnAboutTypo = !1;

function getPartialVisibilityGutter(responsive, partialVisible, serverSideDeviceType, clientSideDeviceType) {
  var gutter = 0,
      deviceType = clientSideDeviceType || serverSideDeviceType;
  return partialVisible && deviceType && (!hasWarnAboutTypo && "production" !== "development" && responsive[deviceType].paritialVisibilityGutter && (hasWarnAboutTypo = !0, console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")), gutter = responsive[deviceType].partialVisibilityGutter || responsive[deviceType].paritialVisibilityGutter), gutter;
}

function getWidthFromDeviceType(deviceType, responsive) {
  var itemWidth;
  responsive[deviceType] && (itemWidth = (100 / responsive[deviceType].items).toFixed(1));
  return itemWidth;
}

function getItemClientSideWidth(props, slidesToShow, containerWidth) {
  return Math.round(containerWidth / (slidesToShow + (props.centerMode ? 1 : 0)));
}

exports.getPartialVisibilityGutter = getPartialVisibilityGutter, exports.getWidthFromDeviceType = getWidthFromDeviceType, exports.getItemClientSideWidth = getItemClientSideWidth;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var clones_1 = __webpack_require__(/*! ./clones */ "./node_modules/react-multi-carousel/lib/utils/clones.js");

exports.getOriginalCounterPart = clones_1.getOriginalCounterPart, exports.getClones = clones_1.getClones, exports.checkClonesPosition = clones_1.checkClonesPosition, exports.getInitialSlideInInfiniteMode = clones_1.getInitialSlideInInfiniteMode;

var elementWidth_1 = __webpack_require__(/*! ./elementWidth */ "./node_modules/react-multi-carousel/lib/utils/elementWidth.js");

exports.getWidthFromDeviceType = elementWidth_1.getWidthFromDeviceType, exports.getPartialVisibilityGutter = elementWidth_1.getPartialVisibilityGutter, exports.getItemClientSideWidth = elementWidth_1.getItemClientSideWidth;

var common_1 = __webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js");

exports.getInitialState = common_1.getInitialState, exports.getIfSlideIsVisbile = common_1.getIfSlideIsVisbile, exports.getTransformForCenterMode = common_1.getTransformForCenterMode, exports.getTransformForPartialVsibile = common_1.getTransformForPartialVsibile, exports.isInLeftEnd = common_1.isInLeftEnd, exports.isInRightEnd = common_1.isInRightEnd, exports.notEnoughChildren = common_1.notEnoughChildren, exports.getSlidesToSlide = common_1.getSlidesToSlide;

var throttle_1 = __webpack_require__(/*! ./throttle */ "./node_modules/react-multi-carousel/lib/utils/throttle.js");

exports.throttle = throttle_1.default;

var throwError_1 = __webpack_require__(/*! ./throwError */ "./node_modules/react-multi-carousel/lib/utils/throwError.js");

exports.throwError = throwError_1.default;

var next_1 = __webpack_require__(/*! ./next */ "./node_modules/react-multi-carousel/lib/utils/next.js");

exports.populateNextSlides = next_1.populateNextSlides;

var previous_1 = __webpack_require__(/*! ./previous */ "./node_modules/react-multi-carousel/lib/utils/previous.js");

exports.populatePreviousSlides = previous_1.populatePreviousSlides;

var mouseOrTouchMove_1 = __webpack_require__(/*! ./mouseOrTouchMove */ "./node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js");

exports.populateSlidesOnMouseTouchMove = mouseOrTouchMove_1.populateSlidesOnMouseTouchMove;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function populateSlidesOnMouseTouchMove(state, props, initialX, lastX, clientX, transformPlaceHolder) {
  var direction,
      nextPosition,
      itemWidth = state.itemWidth,
      slidesToShow = state.slidesToShow,
      totalItems = state.totalItems,
      currentSlide = state.currentSlide,
      infinite = props.infinite,
      canContinue = !1,
      slidesHavePassedRight = Math.round((initialX - lastX) / itemWidth),
      slidesHavePassedLeft = Math.round((lastX - initialX) / itemWidth),
      isMovingLeft = initialX < clientX;

  if (clientX < initialX && !!(slidesHavePassedRight <= slidesToShow)) {
    direction = "right";
    var translateXLimit = Math.abs(-itemWidth * (totalItems - slidesToShow)),
        nextTranslate = transformPlaceHolder - (lastX - clientX),
        isLastSlide = currentSlide === totalItems - slidesToShow;
    (Math.abs(nextTranslate) <= translateXLimit || isLastSlide && infinite) && (nextPosition = nextTranslate, canContinue = !0);
  }

  isMovingLeft && slidesHavePassedLeft <= slidesToShow && (direction = "left", ((nextTranslate = transformPlaceHolder + (clientX - lastX)) <= 0 || 0 === currentSlide && infinite) && (canContinue = !0, nextPosition = nextTranslate));
  return {
    direction: direction,
    nextPosition: nextPosition,
    canContinue: canContinue
  };
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.populateSlidesOnMouseTouchMove = populateSlidesOnMouseTouchMove;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/next.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/next.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var common_1 = __webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js");

function populateNextSlides(state, props, slidesHavePassed) {
  void 0 === slidesHavePassed && (slidesHavePassed = 0);
  var nextSlides,
      nextPosition,
      slidesToShow = state.slidesToShow,
      currentSlide = state.currentSlide,
      itemWidth = state.itemWidth,
      totalItems = state.totalItems,
      slidesToSlide = common_1.getSlidesToSlide(state, props),
      nextMaximumSlides = currentSlide + 1 + slidesHavePassed + slidesToShow + (0 < slidesHavePassed ? 0 : slidesToSlide);
  return nextPosition = nextMaximumSlides <= totalItems ? -itemWidth * (nextSlides = currentSlide + slidesHavePassed + (0 < slidesHavePassed ? 0 : slidesToSlide)) : totalItems < nextMaximumSlides && currentSlide !== totalItems - slidesToShow ? -itemWidth * (nextSlides = totalItems - slidesToShow) : nextSlides = void 0, {
    nextSlides: nextSlides,
    nextPosition: nextPosition
  };
}

exports.populateNextSlides = populateNextSlides;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/previous.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/previous.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    common_1 = __webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js"),
    common_2 = __webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js");

function populatePreviousSlides(state, props, slidesHavePassed) {
  void 0 === slidesHavePassed && (slidesHavePassed = 0);
  var nextSlides,
      nextPosition,
      currentSlide = state.currentSlide,
      itemWidth = state.itemWidth,
      slidesToShow = state.slidesToShow,
      children = props.children,
      showDots = props.showDots,
      infinite = props.infinite,
      slidesToSlide = common_1.getSlidesToSlide(state, props),
      nextMaximumSlides = currentSlide - slidesHavePassed - (0 < slidesHavePassed ? 0 : slidesToSlide),
      additionalSlides = (React.Children.toArray(children).length - slidesToShow) % slidesToSlide;
  return nextPosition = 0 <= nextMaximumSlides ? (nextSlides = nextMaximumSlides, showDots && !infinite && 0 < additionalSlides && common_2.isInRightEnd(state) && (nextSlides = currentSlide - additionalSlides), -itemWidth * nextSlides) : nextSlides = nextMaximumSlides < 0 && 0 !== currentSlide ? 0 : void 0, {
    nextSlides: nextSlides,
    nextPosition: nextPosition
  };
}

exports.populatePreviousSlides = populatePreviousSlides;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/throttle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/throttle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var throttle = function (func, limit, setIsInThrottle) {
  var inThrottle;
  return function () {
    var args = arguments;
    inThrottle || (func.apply(this, args), inThrottle = !0, "function" == typeof setIsInThrottle && setIsInThrottle(!0), setTimeout(function () {
      inThrottle = !1, "function" == typeof setIsInThrottle && setIsInThrottle(!1);
    }, limit));
  };
};

exports.default = throttle;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/throwError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/throwError.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function throwError(state, props) {
  var partialVisbile = props.partialVisbile,
      partialVisible = props.partialVisible,
      centerMode = props.centerMode,
      ssr = props.ssr,
      responsive = props.responsive;
  if ((partialVisbile || partialVisible) && centerMode) throw new Error("center mode can not be used at the same time with partialVisible");
  if (!responsive) throw ssr ? new Error("ssr mode need to be used in conjunction with responsive prop") : new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
  if (responsive && "object" != typeof responsive) throw new Error("responsive prop must be an object");
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = throwError;

/***/ }),

/***/ "./node_modules/react-slideshow-image/dist/react-slideshow-image.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-slideshow-image/dist/react-slideshow-image.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e(__webpack_require__(/*! react */ "./node_modules/react/index.js")) : undefined;
}(this, function (t) {
  return function (t) {
    var e = {};

    function n(i) {
      if (e[i]) return e[i].exports;
      var r = e[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var r in t) n.d(i, r, function (e) {
        return t[e];
      }.bind(null, r));
      return i;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 8);
  }([function (t, e, n) {
    t.exports = n(6)();
  }, function (e, n) {
    e.exports = t;
  }, function (t, e, n) {
    "use strict";

    (function (t) {
      var n = function () {
        this._tweens = {}, this._tweensAddedDuringUpdate = {};
      };

      n.prototype = {
        getAll: function () {
          return Object.keys(this._tweens).map(function (t) {
            return this._tweens[t];
          }.bind(this));
        },
        removeAll: function () {
          this._tweens = {};
        },
        add: function (t) {
          this._tweens[t.getId()] = t, this._tweensAddedDuringUpdate[t.getId()] = t;
        },
        remove: function (t) {
          delete this._tweens[t.getId()], delete this._tweensAddedDuringUpdate[t.getId()];
        },
        update: function (t, e) {
          var n = Object.keys(this._tweens);
          if (0 === n.length) return !1;

          for (t = void 0 !== t ? t : r.now(); n.length > 0;) {
            this._tweensAddedDuringUpdate = {};

            for (var i = 0; i < n.length; i++) {
              var o = this._tweens[n[i]];
              o && !1 === o.update(t) && (o._isPlaying = !1, e || delete this._tweens[n[i]]);
            }

            n = Object.keys(this._tweensAddedDuringUpdate);
          }

          return !0;
        }
      };
      var i,
          r = new n();
      r.Group = n, r._nextId = 0, r.nextId = function () {
        return r._nextId++;
      }, "undefined" == typeof self && void 0 !== t && t.hrtime ? r.now = function () {
        var e = t.hrtime();
        return 1e3 * e[0] + e[1] / 1e6;
      } : "undefined" != typeof self && void 0 !== self.performance && void 0 !== self.performance.now ? r.now = self.performance.now.bind(self.performance) : void 0 !== Date.now ? r.now = Date.now : r.now = function () {
        return new Date().getTime();
      }, r.Tween = function (t, e) {
        this._object = t, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._repeat = 0, this._repeatDelayTime = void 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = null, this._easingFunction = r.Easing.Linear.None, this._interpolationFunction = r.Interpolation.Linear, this._chainedTweens = [], this._onStartCallback = null, this._onStartCallbackFired = !1, this._onUpdateCallback = null, this._onRepeatCallback = null, this._onCompleteCallback = null, this._onStopCallback = null, this._group = e || r, this._id = r.nextId();
      }, r.Tween.prototype = {
        getId: function () {
          return this._id;
        },
        isPlaying: function () {
          return this._isPlaying;
        },
        to: function (t, e) {
          return this._valuesEnd = Object.create(t), void 0 !== e && (this._duration = e), this;
        },
        duration: function (t) {
          return this._duration = t, this;
        },
        start: function (t) {
          for (var e in this._group.add(this), this._isPlaying = !0, this._onStartCallbackFired = !1, this._startTime = void 0 !== t ? "string" == typeof t ? r.now() + parseFloat(t) : t : r.now(), this._startTime += this._delayTime, this._valuesEnd) {
            if (this._valuesEnd[e] instanceof Array) {
              if (0 === this._valuesEnd[e].length) continue;
              this._valuesEnd[e] = [this._object[e]].concat(this._valuesEnd[e]);
            }

            void 0 !== this._object[e] && (this._valuesStart[e] = this._object[e], this._valuesStart[e] instanceof Array == !1 && (this._valuesStart[e] *= 1), this._valuesStartRepeat[e] = this._valuesStart[e] || 0);
          }

          return this;
        },
        stop: function () {
          return this._isPlaying ? (this._group.remove(this), this._isPlaying = !1, null !== this._onStopCallback && this._onStopCallback(this._object), this.stopChainedTweens(), this) : this;
        },
        end: function () {
          return this.update(1 / 0), this;
        },
        stopChainedTweens: function () {
          for (var t = 0, e = this._chainedTweens.length; t < e; t++) this._chainedTweens[t].stop();
        },
        group: function (t) {
          return this._group = t, this;
        },
        delay: function (t) {
          return this._delayTime = t, this;
        },
        repeat: function (t) {
          return this._repeat = t, this;
        },
        repeatDelay: function (t) {
          return this._repeatDelayTime = t, this;
        },
        yoyo: function (t) {
          return this._yoyo = t, this;
        },
        easing: function (t) {
          return this._easingFunction = t, this;
        },
        interpolation: function (t) {
          return this._interpolationFunction = t, this;
        },
        chain: function () {
          return this._chainedTweens = arguments, this;
        },
        onStart: function (t) {
          return this._onStartCallback = t, this;
        },
        onUpdate: function (t) {
          return this._onUpdateCallback = t, this;
        },
        onRepeat: function (t) {
          return this._onRepeatCallback = t, this;
        },
        onComplete: function (t) {
          return this._onCompleteCallback = t, this;
        },
        onStop: function (t) {
          return this._onStopCallback = t, this;
        },
        update: function (t) {
          var e, n, i;
          if (t < this._startTime) return !0;

          for (e in !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), n = (t - this._startTime) / this._duration, n = 0 === this._duration || n > 1 ? 1 : n, i = this._easingFunction(n), this._valuesEnd) if (void 0 !== this._valuesStart[e]) {
            var r = this._valuesStart[e] || 0,
                o = this._valuesEnd[e];
            o instanceof Array ? this._object[e] = this._interpolationFunction(o, i) : ("string" == typeof o && (o = "+" === o.charAt(0) || "-" === o.charAt(0) ? r + parseFloat(o) : parseFloat(o)), "number" == typeof o && (this._object[e] = r + (o - r) * i));
          }

          if (null !== this._onUpdateCallback && this._onUpdateCallback(this._object, n), 1 === n) {
            if (this._repeat > 0) {
              for (e in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) {
                if ("string" == typeof this._valuesEnd[e] && (this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(this._valuesEnd[e])), this._yoyo) {
                  var a = this._valuesStartRepeat[e];
                  this._valuesStartRepeat[e] = this._valuesEnd[e], this._valuesEnd[e] = a;
                }

                this._valuesStart[e] = this._valuesStartRepeat[e];
              }

              return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime, null !== this._onRepeatCallback && this._onRepeatCallback(this._object), !0;
            }

            null !== this._onCompleteCallback && this._onCompleteCallback(this._object);

            for (var s = 0, u = this._chainedTweens.length; s < u; s++) this._chainedTweens[s].start(this._startTime + this._duration);

            return !1;
          }

          return !0;
        }
      }, r.Easing = {
        Linear: {
          None: function (t) {
            return t;
          }
        },
        Quadratic: {
          In: function (t) {
            return t * t;
          },
          Out: function (t) {
            return t * (2 - t);
          },
          InOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
          }
        },
        Cubic: {
          In: function (t) {
            return t * t * t;
          },
          Out: function (t) {
            return --t * t * t + 1;
          },
          InOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          }
        },
        Quartic: {
          In: function (t) {
            return t * t * t * t;
          },
          Out: function (t) {
            return 1 - --t * t * t * t;
          },
          InOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
          }
        },
        Quintic: {
          In: function (t) {
            return t * t * t * t * t;
          },
          Out: function (t) {
            return --t * t * t * t * t + 1;
          },
          InOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          }
        },
        Sinusoidal: {
          In: function (t) {
            return 1 - Math.cos(t * Math.PI / 2);
          },
          Out: function (t) {
            return Math.sin(t * Math.PI / 2);
          },
          InOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t));
          }
        },
        Exponential: {
          In: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
          },
          Out: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          InOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
          }
        },
        Circular: {
          In: function (t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Out: function (t) {
            return Math.sqrt(1 - --t * t);
          },
          InOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          }
        },
        Elastic: {
          In: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI);
          },
          Out: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1;
          },
          InOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1;
          }
        },
        Back: {
          In: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          Out: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
          },
          InOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
          }
        },
        Bounce: {
          In: function (t) {
            return 1 - r.Easing.Bounce.Out(1 - t);
          },
          Out: function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
          },
          InOut: function (t) {
            return t < .5 ? .5 * r.Easing.Bounce.In(2 * t) : .5 * r.Easing.Bounce.Out(2 * t - 1) + .5;
          }
        }
      }, r.Interpolation = {
        Linear: function (t, e) {
          var n = t.length - 1,
              i = n * e,
              o = Math.floor(i),
              a = r.Interpolation.Utils.Linear;
          return e < 0 ? a(t[0], t[1], i) : e > 1 ? a(t[n], t[n - 1], n - i) : a(t[o], t[o + 1 > n ? n : o + 1], i - o);
        },
        Bezier: function (t, e) {
          for (var n = 0, i = t.length - 1, o = Math.pow, a = r.Interpolation.Utils.Bernstein, s = 0; s <= i; s++) n += o(1 - e, i - s) * o(e, s) * t[s] * a(i, s);

          return n;
        },
        CatmullRom: function (t, e) {
          var n = t.length - 1,
              i = n * e,
              o = Math.floor(i),
              a = r.Interpolation.Utils.CatmullRom;
          return t[0] === t[n] ? (e < 0 && (o = Math.floor(i = n * (1 + e))), a(t[(o - 1 + n) % n], t[o], t[(o + 1) % n], t[(o + 2) % n], i - o)) : e < 0 ? t[0] - (a(t[0], t[0], t[1], t[1], -i) - t[0]) : e > 1 ? t[n] - (a(t[n], t[n], t[n - 1], t[n - 1], i - n) - t[n]) : a(t[o ? o - 1 : 0], t[o], t[n < o + 1 ? n : o + 1], t[n < o + 2 ? n : o + 2], i - o);
        },
        Utils: {
          Linear: function (t, e, n) {
            return (e - t) * n + t;
          },
          Bernstein: function (t, e) {
            var n = r.Interpolation.Utils.Factorial;
            return n(t) / n(e) / n(t - e);
          },
          Factorial: (i = [1], function (t) {
            var e = 1;
            if (i[t]) return i[t];

            for (var n = t; n > 1; n--) e *= n;

            return i[t] = e, e;
          }),
          CatmullRom: function (t, e, n, i, r) {
            var o = .5 * (n - t),
                a = .5 * (i - e),
                s = r * r;
            return (2 * e - 2 * n + o + a) * (r * s) + (-3 * e + 3 * n - 2 * o - a) * s + o * r + e;
          }
        }
      }, e.a = r;
    }).call(this, n(4));
  }, function (t, e, n) {
    "use strict";

    (function (t) {
      var n = function () {
        if ("undefined" != typeof Map) return Map;

        function t(t, e) {
          var n = -1;
          return t.some(function (t, i) {
            return t[0] === e && (n = i, !0);
          }), n;
        }

        return function () {
          function e() {
            this.__entries__ = [];
          }

          return Object.defineProperty(e.prototype, "size", {
            get: function () {
              return this.__entries__.length;
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.get = function (e) {
            var n = t(this.__entries__, e),
                i = this.__entries__[n];
            return i && i[1];
          }, e.prototype.set = function (e, n) {
            var i = t(this.__entries__, e);
            ~i ? this.__entries__[i][1] = n : this.__entries__.push([e, n]);
          }, e.prototype.delete = function (e) {
            var n = this.__entries__,
                i = t(n, e);
            ~i && n.splice(i, 1);
          }, e.prototype.has = function (e) {
            return !!~t(this.__entries__, e);
          }, e.prototype.clear = function () {
            this.__entries__.splice(0);
          }, e.prototype.forEach = function (t, e) {
            void 0 === e && (e = null);

            for (var n = 0, i = this.__entries__; n < i.length; n++) {
              var r = i[n];
              t.call(e, r[1], r[0]);
            }
          }, e;
        }();
      }(),
          i = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
          r = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
          o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function (t) {
        return setTimeout(function () {
          return t(Date.now());
        }, 1e3 / 60);
      };

      var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
          s = "undefined" != typeof MutationObserver,
          u = function () {
        function t() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
            var n = !1,
                i = !1,
                r = 0;

            function a() {
              n && (n = !1, t()), i && u();
            }

            function s() {
              o(a);
            }

            function u() {
              var t = Date.now();

              if (n) {
                if (t - r < 2) return;
                i = !0;
              } else n = !0, i = !1, setTimeout(s, e);

              r = t;
            }

            return u;
          }(this.refresh.bind(this), 20);
        }

        return t.prototype.addObserver = function (t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
        }, t.prototype.removeObserver = function (t) {
          var e = this.observers_,
              n = e.indexOf(t);
          ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_();
        }, t.prototype.refresh = function () {
          this.updateObservers_() && this.refresh();
        }, t.prototype.updateObservers_ = function () {
          var t = this.observers_.filter(function (t) {
            return t.gatherActive(), t.hasActive();
          });
          return t.forEach(function (t) {
            return t.broadcastActive();
          }), t.length > 0;
        }, t.prototype.connect_ = function () {
          i && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, t.prototype.disconnect_ = function () {
          i && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, t.prototype.onTransitionEnd_ = function (t) {
          var e = t.propertyName,
              n = void 0 === e ? "" : e;
          a.some(function (t) {
            return !!~n.indexOf(t);
          }) && this.refresh();
        }, t.getInstance = function () {
          return this.instance_ || (this.instance_ = new t()), this.instance_;
        }, t.instance_ = null, t;
      }(),
          c = function (t, e) {
        for (var n = 0, i = Object.keys(e); n < i.length; n++) {
          var r = i[n];
          Object.defineProperty(t, r, {
            value: e[r],
            enumerable: !1,
            writable: !1,
            configurable: !0
          });
        }

        return t;
      },
          l = function (t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView || r;
      },
          h = m(0, 0, 0, 0);

      function p(t) {
        return parseFloat(t) || 0;
      }

      function d(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];

        return e.reduce(function (e, n) {
          return e + p(t["border-" + n + "-width"]);
        }, 0);
      }

      function f(t) {
        var e = t.clientWidth,
            n = t.clientHeight;
        if (!e && !n) return h;

        var i = l(t).getComputedStyle(t),
            r = function (t) {
          for (var e = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
            var r = i[n],
                o = t["padding-" + r];
            e[r] = p(o);
          }

          return e;
        }(i),
            o = r.left + r.right,
            a = r.top + r.bottom,
            s = p(i.width),
            u = p(i.height);

        if ("border-box" === i.boxSizing && (Math.round(s + o) !== e && (s -= d(i, "left", "right") + o), Math.round(u + a) !== n && (u -= d(i, "top", "bottom") + a)), !function (t) {
          return t === l(t).document.documentElement;
        }(t)) {
          var c = Math.round(s + o) - e,
              f = Math.round(u + a) - n;
          1 !== Math.abs(c) && (s -= c), 1 !== Math.abs(f) && (u -= f);
        }

        return m(r.left, r.top, s, u);
      }

      var v = "undefined" != typeof SVGGraphicsElement ? function (t) {
        return t instanceof l(t).SVGGraphicsElement;
      } : function (t) {
        return t instanceof l(t).SVGElement && "function" == typeof t.getBBox;
      };

      function y(t) {
        return i ? v(t) ? function (t) {
          var e = t.getBBox();
          return m(0, 0, e.width, e.height);
        }(t) : f(t) : h;
      }

      function m(t, e, n, i) {
        return {
          x: t,
          y: e,
          width: n,
          height: i
        };
      }

      var b = function () {
        function t(t) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m(0, 0, 0, 0), this.target = t;
        }

        return t.prototype.isActive = function () {
          var t = y(this.target);
          return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
        }, t.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
        }, t;
      }(),
          w = function (t, e) {
        var n,
            i,
            r,
            o,
            a,
            s,
            u,
            l = (i = (n = e).x, r = n.y, o = n.width, a = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, u = Object.create(s.prototype), c(u, {
          x: i,
          y: r,
          width: o,
          height: a,
          top: r,
          right: i + o,
          bottom: a + r,
          left: i
        }), u);
        c(this, {
          target: t,
          contentRect: l
        });
      },
          g = function () {
        function t(t, e, i) {
          if (this.activeObservations_ = [], this.observations_ = new n(), "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i;
        }

        return t.prototype.observe = function (t) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof l(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) || (e.set(t, new b(t)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, t.prototype.unobserve = function (t) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof l(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
          }
        }, t.prototype.disconnect = function () {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, t.prototype.gatherActive = function () {
          var t = this;
          this.clearActive(), this.observations_.forEach(function (e) {
            e.isActive() && t.activeObservations_.push(e);
          });
        }, t.prototype.broadcastActive = function () {
          if (this.hasActive()) {
            var t = this.callbackCtx_,
                e = this.activeObservations_.map(function (t) {
              return new w(t.target, t.broadcastRect());
            });
            this.callback_.call(t, e, t), this.clearActive();
          }
        }, t.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        }, t.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        }, t;
      }(),
          _ = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
          O = function t(e) {
        if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = u.getInstance(),
            i = new g(e, n, this);

        _.set(this, i);
      };

      ["observe", "unobserve", "disconnect"].forEach(function (t) {
        O.prototype[t] = function () {
          var e;
          return (e = _.get(this))[t].apply(e, arguments);
        };
      });
      var S = void 0 !== r.ResizeObserver ? r.ResizeObserver : O;
      e.a = S;
    }).call(this, n(5));
  }, function (t, e) {
    var n,
        i,
        r = t.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined");
    }

    function a() {
      throw new Error("clearTimeout has not been defined");
    }

    function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);

      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }

      try {
        i = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        i = a;
      }
    }();
    var u,
        c = [],
        l = !1,
        h = -1;

    function p() {
      l && u && (l = !1, u.length ? c = u.concat(c) : h = -1, c.length && d());
    }

    function d() {
      if (!l) {
        var t = s(p);
        l = !0;

        for (var e = c.length; e;) {
          for (u = c, c = []; ++h < e;) u && u[h].run();

          h = -1, e = c.length;
        }

        u = null, l = !1, function (t) {
          if (i === clearTimeout) return clearTimeout(t);
          if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);

          try {
            i(t);
          } catch (e) {
            try {
              return i.call(null, t);
            } catch (e) {
              return i.call(this, t);
            }
          }
        }(t);
      }
    }

    function f(t, e) {
      this.fun = t, this.array = e;
    }

    function v() {}

    r.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      c.push(new f(t, e)), 1 !== c.length || l || s(d);
    }, f.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function (t) {
      return [];
    }, r.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, r.cwd = function () {
      return "/";
    }, r.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, r.umask = function () {
      return 0;
    };
  }, function (t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }

    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    var i = n(7);

    function r() {}

    function o() {}

    o.resetWarningCache = r, t.exports = function () {
      function t(t, e, n, r, o, a) {
        if (a !== i) {
          var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw s.name = "Invariant Violation", s;
        }
      }

      function e() {
        return t;
      }

      t.isRequired = t;
      var n = {
        array: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        elementType: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e,
        checkPropTypes: o,
        resetWarningCache: r
      };
      return n.PropTypes = n, n;
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "Slide", function () {
      return k;
    }), n.d(e, "Fade", function () {
      return P;
    }), n.d(e, "Zoom", function () {
      return L;
    });
    var i = n(1),
        r = n.n(i),
        o = n(2),
        a = n(3),
        s = n(0),
        u = n.n(s);

    function c() {
      return (c = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }

        return t;
      }).apply(this, arguments);
    }

    function l(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, i);
      }

      return n;
    }

    function h(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? l(n, !0).forEach(function (e) {
          p(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(n).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    function p(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var d = {
      linear: o.a.Easing.Linear.None,
      ease: o.a.Easing.Quadratic.InOut,
      "ease-in": o.a.Easing.Quadratic.In,
      "ease-out": o.a.Easing.Quadratic.Out,
      cubic: o.a.Easing.Cubic.InOut,
      "cubic-in": o.a.Easing.Cubic.In,
      "cubic-out": o.a.Easing.Cubic.Out
    },
        f = function (t) {
      return d[t] || d.linear;
    },
        v = function (t, e) {
      var n = Object.keys(t);
      return Object.keys(e).reduce(function (t, i) {
        return -1 === n.indexOf(i) && (t[i] = e[i]), t;
      }, {});
    },
        y = function (t, e, n) {
      var i = t.prevArrow,
          o = t.infinite,
          a = e <= 0 && !o,
          s = {
        "data-type": "prev",
        "aria-label": "Previous Slide",
        disabled: a,
        onClick: n
      };
      if (i) return r.a.cloneElement(i, h({
        className: "".concat(i.props.className, " nav ").concat(a ? "disabled" : "")
      }, s));
      var u = "nav default-nav ".concat(a ? "disabled" : "");
      return r.a.createElement("button", c({
        className: u
      }, s), r.a.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, r.a.createElement("path", {
        d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
      })));
    },
        m = function (t, e, n) {
      var i = t.nextArrow,
          o = t.infinite,
          a = e === t.children.length - 1 && !o,
          s = {
        "data-type": "next",
        "aria-label": "Next Slide",
        disabled: a,
        onClick: n
      };
      if (i) return r.a.cloneElement(i, h({
        className: "".concat(i.props.className, " nav ").concat(a ? "disabled" : "")
      }, s));
      var u = "nav default-nav ".concat(a ? "disabled" : "");
      return r.a.createElement("button", c({
        className: u
      }, s), r.a.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, r.a.createElement("path", {
        d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
      })));
    },
        b = function (t, e, n) {
      var i = t.children,
          o = t.indicators,
          a = "boolean" != typeof o;
      return r.a.createElement("div", {
        className: "indicators"
      }, i.map(function (t, i) {
        var s = {
          "data-key": i,
          "aria-label": "Go to slide ".concat(i + 1),
          onClick: n
        };
        return a ? function (t, e, n, i) {
          return r.a.cloneElement(i, h({
            className: "".concat(i.props.className, " ").concat(t === e ? "active" : ""),
            key: e
          }, n));
        }(e, i, s, o(i)) : function (t, e, n) {
          return r.a.createElement("li", {
            key: e
          }, r.a.createElement("button", c({
            className: "each-slideshow-indicator ".concat(t === e ? "active" : "")
          }, n)));
        }(e, i, s);
      }));
    };

    function w(t) {
      return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function g() {
      return (g = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }

        return t;
      }).apply(this, arguments);
    }

    function _(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    function O(t) {
      return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function S(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function T(t, e) {
      return (T = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    var x = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), (n = function (t, e) {
          return !e || "object" !== w(e) && "function" != typeof e ? S(t) : e;
        }(this, O(e).call(this, t))).state = {
          index: t.defaultIndex && t.defaultIndex < t.children.length ? t.defaultIndex : 0,
          dragging: !1
        }, n.width = 0, n.imageContainer = null, n.wrapper = null, n.timeout = null, n.moveSlides = n.moveSlides.bind(S(n)), n.pauseSlides = n.pauseSlides.bind(S(n)), n.startSlides = n.startSlides.bind(S(n)), n.handleResize = n.handleResize.bind(S(n)), n.initResizeObserver = n.initResizeObserver.bind(S(n)), n.reactSlideshowWrapper = Object(i.createRef)(), n.goToSlide = n.goToSlide.bind(S(n)), n.tweenGroup = new o.a.Group(), n.startSwipe = n.startSwipe.bind(S(n)), n.endSwipe = n.endSwipe.bind(S(n)), n.swipe = n.swipe.bind(S(n)), n.distanceSwiped = 0, n;
      }

      var n, s, u;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && T(t, e);
      }(e, t), n = e, (s = [{
        key: "componentDidMount",
        value: function () {
          var t = this;
          this.setWidth(), this.initResizeObserver();
          var e = this.props,
              n = e.autoplay,
              i = e.duration;
          n && (this.timeout = setTimeout(function () {
            return t.goNext();
          }, i));
        }
      }, {
        key: "initResizeObserver",
        value: function () {
          var t = this;
          this.resizeObserver = new a.a(function (e) {
            e && t.handleResize();
          }), this.resizeObserver.observe(this.reactSlideshowWrapper.current);
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.willUnmount = !0, clearTimeout(this.timeout), this.removeResizeObserver();
        }
      }, {
        key: "startSwipe",
        value: function (t) {
          this.startingClientX = t.touches ? t.touches[0].pageX : t.clientX, this.setState({
            dragging: !0
          }), clearTimeout(this.timeout);
        }
      }, {
        key: "endSwipe",
        value: function () {
          this.setState({
            dragging: !1
          }), Math.abs(this.distanceSwiped) / this.width > .2 ? this.distanceSwiped < 0 ? this.goNext() : this.goBack() : Math.abs(this.distanceSwiped) > 0 && this.slideImages(this.state.index, 300);
        }
      }, {
        key: "swipe",
        value: function (t) {
          var e = t.touches ? t.touches[0].pageX : t.clientX;

          if (this.state.dragging) {
            var n = this.width * (this.state.index + 1);
            this.distanceSwiped = e - this.startingClientX, n -= this.distanceSwiped, this.imageContainer.style.transform = "translate(-".concat(n, "px)");
          }
        }
      }, {
        key: "removeResizeObserver",
        value: function () {
          this.resizeObserver && this.reactSlideshowWrapper && this.reactSlideshowWrapper.current && this.resizeObserver.unobserve(this.reactSlideshowWrapper.current);
        }
      }, {
        key: "setWidth",
        value: function () {
          this.allImages = Array.prototype.slice.call(this.wrapper.querySelectorAll(".images-wrap > div"), 0), this.width = this.wrapper.clientWidth;
          var t = this.width * (this.props.children.length + 2);
          this.imageContainer.style.width = "".concat(t, "px"), this.imageContainer.style.transform = "translate(-".concat(this.width * (this.state.index + 1), "px)"), this.applySlideStyle();
        }
      }, {
        key: "componentDidUpdate",
        value: function (t) {
          var e = this;
          this.props.autoplay !== t.autoplay && (this.props.autoplay ? this.timeout = setTimeout(function () {
            return e.goNext();
          }, this.props.duration) : clearTimeout(this.timeout)), this.props.children.length != t.children.length && this.setWidth();
        }
      }, {
        key: "handleResize",
        value: function () {
          this.setWidth();
        }
      }, {
        key: "applySlideStyle",
        value: function () {
          var t = this;
          this.allImages.forEach(function (e, n) {
            e.style.width = "".concat(t.width, "px");
          });
        }
      }, {
        key: "pauseSlides",
        value: function () {
          this.props.pauseOnHover && clearTimeout(this.timeout);
        }
      }, {
        key: "startSlides",
        value: function () {
          var t = this;
          if (this.state.dragging) this.endSwipe();else {
            var e = this.props,
                n = e.pauseOnHover,
                i = e.autoplay;
            n && i && (this.timeout = setTimeout(function () {
              return t.goNext();
            }, this.props.duration));
          }
        }
      }, {
        key: "moveSlides",
        value: function (t) {
          "next" === t.currentTarget.dataset.type ? this.goNext() : this.goBack();
        }
      }, {
        key: "goToSlide",
        value: function (t) {
          var e = t.currentTarget;
          this.goTo(parseInt(e.dataset.key));
        }
      }, {
        key: "goTo",
        value: function (t) {
          this.slideImages(t);
        }
      }, {
        key: "goNext",
        value: function () {
          var t = this.state.index,
              e = this.props,
              n = e.children;
          (e.infinite || t !== n.length - 1) && this.slideImages(t + 1);
        }
      }, {
        key: "goBack",
        value: function () {
          var t = this.state.index;
          (this.props.infinite || 0 !== t) && this.slideImages(t - 1);
        }
      }, {
        key: "render",
        value: function () {
          var t = this,
              n = this.props,
              i = n.children,
              o = (n.infinite, n.indicators),
              a = n.arrows,
              s = v(e.propTypes, this.props),
              u = this.state.index,
              c = {
            transform: "translate(-".concat((u + 1) * this.width, "px)")
          };
          return r.a.createElement("div", g({
            "aria-roledescription": "carousel"
          }, s), r.a.createElement("div", {
            className: "react-slideshow-container",
            onMouseEnter: this.pauseSlides,
            onMouseOver: this.pauseSlides,
            onMouseLeave: this.startSlides,
            onMouseDown: this.startSwipe,
            onMouseUp: this.endSwipe,
            onMouseMove: this.swipe,
            onTouchStart: this.startSwipe,
            onTouchEnd: this.endSwipe,
            onTouchCancel: this.endSwipe,
            onTouchMove: this.swipe,
            ref: this.reactSlideshowWrapper
          }, a && y(this.props, this.state.index, this.moveSlides), r.a.createElement("div", {
            className: "react-slideshow-wrapper slide",
            ref: function (e) {
              return t.wrapper = e;
            }
          }, r.a.createElement("div", {
            className: "images-wrap",
            style: c,
            ref: function (e) {
              return t.imageContainer = e;
            }
          }, r.a.createElement("div", {
            "data-index": "-1",
            "aria-roledescription": "slide",
            "aria-hidden": "false"
          }, i[i.length - 1]), i.map(function (t, e) {
            return r.a.createElement("div", {
              "data-index": e,
              key: e,
              className: e === u ? "active" : "",
              "aria-roledescription": "slide",
              "aria-hidden": e === u ? "false" : "true"
            }, t);
          }), r.a.createElement("div", {
            "data-index": "-1",
            "aria-roledescription": "slide",
            "aria-hidden": "false"
          }, i[0]))), a && m(this.props, this.state.index, this.moveSlides)), o && b(this.props, this.state.index, this.goToSlide));
        }
      }, {
        key: "slideImages",
        value: function (t, e) {
          var n = this,
              i = this.props,
              r = i.children,
              a = i.transitionDuration,
              s = i.autoplay,
              u = i.infinite,
              c = i.duration,
              l = i.onChange,
              h = i.easing;

          if (a = e || a, !this.tweenGroup.getAll().length) {
            clearTimeout(this.timeout);
            var p = {
              margin: -this.width * (this.state.index + 1) + this.distanceSwiped
            },
                d = new o.a.Tween(p, this.tweenGroup).to({
              margin: -this.width * (t + 1)
            }, a).onUpdate(function (t) {
              n.imageContainer.style.transform = "translate(".concat(t.margin, "px)");
            }).start();
            d.easing(f(h)), !function t() {
              n.willUnmount ? n.tweenGroup.removeAll() : (requestAnimationFrame(t), n.tweenGroup.update());
            }(), d.onComplete(function () {
              if (!n.willUnmount) {
                n.distanceSwiped = 0;
                var e = t;
                e < 0 ? e = r.length - 1 : e >= r.length && (e = 0), "function" == typeof l && l(n.state.index, e), n.setState({
                  index: e
                }, function () {
                  s && (u || n.state.index < r.length) && (clearTimeout(n.timeout), n.timeout = setTimeout(function () {
                    return n.goNext();
                  }, c));
                });
              }
            });
          }
        }
      }]) && _(n.prototype, s), u && _(n, u), e;
    }(i.Component);

    x.defaultProps = {
      duration: 5e3,
      transitionDuration: 1e3,
      defaultIndex: 0,
      infinite: !0,
      autoplay: !0,
      indicators: !1,
      arrows: !0,
      pauseOnHover: !0,
      easing: "linear"
    }, x.propTypes = {
      duration: u.a.number,
      transitionDuration: u.a.number,
      defaultIndex: u.a.number,
      infinite: u.a.bool,
      indicators: u.a.oneOfType([u.a.bool, u.a.func]),
      autoplay: u.a.bool,
      arrows: u.a.bool,
      onChange: u.a.func,
      pauseOnHover: u.a.bool,
      prevArrow: u.a.oneOfType([u.a.object, u.a.func]),
      nextArrow: u.a.oneOfType([u.a.object, u.a.func]),
      easing: u.a.string
    };
    var k = x;

    function E(t) {
      return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function C() {
      return (C = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }

        return t;
      }).apply(this, arguments);
    }

    function j(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    function I(t) {
      return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function M(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function R(t, e) {
      return (R = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    var z = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), (n = function (t, e) {
          return !e || "object" !== E(e) && "function" != typeof e ? M(t) : e;
        }(this, I(e).call(this, t))).state = {
          index: t.defaultIndex && t.defaultIndex < t.children.length ? t.defaultIndex : 0
        }, n.width = 0, n.timeout = null, n.divsContainer = null, n.wrapper = null, n.setWidth = n.setWidth.bind(M(n)), n.handleResize = n.handleResize.bind(M(n)), n.navigate = n.navigate.bind(M(n)), n.preFade = n.preFade.bind(M(n)), n.pauseSlides = n.pauseSlides.bind(M(n)), n.startSlides = n.startSlides.bind(M(n)), n.initResizeObserver = n.initResizeObserver.bind(M(n)), n.tweenGroup = new o.a.Group(), n.reactSlideshowWrapper = Object(i.createRef)(), n.wrapper = Object(i.createRef)(), n;
      }

      var n, s, u;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && R(t, e);
      }(e, t), n = e, (s = [{
        key: "componentDidMount",
        value: function () {
          this.setWidth(), this.play(), this.initResizeObserver();
        }
      }, {
        key: "initResizeObserver",
        value: function () {
          var t = this;
          this.resizeObserver = new a.a(function (e) {
            e && t.handleResize();
          }), this.resizeObserver.observe(this.reactSlideshowWrapper.current);
        }
      }, {
        key: "play",
        value: function () {
          var t = this,
              e = this.props,
              n = e.autoplay,
              i = e.children,
              r = this.state.index;
          n && i.length > 1 && (clearTimeout(this.timeout), this.timeout = setTimeout(function () {
            return t.fadeImages(r + 1);
          }, this.props.duration));
        }
      }, {
        key: "componentDidUpdate",
        value: function (t) {
          this.props.autoplay !== t.autoplay && (this.props.autoplay ? this.play() : clearTimeout(this.timeout)), this.props.children.length != t.children.length && (this.applyStyle(), this.play());
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.willUnmount = !0, clearTimeout(this.timeout), this.removeResizeObserver();
        }
      }, {
        key: "removeResizeObserver",
        value: function () {
          this.resizeObserver && this.reactSlideshowWrapper && this.reactSlideshowWrapper.current && this.resizeObserver.unobserve(this.reactSlideshowWrapper.current);
        }
      }, {
        key: "setWidth",
        value: function () {
          this.width = this.wrapper.current.clientWidth, this.applyStyle();
        }
      }, {
        key: "handleResize",
        value: function () {
          this.setWidth();
        }
      }, {
        key: "applyStyle",
        value: function () {
          var t = this.width * this.props.children.length;
          this.divsContainer.style.width = "".concat(t, "px");

          for (var e = 0; e < this.divsContainer.children.length; e++) {
            var n = this.divsContainer.children[e];
            n && (n.style.width = "".concat(this.width, "px"), n.style.left = "".concat(e * -this.width, "px"));
          }
        }
      }, {
        key: "pauseSlides",
        value: function () {
          this.props.pauseOnHover && clearTimeout(this.timeout);
        }
      }, {
        key: "startSlides",
        value: function () {
          var t = this,
              e = this.props,
              n = e.pauseOnHover,
              i = e.autoplay;
          n && i && (this.timeout = setTimeout(function () {
            return t.goNext();
          }, this.props.duration));
        }
      }, {
        key: "goNext",
        value: function () {
          var t = this.state.index,
              e = this.props,
              n = e.children;
          (e.infinite || t !== n.length - 1) && this.fadeImages((t + 1) % n.length);
        }
      }, {
        key: "goBack",
        value: function () {
          var t = this.state.index,
              e = this.props,
              n = e.children;
          (e.infinite || 0 !== t) && this.fadeImages(0 === t ? n.length - 1 : t - 1);
        }
      }, {
        key: "navigate",
        value: function (t) {
          var e = t.currentTarget.dataset;
          e.key != this.state.index && this.goTo(parseInt(e.key));
        }
      }, {
        key: "goTo",
        value: function (t) {
          this.fadeImages(t);
        }
      }, {
        key: "preFade",
        value: function (t) {
          "prev" === t.currentTarget.dataset.type ? this.goBack() : this.goNext();
        }
      }, {
        key: "render",
        value: function () {
          var t = this,
              n = this.props,
              i = n.indicators,
              o = n.children,
              a = n.arrows,
              s = this.state.index,
              u = v(e.propTypes, this.props);
          return r.a.createElement("div", C({
            "aria-roledescription": "carousel"
          }, u), r.a.createElement("div", {
            className: "react-slideshow-container",
            onMouseEnter: this.pauseSlides,
            onMouseOver: this.pauseSlides,
            onMouseLeave: this.startSlides,
            ref: this.reactSlideshowWrapper
          }, a && y(this.props, this.state.index, this.preFade), r.a.createElement("div", {
            className: "react-slideshow-fade-wrapper",
            ref: this.wrapper
          }, r.a.createElement("div", {
            className: "react-slideshow-fade-images-wrap",
            ref: function (e) {
              return t.divsContainer = e;
            }
          }, o.map(function (t, e) {
            return r.a.createElement("div", {
              style: {
                opacity: e === s ? "1" : "0",
                zIndex: e === s ? "1" : "0"
              },
              "data-index": e,
              key: e,
              "aria-roledescription": "slide",
              "aria-hidden": e === s ? "false" : "true"
            }, t);
          }))), a && m(this.props, this.state.index, this.preFade)), i && b(this.props, this.state.index, this.navigate));
        }
      }, {
        key: "fadeImages",
        value: function (t) {
          var e = this,
              n = this.state.index,
              i = this.props,
              r = i.autoplay,
              a = i.children,
              s = i.infinite,
              u = i.duration,
              c = i.transitionDuration,
              l = i.onChange,
              h = i.easing;

          if (!this.tweenGroup.getAll().length) {
            this.divsContainer.children[t] || (t = 0), clearTimeout(this.timeout), function t() {
              e.willUnmount ? e.tweenGroup.removeAll() : (requestAnimationFrame(t), e.tweenGroup.update());
            }();
            var p = new o.a.Tween({
              opacity: 0
            }, this.tweenGroup).to({
              opacity: 1
            }, c).onUpdate(function (i) {
              e.divsContainer.children[t].style.opacity = i.opacity, e.divsContainer.children[n].style.opacity = 1 - i.opacity;
            }).start();
            p.easing(f(h)), p.onComplete(function () {
              e.willUnmount || (e.setState({
                index: t
              }), "function" == typeof l && l(n, t), r && (s || t < a.length - 1) && (clearTimeout(e.timeout), e.timeout = setTimeout(function () {
                e.fadeImages((t + 1) % a.length);
              }, u)));
            });
          }
        }
      }]) && j(n.prototype, s), u && j(n, u), e;
    }(i.Component);

    z.defaultProps = {
      duration: 5e3,
      transitionDuration: 1e3,
      defaultIndex: 0,
      indicators: !1,
      arrows: !0,
      autoplay: !0,
      infinite: !0,
      pauseOnHover: !0,
      easing: "linear"
    }, z.propTypes = {
      duration: u.a.number,
      transitionDuration: u.a.number,
      defaultIndex: u.a.number,
      indicators: u.a.oneOfType([u.a.bool, u.a.func]),
      arrows: u.a.bool,
      autoplay: u.a.bool,
      infinite: u.a.bool,
      onChange: u.a.func,
      pauseOnHover: u.a.bool,
      prevArrow: u.a.oneOfType([u.a.object, u.a.func]),
      nextArrow: u.a.oneOfType([u.a.object, u.a.func]),
      easing: u.a.string
    };
    var P = z;

    function A(t) {
      return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function W() {
      return (W = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }

        return t;
      }).apply(this, arguments);
    }

    function D(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    function N(t) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function U(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function F(t, e) {
      return (F = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    var G = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), (n = function (t, e) {
          return !e || "object" !== A(e) && "function" != typeof e ? U(t) : e;
        }(this, N(e).call(this, t))).state = {
          index: t.defaultIndex && t.defaultIndex < t.children.length ? t.defaultIndex : 0
        }, n.width = 0, n.timeout = null, n.divsContainer = null, n.wrapper = null, n.setWidth = n.setWidth.bind(U(n)), n.handleResize = n.handleResize.bind(U(n)), n.navigate = n.navigate.bind(U(n)), n.preZoom = n.preZoom.bind(U(n)), n.pauseSlides = n.pauseSlides.bind(U(n)), n.startSlides = n.startSlides.bind(U(n)), n.tweenGroup = new o.a.Group(), n.initResizeObserver = n.initResizeObserver.bind(U(n)), n.reactSlideshowWrapper = Object(i.createRef)(), n;
      }

      var n, s, u;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && F(t, e);
      }(e, t), n = e, (s = [{
        key: "componentDidMount",
        value: function () {
          this.setWidth(), this.play(), this.initResizeObserver();
        }
      }, {
        key: "initResizeObserver",
        value: function () {
          var t = this;
          this.resizeObserver = new a.a(function (e) {
            e && t.handleResize();
          }), this.resizeObserver.observe(this.reactSlideshowWrapper.current);
        }
      }, {
        key: "play",
        value: function () {
          var t = this,
              e = this.props,
              n = e.autoplay,
              i = e.children,
              r = this.state.index;
          n && i.length > 1 && (clearTimeout(this.timeout), this.timeout = setTimeout(function () {
            return t.zoomTo(r + 1);
          }, this.props.duration));
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.willUnmount = !0, clearTimeout(this.timeout), this.removeResizeObserver();
        }
      }, {
        key: "removeResizeObserver",
        value: function () {
          this.resizeObserver && this.reactSlideshowWrapper && this.reactSlideshowWrapper.current && this.resizeObserver.unobserve(this.reactSlideshowWrapper.current);
        }
      }, {
        key: "componentDidUpdate",
        value: function (t) {
          this.props.autoplay !== t.autoplay && (this.props.autoplay ? this.play() : clearTimeout(this.timeout)), this.props.children.length != t.children.length && (this.applyStyle(), this.play());
        }
      }, {
        key: "setWidth",
        value: function () {
          this.width = this.wrapper.clientWidth, this.applyStyle();
        }
      }, {
        key: "handleResize",
        value: function () {
          this.setWidth();
        }
      }, {
        key: "applyStyle",
        value: function () {
          var t = this.width * this.props.children.length;
          this.divsContainer.style.width = "".concat(t, "px");

          for (var e = 0; e < this.divsContainer.children.length; e++) {
            var n = this.divsContainer.children[e];
            n && (n.style.width = "".concat(this.width, "px"), n.style.left = "".concat(e * -this.width, "px"));
          }
        }
      }, {
        key: "pauseSlides",
        value: function () {
          this.props.pauseOnHover && clearTimeout(this.timeout);
        }
      }, {
        key: "startSlides",
        value: function () {
          var t = this,
              e = this.props,
              n = e.pauseOnHover,
              i = e.autoplay;
          n && i && (this.timeout = setTimeout(function () {
            return t.goNext();
          }, this.props.duration));
        }
      }, {
        key: "goNext",
        value: function () {
          var t = this.state.index,
              e = this.props,
              n = e.children;
          (e.infinite || t !== n.length - 1) && this.zoomTo((t + 1) % n.length);
        }
      }, {
        key: "goBack",
        value: function () {
          var t = this.state.index,
              e = this.props,
              n = e.children;
          (e.infinite || 0 !== t) && this.zoomTo(0 === t ? n.length - 1 : t - 1);
        }
      }, {
        key: "goTo",
        value: function (t) {
          this.zoomTo(t);
        }
      }, {
        key: "navigate",
        value: function (t) {
          var e = t.currentTarget.dataset;
          e.key != this.state.index && this.goTo(parseInt(e.key));
        }
      }, {
        key: "preZoom",
        value: function (t) {
          "prev" === t.currentTarget.dataset.type ? this.goBack() : this.goNext();
        }
      }, {
        key: "render",
        value: function () {
          var t = this,
              n = this.props,
              i = n.indicators,
              o = n.arrows,
              a = n.children,
              s = this.state.index,
              u = v(e.propTypes, this.props);
          return r.a.createElement("div", W({
            "aria-roledescription": "carousel"
          }, u), r.a.createElement("div", {
            className: "react-slideshow-container",
            onMouseEnter: this.pauseSlides,
            onMouseOver: this.pauseSlides,
            onMouseLeave: this.startSlides,
            ref: this.reactSlideshowWrapper
          }, o && y(this.props, this.state.index, this.preZoom), r.a.createElement("div", {
            className: "react-slideshow-zoom-wrapper",
            ref: function (e) {
              return t.wrapper = e;
            }
          }, r.a.createElement("div", {
            className: "zoom-wrapper",
            ref: function (e) {
              return t.divsContainer = e;
            }
          }, a.map(function (t, e) {
            return r.a.createElement("div", {
              style: {
                opacity: e === s ? "1" : "0",
                zIndex: e === s ? "1" : "0"
              },
              "data-index": e,
              key: e,
              "aria-roledescription": "slide",
              "aria-hidden": e === s ? "false" : "true"
            }, t);
          }))), o && m(this.props, this.state.index, this.preZoom)), i && b(this.props, this.state.index, this.navigate));
        }
      }, {
        key: "zoomTo",
        value: function (t) {
          var e = this,
              n = this.state.index,
              i = this.props,
              r = i.children,
              a = i.scale,
              s = i.autoplay,
              u = i.infinite,
              c = i.transitionDuration,
              l = i.duration,
              h = i.onChange,
              p = i.easing;

          if (!this.tweenGroup.getAll().length) {
            this.divsContainer.children[t] || (t = 0), clearTimeout(this.timeout), function t() {
              e.willUnmount ? e.tweenGroup.removeAll() : (requestAnimationFrame(t), e.tweenGroup.update());
            }();
            var d = new o.a.Tween({
              opacity: 0,
              scale: 1
            }, this.tweenGroup).to({
              opacity: 1,
              scale: a
            }, c).onUpdate(function (i) {
              e.divsContainer.children[t].style.opacity = i.opacity, e.divsContainer.children[n].style.opacity = 1 - i.opacity, e.divsContainer.children[n].style.transform = "scale(".concat(i.scale, ")");
            }).start();
            d.easing(f(p)), d.onComplete(function () {
              e.willUnmount || ("function" == typeof h && h(n, t), e.setState({
                index: t
              }, function () {
                e.divsContainer.children[n].style.transform = "scale(1)";
              }), s && (u || t < r.length - 1) && (clearTimeout(e.timeout), e.timeout = setTimeout(function () {
                e.zoomTo((t + 1) % r.length);
              }, l)));
            });
          }
        }
      }]) && D(n.prototype, s), u && D(n, u), e;
    }(i.Component);

    G.defaultProps = {
      duration: 5e3,
      transitionDuration: 1e3,
      defaultIndex: 0,
      indicators: !1,
      arrows: !0,
      autoplay: !0,
      infinite: !0,
      pauseOnHover: !0,
      easing: "linear"
    }, G.propTypes = {
      duration: u.a.number,
      transitionDuration: u.a.number,
      defaultIndex: u.a.number,
      indicators: u.a.oneOfType([u.a.bool, u.a.func]),
      scale: u.a.number.isRequired,
      arrows: u.a.bool,
      autoplay: u.a.bool,
      infinite: u.a.bool,
      onChange: u.a.func,
      pauseOnHover: u.a.bool,
      prevArrow: u.a.oneOfType([u.a.object, u.a.func]),
      nextArrow: u.a.oneOfType([u.a.object, u.a.func]),
      easing: u.a.string
    };
    var L = G;
  }]);
});

/***/ })

}]);
//# sourceMappingURL=8.chunk.js.map