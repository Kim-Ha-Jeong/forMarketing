webpackHotUpdate("app",{

/***/ "../../../../src/SignUpScreen.js":
/*!**********************************************************************!*\
  !*** C:/Users/kha03/Desktop/forMarketing-master/src/SignUpScreen.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../@babel/runtime/helpers/getPrototypeOf.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../@babel/runtime/helpers/inherits.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "../../../react/index.js"));var _reactNative=__webpack_require__(/*! react-native */ "../../../react-native-web/dist/index.js");var _Style=_interopRequireDefault(__webpack_require__(/*! ./Style */ "../../../../src/Style.js"));var _FooterButton=_interopRequireDefault(__webpack_require__(/*! ./FooterButton */ "../../../../src/FooterButton.js"));var _Ionicons=_interopRequireDefault(__webpack_require__(/*! react-native-vector-icons/Ionicons */ "../../../react-native-vector-icons/Ionicons.js"));var firebase=_interopRequireWildcard(__webpack_require__(/*! firebase */ "../../../firebase/dist/index.cjs.js"));var _reactNativeEasyToast=_interopRequireDefault(__webpack_require__(/*! react-native-easy-toast */ "../../../react-native-easy-toast/index.js"));var _jsxFileName="C:\\Users\\kha03\\Desktop\\forMarketing-master\\src\\SignUpScreen.js";var SignUpScreen=function(_React$Component){(0,_inherits2.default)(SignUpScreen,_React$Component);function SignUpScreen(props){var _this;(0,_classCallCheck2.default)(this,SignUpScreen);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(SignUpScreen).call(this,props));_this.handleSignUp=function(){firebase.auth().createUserWithEmailAndPassword(_this.state.email,_this.state.password).then(function(result){return result.user.updateProfile({displayName:_this.state.name,photoURL:_this.state.team});}).then(function(){return _this.props.navigation.navigate('Login');}).catch(function(){return _this.refs.toast.show('이메일 형식을 확인해 주세요\n비밀번호는 6자 이상이어야 합니다.',1000);});};_this.state={name:' ',team:' ',email:' ',password:' '};return _this;}(0,_createClass2.default)(SignUpScreen,[{key:"render",value:function render(){var _this2=this;return _react.default.createElement(_reactNative.View,{style:_Style.default.container,__source:{fileName:_jsxFileName,lineNumber:41}},_react.default.createElement(_reactNative.TouchableOpacity,{style:[_Style.default.arrow,this.props.style],onPress:function onPress(){return _this2.props.navigation.navigate('Login');},__source:{fileName:_jsxFileName,lineNumber:42}},_react.default.createElement(_Ionicons.default,{name:"ios-arrow-back",size:30,color:"#ec1468",__source:{fileName:_jsxFileName,lineNumber:46}})),_react.default.createElement(_reactNative.Image,{source:__webpack_require__(/*! ./icon.png */ "../../../../src/icon.png"),style:_Style.default.icon,__source:{fileName:_jsxFileName,lineNumber:48}}),_react.default.createElement(_reactNative.Text,{style:_Style.default.signUpTitle,__source:{fileName:_jsxFileName,lineNumber:49}},"For Marketing","\n",_react.default.createElement(_reactNative.Text,{style:{fontSize:14},__source:{fileName:_jsxFileName,lineNumber:50}},"\uACC4\uC815 \uC0DD\uC131")),_react.default.createElement(_reactNative.TextInput,{style:_Style.default.textInputButton,onChangeText:function onChangeText(name){return _this2.setState({name:name});},placeholder:"\uC774\uB984",autoCorrect:false,__source:{fileName:_jsxFileName,lineNumber:52}}),_react.default.createElement(_reactNative.TextInput,{style:_Style.default.textInputButton,onChangeText:function onChangeText(team){return _this2.setState({team:team});},placeholder:"\uD300 / \uD300\uC6D0 or \uD300\uC7A5 / \uAE30\uC218",autoCorrect:false,__source:{fileName:_jsxFileName,lineNumber:58}}),_react.default.createElement(_reactNative.TextInput,{style:_Style.default.textInputButton,onChangeText:function onChangeText(email){return _this2.setState({email:email});},placeholder:"\uC774\uBA54\uC77C",autoCorrect:false,__source:{fileName:_jsxFileName,lineNumber:64}}),_react.default.createElement(_reactNative.TextInput,{style:_Style.default.textInputButton,onChangeText:function onChangeText(password){return _this2.setState({password:password});},placeholder:"\uBE44\uBC00\uBC88\uD638",autoCorrect:false,secureTextEntry:true,__source:{fileName:_jsxFileName,lineNumber:70}}),_react.default.createElement(_FooterButton.default,{buttonText:"\uD68C\uC6D0\uAC00\uC785",onPress:this.handleSignUp,__source:{fileName:_jsxFileName,lineNumber:77}}),_react.default.createElement(_reactNativeEasyToast.default,{ref:"toast",__source:{fileName:_jsxFileName,lineNumber:81}}));}}]);return SignUpScreen;}(_react.default.Component);exports.default=SignUpScreen;

/***/ })

})
//# sourceMappingURL=app.7151e5a583831d646a32.hot-update.js.map