webpackJsonp([0,3],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),u=o(r),l=n(28),a=o(l),i=n(166),s=o(i);a.default.render(u.default.createElement(s.default,null),document.getElementById("app"))},166:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),c=o(s),f=n(167),p=o(f),d=n(168),h=o(d),y=n(172),b=o(y),m=function(e){function t(e){u(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sentence:"This is a text ,\nfor your pleasure,\nfor my fun,\nwin win ",chunks:[],inputHidden:!1,twoColumns:!1,boxes:!0,help:!1},n.sentenceChanged=n.sentenceChanged.bind(n),n.toggleTwoColumns=n.toggleTwoColumns.bind(n),n.toggleHelp=n.toggleHelp.bind(n),n.addChunk=n.addChunk.bind(n),n}return a(t,e),i(t,[{key:"sentenceChanged",value:function(e){this.setState({sentence:e.target.value})}},{key:"toggleTwoColumns",value:function(){this.setState({twoColumns:!this.state.twoColumns})}},{key:"toggleHelp",value:function(){console.log("help"),this.setState({help:!this.state.help})}},{key:"addChunk",value:function(){var e=[{sentence:this.state.sentence,boxes:this.state.boxes}].concat(r(this.state.chunks));this.setState({chunks:e})}},{key:"render",value:function(){var e=this,t=this.state.twoColumns,n=this.state.chunks.map(function(e,n){return c.default.createElement(b.default,{key:n,sentence:e.sentence,boxes:e.boxes,twoColumns:t})});return c.default.createElement("div",{className:"silhouetteAppContainer"},c.default.createElement("section",null,c.default.createElement(p.default,{inputHidden:this.state.inputHidden,toggleShowInput:function(){return e.setState({inputHidden:!e.state.inputHidden})},toggleBoxes:function(){return e.setState({boxes:!e.state.boxes})},toggleTwoColumns:function(){return e.toggleTwoColumns()},toggleHelp:function(){return e.toggleHelp()}})),this.state.help&&!this.state.inputHidden?c.default.createElement("section",{className:"help"},"Options:",c.default.createElement("ul",null,c.default.createElement("li",null,"Hide input: check this to hide input before printing"),c.default.createElement("li",null,"Show text: display the text instead of boxes"),c.default.createElement("li",null,"Two columns: show the same text/boxes in two columns."))):"",c.default.createElement("section",null,this.state.inputHidden?"":c.default.createElement("div",{className:"inputContainer"},c.default.createElement("textarea",{rows:"10",cols:"25",onChange:this.sentenceChanged},this.state.sentence),c.default.createElement("button",{onClick:this.addChunk},"Add")),c.default.createElement("div",{className:"row"},c.default.createElement(h.default,{sentence:this.state.sentence,showBoxes:this.state.boxes,key:"1"}),this.state.twoColumns?c.default.createElement(h.default,{sentence:this.state.sentence,showBoxes:this.state.boxes,key:"2"}):"")),c.default.createElement("section",null,n))}}]),t}(c.default.Component);t.default=m},167:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),l=function(e){var t=e.inputHidden,n=e.toggleShowInput,o=e.toggleBoxes,r=e.toggleTwoColumns,l=e.toggleHelp;return u.default.createElement("p",null,u.default.createElement("span",null,t?"":"Hide input"),u.default.createElement("input",{type:"checkbox",onClick:function(){return n()},value:t}),t?"":u.default.createElement("span",null,"Show text",u.default.createElement("input",{type:"checkbox",onClick:function(){return o()}}),"Two Columns",u.default.createElement("input",{type:"checkbox",onClick:function(){return r()}}),u.default.createElement("a",{onClick:function(){return l()}},"Help")))};l.propTypes={inputHidden:r.PropTypes.bool.isRequired,toggleShowInput:r.PropTypes.func.isRequired,toggleBoxes:r.PropTypes.func.isRequired,toggleTwoColumns:r.PropTypes.func.isRequired,toggleHelp:r.PropTypes.func.isRequired},t.default=l},168:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),s=o(i),c=n(169),f=o(c),p=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){var e=this.props.showBoxes,t=this.props.sentence?this.props.sentence.split(/\r\n|\n|\r/).map(function(t,n){return s.default.createElement(f.default,{line:t,key:n,showBoxes:e})}):"-";return s.default.createElement("div",null,t)}}]),t}(s.default.Component);t.default=p},169:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),s=o(i),c=n(170),f=o(c),p=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){var e=this.props.showBoxes,t=this.props.line.split(/\s/).map(function(t,n){return e?s.default.createElement("span",{key:n},s.default.createElement(f.default,{word:t,key:n}),s.default.createElement("span",{className:"nonLetter"})):s.default.createElement("div",{className:"plainWord",key:n}," ",t," ")});return s.default.createElement("div",{className:"line"},"  ",t," ")}}]),t}(s.default.Component);t.default=p},170:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),s=o(i),c=n(171),f=o(c),p=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){var e=this.props.word?this.props.word.split("").map(function(e,t){return s.default.createElement(f.default,{letter:e,key:t})}):" ";return s.default.createElement("div",{className:"word"}," ",e," ")}}]),t}(s.default.Component);t.default=p},171:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),s=o(i),c=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){var e,t,n=1,o=this.props.letter,r={display:"inline-block"};return r.bottom=0,r.position="relative",/^[0-9a-zA-Z\u00D8\u00C6\u00C5\u00E5\u00F8\u00E6]+$/.test(o)?(/^[A-Z\u00D8\u00C6\u00C5]+$/.test(o)?(e=30,t=30):/^[pgjy]+$/.test(o)?(e=30,t=20,r.bottom=-10):/^[0-9khtlbd]+$/.test(o)?(e=30,t=20):/^[f]+$/.test(o)?(e=40,t=20):/^[a-z\u00E5\u00F8\u00E6]+$/.test(o)&&(e=20,t=20,r.bottom=-10),r.minHeight=e*(1+n/100),r.minWidth=t*(1+n/100),r.bottom>0&&(r.bottom=""+r.bottom*(1+n/100)+"px"),s.default.createElement("span",{className:"letter",style:r},o)):(r.top=17,s.default.createElement("span",{className:"symbol",style:r}," "))}}]),t}(s.default.Component);t.default=c},172:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),l=n(168),a=o(l),i=function(e){var t=e.sentence,n=e.boxes,o=e.twoColumns;return u.default.createElement("div",{className:"row"},u.default.createElement(a.default,{sentence:t,showBoxes:n,key:"1"}),o?u.default.createElement(a.default,{sentence:t,showBoxes:n,key:"2"}):"")};i.propTypes={sentence:r.PropTypes.string.isRequired,boxes:r.PropTypes.bool.isRequired,twoColumns:r.PropTypes.bool.isRequired},t.default=i}});