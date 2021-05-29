(this["webpackJsonpcatch-a-star"]=this["webpackJsonpcatch-a-star"]||[]).push([[0],{171:function(t,e,a){},329:function(t,e,a){},331:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),i=a(6),c=a.n(i),r=(a(171),a(22)),o=a(23),l=a(27),u=a(29),d=a.p+"static/media/spacex_logo.ad25dfff.svg",h=a(5),j=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(h.jsx)("p",{className:"title",children:"\xa0\xa0\xa0\xa0NPM Star \u2728"})]})}}]),a}(n.Component),p=a(163),b=a(55),f=a(67),m=a.n(f),g=a(340),O=a(341),v="GUHCUW-PUZ62B-2ECFT8-4NVY",x=a(345),y=a(348),w=a(349),S=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).showSatellite=function(e){e.preventDefault(),t.props.form.validateFields((function(e,a){e||t.props.onShow(a)}))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.form.getFieldDecorator;return Object(h.jsxs)(x.a,Object(b.a)(Object(b.a)({},{labelCol:{xs:{span:24},sm:{span:11}},wrapperCol:{xs:{span:24},sm:{span:13}}}),{},{className:"sat-setting",onSubmit:this.showSatellite,children:[Object(h.jsx)(x.a.Item,{label:"Longitude(degrees)",children:t("longitude",{rules:[{required:!0,message:"Please input your Longitude"}]})(Object(h.jsx)(y.a,{min:-180,max:180,style:{width:"100%"},placeholder:"Please input Longitude"}))}),Object(h.jsx)(x.a.Item,{label:"Latitude(degrees)",children:t("latitude",{rules:[{required:!0,message:"Please input your Latitude"}]})(Object(h.jsx)(y.a,{placeholder:"Please input Latitude",min:-90,max:90,style:{width:"100%"}}))}),Object(h.jsx)(x.a.Item,{label:"Elevation(meters)",children:t("elevation",{rules:[{required:!0,message:"Please input your Elevation"}]})(Object(h.jsx)(y.a,{placeholder:"Please input Elevation",min:-413,max:8850,style:{width:"100%"}}))}),Object(h.jsx)(x.a.Item,{label:"Altitude(degrees)",children:t("altitude",{rules:[{required:!0,message:"Please input your Altitude"}]})(Object(h.jsx)(y.a,{placeholder:"Please input Altitude",min:0,max:90,style:{width:"100%"}}))}),Object(h.jsx)(x.a.Item,{label:"Duration(secs)",children:t("duration",{rules:[{required:!0,message:"Please input your Duration"}]})(Object(h.jsx)(y.a,{placeholder:"Please input Duration",min:0,max:90,style:{width:"100%"}}))}),Object(h.jsx)(x.a.Item,{className:"show-nearby",children:Object(h.jsx)(w.a,{type:"primary",htmlType:"submit",className:"sat-btn",style:{textAlign:"center"},children:"Find Nearby Satellite"})})]}))}}]),a}(n.Component),L=x.a.create({name:"satellite-setting"})(S),N=a(155),k=a(343),D=a(350),P=a(338),I=a.p+"static/media/satellite.057df29c.svg",C=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).onChange=function(e){var a=e.target,n=a.dataInfo,s=a.checked,i=t.state.selected,c=t.addOrRemove(n,s,i);t.setState({selected:c})},t.addOrRemove=function(t,e,a){var n=a.some((function(e){return e.satid===t.satid}));return e&&!n&&a.push(t),!e&&n&&(a=a.filter((function(e){return e.satid!==t.satid}))),a},t.onShowSatMap=function(){console.log("show track"),console.log(t.state.selected),t.props.onShowMap(t.state.selected)},t.state={selected:[],isLoad:!1},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props.satInfo?this.props.satInfo.above:[],a=this.props.isLoad,n=this.state.selected;return Object(h.jsxs)("div",{className:"sat-list-box",children:[Object(h.jsx)("div",{className:"btn-container",children:Object(h.jsx)(w.a,{className:"sat-list-btn",size:"large",disabled:0===n.length,onClick:this.onShowSatMap,children:"Track on the map"})}),Object(h.jsx)("hr",{}),a?Object(h.jsx)("div",{className:"spin-box",children:Object(h.jsx)(N.a,{tip:"Loading...",size:"large"})}):Object(h.jsx)(k.a,{className:"sat-list",itemLayout:"horizontal",size:"small",dataSource:e,renderItem:function(e){return Object(h.jsx)(k.a.Item,{actions:[Object(h.jsx)(D.a,{dataInfo:e,onChange:t.onChange})],children:Object(h.jsx)(k.a.Item.Meta,{avatar:Object(h.jsx)(P.a,{size:50,src:I}),title:Object(h.jsx)("p",{children:e.satname}),description:"Launch Date: ".concat(e.launchDate)})})}})]})}}]),a}(n.Component),M=a(162),A=a(344),T=a(351),E=a(347),F=a(342),R=a(353),z=a(352),B=a(346),q=(a(329),960),U=600,H=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).track=function(e){if(!e[0].hasOwnProperty("positions"))throw new Error("no position data");var a=e[0].positions.length,n=(t.props.observerData.duration,t.map.context2),s=new Date,i=0,c=setInterval((function(){var r=new Date,o=0===i?0:r-s,l=new Date(s.getTime()+60*o);if(n.clearRect(0,0,q,U),n.font="bold 14px sans-serif",n.fillStyle="#333",n.textAlign="center",n.fillText(Object(B.a)(l),480,10),i>=a)return clearInterval(c),t.setState({isDrawing:!1}),void(document.getElementsByClassName("hint")[0].innerHTML="");e.forEach((function(e){var a=e.info,n=e.positions;t.drawSat(a,n[i])})),i+=60}),1e3)},t.drawSat=function(e,a){var n=a.satlongitude,s=a.satlatitude;if(n&&s){var i=e.satname.match(/\d+/g).join(""),c=t.map,r=c.projection,o=c.context2,l=r([n,s]);o.fillStyle=t.color(i),o.beginPath(),o.arc(l[0],l[1],4,0,2*Math.PI),o.fill(),o.font="bold 11px sans-serif",o.textAlign="center",o.fillText(i,l[0],l[1]+14)}},t.generateMap=function(e){var a=Object(A.a)().scale(170).translate([480,300]).precision(.1),n=Object(T.a)(),s=Object(F.a)(t.refMap.current).attr("width",q).attr("height",U),i=Object(F.a)(t.refTrack.current).attr("width",q).attr("height",U),c=s.node().getContext("2d"),r=i.node().getContext("2d"),o=Object(E.a)().projection(a).context(c);e.forEach((function(t){c.fillStyle="#B3DDEF",c.strokeStyle="#000",c.globalAlpha=.7,c.beginPath(),o(t),c.fill(),c.stroke(),c.strokeStyle="rgba(220, 220, 220, 0.1)",c.beginPath(),o(n()),c.lineWidth=.1,c.stroke(),c.beginPath(),c.lineWidth=.5,o(n.outline()),c.stroke()})),t.map={projection:a,graticule:n,context:c,context2:r}},t.state={isLoading:!1,isDrawing:!1},t.map=null,t.color=z.a(R.a),t.refMap=s.a.createRef(),t.refTrack=s.a.createRef(),t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;m.a.get("https://unpkg.com/world-atlas@1/world/110m.json").then((function(e){var a=e.data,n=Object(M.a)(a,a.objects.countries).features;t.generateMap(n)})).catch((function(t){console.log("err in fetch map data ",t.message)}))}},{key:"componentDidUpdate",value:function(t,e,a){var n=this;if(t.satData!==this.props.satData){var s=this.props.observerData,i=s.latitude,c=s.longitude,r=s.elevation,o=(s.altitude,60*s.duration);this.setState({isLoading:!0});var l=this.props.satData.map((function(t){var e=t.satid,a="/api/".concat("rest/v1/satellite/positions","/").concat(e,"/").concat(i,"/").concat(c,"/").concat(r,"/").concat(o,"/&apiKey=").concat(v);return m.a.get(a)}));Promise.all(l).then((function(t){var a=t.map((function(t){return t.data}));(n.setState({isLoading:!1,isDrawing:!0}),e.isDrawing)?document.getElementsByClassName("hint")[0].innerHTML="Please wait for these satellite animation to finish before selection new ones!":n.track(a)})).catch((function(t){console.log("err in fetch satellite position -> ",t.message)}))}}},{key:"render",value:function(){var t=this.state.isLoading;return Object(h.jsxs)("div",{className:"map-box",children:[t?Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)(N.a,{tip:"Loading...",size:"large"})}):null,Object(h.jsx)("canvas",{className:"map",ref:this.refMap}),Object(h.jsx)("canvas",{className:"track",ref:this.refTrack}),Object(h.jsx)("div",{className:"hint"})]})}}]),a}(n.Component),W=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).showMap=function(e){t.setState((function(t){return Object(b.a)(Object(b.a)({},t),{},{satList:Object(p.a)(e)})}))},t.showNearbySatellite=function(e){t.setState({isLoadingList:!0,setting:e}),t.fetchSatellite(e)},t.fetchSatellite=function(e){var a=e.latitude,n=e.longitude,s=e.elevation,i=e.altitude,c="/api/".concat("rest/v1/satellite/above","/").concat(a,"/").concat(n,"/").concat(s,"/").concat(i,"/").concat("52","/&apiKey=").concat(v);t.setState({isLoadingList:!0}),m.a.get(c).then((function(e){console.log(e.data),t.setState({satInfo:e.data,isLoadingList:!1})})).catch((function(t){console.log("err in fetch satellite -> ",t)}))},t.state={satInfo:null,satList:null,setting:null,isLoadingList:!1},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.isLoadingList,a=t.satInfo,n=t.satList,s=t.setting;return Object(h.jsxs)(g.a,{className:"main",children:[Object(h.jsxs)(O.a,{span:8,className:"left-side",children:[Object(h.jsx)(L,{onShow:this.showNearbySatellite}),Object(h.jsx)(C,{isLoad:e,satInfo:a,onShowMap:this.showMap})]}),Object(h.jsx)(O.a,{span:16,className:"right-side",children:Object(h.jsx)(H,{satData:n,observerData:s})})]})}}]),a}(n.Component),J=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("footer",{className:"footer",children:["\xa92020 NPM-Star. All Rights Reserved. Made with \ud83d\udc99 by ",Object(h.jsx)("a",{href:"https://annie-ren.ca",children:"Annie Ren"}),"."]})}}]),a}(n.Component);var K=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{}),Object(h.jsx)(W,{}),Object(h.jsx)(J,{})]})},G=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,354)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};c.a.render(Object(h.jsx)(K,{}),document.getElementById("root")),G()}},[[331,1,2]]]);
//# sourceMappingURL=main.128fd7b6.chunk.js.map