(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){e.exports=a(56)},28:function(e,t,a){},29:function(e,t,a){},5:function(e){e.exports=JSON.parse('{"FirstPage":{"title":"FirstPage","items":{"title":"Ramyad Mehdizadeh Seraj","subtitle":"Open-Source Enthusiast| ...","links":{"github":"https://github.com/ramyadmz","linkedin":"https://www.linkedin.com/in/ramyad-seraj/","stackoverflow":"https://stackoverflow.com/story/ramyad"}}},"AboutPage":{"title":"About","items":{"title":"About","text":"I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization."}},"ExperiencePage":{"title":"Experience","items":[{"Company":"INFORMATICS SERVICES CO.","Position":"ANALYST AND SENIOR MAINFRAME DEVELOPER","StartDate":"Sep 2012","EndDate":"Jun 2019","Desc":"Developing, maintenance and optimizing  Loan Servicing Softwares"},{"Company":"NEZAM CO.","Position":"SOFTWARE DEVELOPER","StartDate":"Dec 2011","EndDate":"Jun 2012","Desc":"Researching and learning new technologies for developing archiving system "}]},"SkillsPage":{"title":"Skills","items":[{"title":"React","level":"2","image":"react"},{"title":"HTML5","level":"2","image":"html5"},{"title":"CSS3","level":"2","image":"css3"},{"title":"Python","level":"1","image":"python"},{"title":"C++","level":"3","image":"cplusplus"},{"title":"MongoDB","level":"1","image":"mongodb"},{"title":"MySQL","level":"3","image":"mysql"}]},"icons":{"general":{"theme":"icons/theme.png"},"skills":{"js":"/url","html":"/url","css":"/url"}},"themes":{"themeI":{"palleteI":"#3E5050","palleteII":"#EDF5E3","palleteIII":"#EDF5E3","palleteIIII":"#74C697"},"themeII":{"palleteI":"#444","palleteII":"#B2AFAC","palleteIII":"#959492","palleteIIII":"#FFCE2B"},"themeIII":{"palleteI":"#59253A","palleteII":"#EDF5E3","palleteIII":"#EDF5E3","palleteIIII":"#2D4159"}}}')},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),c=a.n(i),r=(a(28),a(1)),s=a(2),o=a(11),m=a(4),u=a(3),h=(a(29),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.children;return l.a.createElement("div",{className:"fullpage ".concat(this.props.className||""," ")},e)}}]),a}(n.Component)),p=a(6),E=a(22),g=(a(51),a(52),a(5)),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(p.Element,{id:"home",name:"home"},l.a.createElement(h,null,l.a.createElement("h1",{className:"palete2 heading"},g.FirstPage.items.title),l.a.createElement("div",null,l.a.createElement("h3",{className:"palete3 heading"},g.FirstPage.items.subtitle)),l.a.createElement("div",{className:"icons-wrapper"},Object.keys(g.FirstPage.items.links).map((function(e){return l.a.createElement("div",{className:"icon"},l.a.createElement(E.SocialMediaIconsReact,{icon:e,url:g.FirstPage.items.links[e]}))})))))}}]),a}(n.Component),v=(a(53),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(p.Element,{id:"about",name:"about"},l.a.createElement(h,null,l.a.createElement("h1",{className:"palete2 heading"},g.AboutPage.items.title),l.a.createElement("div",null,l.a.createElement("p",{className:"palete3 text"},g.AboutPage.items.text))))}}]),a}(n.Component)),I=(a(54),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(p.Element,{id:"Skills",name:"Skills"},l.a.createElement(h,null,l.a.createElement("div",{className:"skill-list"},g.SkillsPage.items.map((function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("h4",{className:"skill-title palete2"},e.title),l.a.createElement("img",{className:"skill-icon",src:"https://icongr.am/devicon/".concat(e.image,"-original.svg?size=64"),alt:"skill.title"}))})))))}}]),a}(n.Component)),b=(a(21),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"navlist"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0},l.a.createElement("a",{href:""},"home"))),l.a.createElement("li",null,l.a.createElement(p.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0},l.a.createElement("a",{href:""},"about"))),l.a.createElement("li",null,l.a.createElement(p.Link,{activeClass:"active",to:"Skills",spy:!0,smooth:!0},l.a.createElement("a",{href:""},"Skills"))))),l.a.createElement("div",{className:"themebox"},l.a.createElement("img",{onClick:function(){e.props.changeTheme()},className:"themeicon",src:g.icons.general.theme,alt:"change theme"})))}}]),a}(n.Component)),f=(a(55),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={theme:"themeI"},e.changeTheme=e.changeTheme.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"changeTheme",value:function(){this.setState({theme:"themeIII"===this.state.theme?"themeI":this.state.theme+"I"})}},{key:"render",value:function(){return l.a.createElement("div",{className:this.state.theme},l.a.createElement(b,{changeTheme:this.changeTheme.bind(this)}),l.a.createElement(d,null),l.a.createElement(v,null),l.a.createElement(I,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.a6b92775.chunk.js.map