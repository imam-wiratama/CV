(this["webpackJsonpimam-cv"]=this["webpackJsonpimam-cv"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),i=a.n(r),s=(a(13),a(3)),c=a(4),o=a(6),m=a(5),u=a(7),v=(a(14),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).init(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"init",value:function(){this.state={offsetX:"",offsetY:"",friction:1/32},this._mouseMove=this._mouseMove.bind(this)}},{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this._mouseMove)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this._mouseMove)}},{key:"_mouseMove",value:function(e){var t=window.innerWidth/2-e.clientX,a=window.innerHeight/2-e.clientY,n=0,l=0;n+=(-t-n)*this.state.friction,l+=(a-l)*this.state.friction,this.setState({offsetX:n,offsetY:l})}},{key:"render",value:function(){var e={transform:"translate(-50%, -50%) perspective(600px)\n                  rotateY(".concat(this.state.offsetX,"deg)\n                  rotateX(").concat(this.state.offsetY,"deg)")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{key:"1"},l.a.createElement("div",{class:"area"},l.a.createElement("ul",{class:"circles"},l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e})),l.a.createElement("li",null,l.a.createElement("div",{className:"wrapper",style:e}))))),l.a.createElement("div",{key:"2",class:"context"},l.a.createElement("h1",null,"Imam Wiratama")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4ab3d1aa.chunk.js.map