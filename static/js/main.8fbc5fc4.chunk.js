(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{16:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(7),o=r.n(n),u=(r(16),r(2)),a=r(3),i=r(6),c=r(5),s=r(0),p=r.n(s),l=r(1),b=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{id:"display-container",children:Object(l.jsx)("p",{id:"display",children:this.props.output})})}}]),r}(p.a.Component),d="HANDLE_NUMBER",j="HANDLE_OPERATOR",h="HANDLE_DECIMAL",O="HANDLE_PERCENT",v="SOLVE",f="CLEAR";var m=r(4),k=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{class:"buttons",children:[Object(l.jsx)("button",{id:"clear",value:"C",onClick:this.props.clear,children:"clear"}),Object(l.jsx)("button",{id:"percentify",value:"%",onClick:this.props.handlePercent,children:"%"}),Object(l.jsx)("button",{id:"divide",value:"/",onClick:function(){return e.props.handleOperator("/")},className:"/"===this.props.operator?"selected-button":"",children:"\xf7"}),Object(l.jsx)("button",{id:"seven",value:"7",onClick:function(){return e.props.handleNumber("7")},children:"7"}),Object(l.jsx)("button",{id:"eight",value:"8",onClick:function(){return e.props.handleNumber("8")},children:"8"}),Object(l.jsx)("button",{id:"nine",value:"9",onClick:function(){return e.props.handleNumber("9")},children:"9"}),Object(l.jsx)("button",{id:"multiply",value:"*",onClick:function(){return e.props.handleOperator("*")},className:"*"===this.props.operator?"selected-button":"",children:"\xd7"}),Object(l.jsx)("button",{id:"four",value:"4",onClick:function(){return e.props.handleNumber("4")},children:"4"}),Object(l.jsx)("button",{id:"five",value:"5",onClick:function(){return e.props.handleNumber("5")},children:"5"}),Object(l.jsx)("button",{id:"six",value:"6",onClick:function(){return e.props.handleNumber("6")},children:"6"}),Object(l.jsx)("button",{id:"subtract",value:"-",onClick:function(){return e.props.handleOperator("-")},className:"-"===this.props.operator?"selected-button":"",children:"-"}),Object(l.jsx)("button",{id:"one",value:"1",onClick:function(){return e.props.handleNumber("1")},children:"1"}),Object(l.jsx)("button",{id:"two",value:"2",onClick:function(){return e.props.handleNumber("2")},children:"2"}),Object(l.jsx)("button",{id:"three",value:"3",onClick:function(){return e.props.handleNumber("3")},children:"3"}),Object(l.jsx)("button",{id:"add",value:"+",onClick:function(){return e.props.handleOperator("+")},className:"+"===this.props.operator?"selected-button":"",children:"+"}),Object(l.jsx)("button",{id:"zero",value:"0",onClick:function(){return e.props.handleNumber("0")},children:"0"}),Object(l.jsx)("button",{id:"decimal",value:".",onClick:this.props.handleDecimal,children:"."}),Object(l.jsx)("button",{id:"equals",value:"=",onClick:this.props.solve,children:"="})]})}}]),r}(p.a.Component);var x=Object(m.b)((function(e){return{operator:e.operator}}),(function(e){return{handleNumber:function(t){e(function(e){return{type:d,number:e}}(t))},handleOperator:function(t){e(function(e){return{type:j,operator:e}}(t))},handleDecimal:function(){e({type:h})},handlePercent:function(){e({type:O})},solve:function(){e({type:v})},clear:function(){e({type:f})}}}))(k),N=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"calculator",children:[Object(l.jsx)(b,{output:this.props.output}),Object(l.jsx)(x,{})]})}}]),r}(p.a.Component);var C=Object(m.b)((function(e){return{output:e.output}}))(N),g=(r(24),r(11)),y={output:"0",previous:{number:null,operator:null},operator:"",minusUsedAfterOperator:!1};var A=Object(g.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=e.output,n=18===r.length,o=-1!==r.indexOf("."),u="0"===r,a=r.length-r.indexOf("."),i=o?a+1:2,c=""!==e.operator,s="-"===e.output[0],p=null!==e.previous.operator,l="-"===e.output;switch(t.type){case d:var b=u?t.number:e.output+t.number,m="0"===t.number;return c?l?Object.assign({},e,{output:"-"+t.number,operator:""}):Object.assign({},e,{output:t.number,operator:""}):n||u&&m?e:Object.assign({},e,{output:b});case j:var k="-"===t.operator;if(console.log(e.previous.number+" "+e.previous.operator+" "+e.output),c){if(k)return s?Object.assign({},e,{output:r.slice(1),minusUsedAfterOperator:!1}):Object.assign({},e,{output:"-",minusUsedAfterOperator:!0});if(e.minusUsedAfterOperator)return Object.assign({},e,{output:"",previous:{number:e.previous.number,operator:t.operator},operator:t.operator,minusUsedAfterOperator:!1})}else if(p){var x=0,N=Number(e.previous.number),C=Number(e.output);switch(e.previous.operator){case"*":x=N*C;break;case"/":x=N/C;break;case"+":x=N+C;break;case"-":x=N-C;break;default:x="error"}var g=(x=x.toString()).length>18;return g&&(x=x.slice(0,18)),Object.assign({},e,{output:x,previous:{number:x,operator:t.operator},operator:t.operator})}return Object.assign({},e,{previous:{number:e.output,operator:t.operator},operator:t.operator});case h:return o?e:Object.assign({},e,{output:e.output+"."});case O:return n||u?e:Object.assign({},e,{output:(e.output/100).toFixed(i)});case v:var A=0,E=Number(e.previous.number),D=Number(e.output);if(console.log(e.previous.number+" "+e.previous.operator+" "+e.output),null===e.previous.number||null===e.previous.operator)return e;switch(e.previous.operator){case"*":A=E*D;break;case"/":A=E/D;break;case"+":A=E+D;break;case"-":A=E-D;break;default:A="error"}return(A=A.toString()).length>18&&(A=A.slice(0,18)),Object.assign({},e,{output:A,previous:{number:null,operator:null},operator:""});case f:return Object.assign({},e,y);default:return e}}));o.a.render(Object(l.jsx)(m.a,{store:A,children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.8fbc5fc4.chunk.js.map