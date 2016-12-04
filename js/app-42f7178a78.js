"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}!function(){angular.module("welcomeToSite",["ngMaterial","ngMessages","ui.router","ngAnimate","home","pubnub.angular.service"])}(),angular.module("welcomeToSite").run(["$templateCache",function(e){e.put("home/home.tpl.html","<p>Hello</p>")}]),function(){function e(e){return function(n,t){return e.enabled(t,!0)}}function n(e){return function(n,t){return e.enabled(t,!1)}}e.$inject=["$animate"],n.$inject=["$animate"],angular.module("home",["ui.router"]).directive("enableAnimate",e).directive("disableAnimate",n),String.prototype.endsWith||(String.prototype.endsWith=function(e,n){var t=this.toString();("number"!=typeof n||!isFinite(n)||Math.floor(n)!==n||n>t.length)&&(n=t.length),n-=e.length;var a=t.indexOf(e,n);return a!==-1&&a===n})}(),function(){angular.module("home").constant("backendServer",{baseUrl:"https://api.welcometo.site"})}(),function(){angular.module("welcomeToSite").constant("hello","hello")}(),function(){function e(e){e.state("home",{url:"/",templateUrl:"home/home.tpl.html",controller:"HomeCtrl",controllerAs:"ctrl"})}e.$inject=["$stateProvider"],angular.module("home").config(e)}(),function(){var e=function n(e,t,a,o,r){_classCallCheck(this,n);var l=this;l.$scope=e,l.$log=a,l.$pubnubChannel=o,l.$interval=r,l.thePosition="Something",l.lat=1,l["long"]=1,l.Pubnub=t,l.Pubnub.init({publishKey:"pub-c-bd389cd2-4ed5-46b8-884e-6cb24623872d",subscribeKey:"sub-c-385e20e6-b9ac-11e6-9868-02ee2ddab7fe"}),l.$scope.channel=o("location"),l.$interval(function(){l.Pubnub.publish({message:{request:"whereAreYou"},channel:"locationrequest"},function(e,n){e.error?l.$log.log(e):l.$log.log("message Published w/ timetoken",n.timetoken)})},100),l.Pubnub.addListener({message:function(e){l.$log.log(e)}}),l.Pubnub.subscribe({channels:["location"]})};e.$inject=["$scope","Pubnub","$log","$pubnubChannel","$interval"],angular.module("home").controller("HomeCtrl",e)}(),function(){function e(e){e.definePalette("wagstaffs-green",{50:"f0f7e8",100:"daebc6",200:"c1dea1",300:"rgba(131, 189, 66, 0.7)",400:"#96c75e",500:"rgba(102, 163, 47, 1)",600:"rgba(131, 189, 66, 0.9)",700:"rgba(86, 149, 37, 1)",800:"rgba(131, 189, 66, 0.9)",900:"rgba(58, 125, 20, 0.7)",A100:"ccff90",A200:"b2ff59",A400:"76ff03",A700:"64dd17",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","A100","A200","A700"]}),e.definePalette("transparent-grey",{50:"#fafafa",100:"#f5f5f5",200:"rgba(238, 238, 238, 0.8)",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#ffffff",A200:"#000000",A400:"#303030",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A200 A400 A700"});var n=e.theme("default").primaryPalette("wagstaffs-green",{"default":"800","hue-1":"600","hue-2":"300","hue-3":"50"}).accentPalette("light-blue").warnPalette("deep-orange").backgroundPalette("transparent-grey",{"default":"200","hue-1":"A100","hue-2":"300","hue-3":"50"});n.foregroundPalette={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.68)",3:"rgba(0,0,0,0.55)",4:"rgba(0,0,0,0.35)"}}e.$inject=["$mdThemingProvider"],angular.module("welcomeToSite").config(e)}(),function(){function e(e,n){e.otherwise("/"),n.state("site",{"abstract":!0})}function n(e){return{link:function(n,t){var a=e.$on("$stateChangeStart",function(){t.removeClass("ng-hide")}),o=e.$on("$stateChangeSuccess",function(){t.addClass("ng-hide")}),r=e.$on("$stateChangeError",function(){t.addClass("ng-hide")}),l=e.$on("$stateChangeCancel",function(){t.addClass("ng-hide")});t.addClass("ng-hide"),n.$on("$destroy",function(){a(),o(),r(),l()})}}}e.$inject=["$urlRouterProvider","$stateProvider"],n.$inject=["$rootScope"],angular.module("welcomeToSite").config(e).directive("showDuringResolve",n)}();
//# sourceMappingURL=app-42f7178a78.js.map
