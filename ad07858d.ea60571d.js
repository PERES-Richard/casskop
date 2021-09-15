(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{120:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return s})),a.d(n,"default",(function(){return d}));var t=a(3),r=a(7),o=(a(0),a(142)),i={id:"5_sidecars",title:"Sidecars",sidebar_label:"Sidecars"},c={unversionedId:"3_configuration_deployment/5_sidecars",id:"3_configuration_deployment/5_sidecars",isDocsHomePage:!1,title:"Sidecars",description:"For extra needs not covered by the defaults container managed through the CassandraCluster CRD, we are allowing you to define your own sidecars which will be deployed into the cassandra node pods.",source:"@site/docs/3_configuration_deployment/5_sidecars.md",slug:"/3_configuration_deployment/5_sidecars",permalink:"/casskop/docs/3_configuration_deployment/5_sidecars",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/3_configuration_deployment/5_sidecars.md",version:"current",sidebar_label:"Sidecars",sidebar:"docs",previous:{title:"Cassandra Configuration",permalink:"/casskop/docs/3_configuration_deployment/2_cassandra_configuration"},next:{title:"Advanced Configuration",permalink:"/casskop/docs/3_configuration_deployment/9_advanced_configuration"}},s=[],l={rightToc:s};function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For extra needs not covered by the defaults container managed through the CassandraCluster CRD, we are allowing you to define your own sidecars which will be deployed into the cassandra node pods.\nTo do this, you will configure the ",Object(o.b)("inlineCode",{parentName:"p"},"SidecarConfigs")," property in ",Object(o.b)("inlineCode",{parentName:"p"},"CassandraCluster.Spec"),"."),Object(o.b)("p",null,"CassandraCluster fragment for dynamic sidecars definition :"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),'# ...\n  sidecarConfigs:\n    - args: ["tail", "-F", "/var/log/cassandra/system.log"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: cassandra-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: cassandra-logs\n    - args: ["tail", "-F", "/var/log/cassandra/gc.log.0.current"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: gc-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: gc-logs\n# ...\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sidecarConfigs")," ",Object(o.b)("em",{parentName:"li"},"(required)")," : Defines the list of container config object, which will be added into each pod of cassandra node, it requires a list of kubernetes Container spec.")),Object(o.b)("p",null,"With the above configuration, the following configuration will be added to the ",Object(o.b)("inlineCode",{parentName:"p"},"rack statefulset")," definition :"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),'# ...\n#   ...\n  containers:\n    - args: ["tail", "-F", "/var/log/cassandra/system.log"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: cassandra-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: cassandra-logs\n    - args: ["tail", "-F", "/var/log/cassandra/gc.log.0.current"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: gc-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: gc-logs\n#   ...\n# ...\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that all sidecars added with this configuration will have some of the environment variables from cassandra container merged with those defined into the sidecar container\nfor example :"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"CASSANDRA_CLUSTER_NAME"),Object(o.b)("li",{parentName:"ul"},"CASSANDRA_SEEDS"),Object(o.b)("li",{parentName:"ul"},"CASSANDRA_DC"),Object(o.b)("li",{parentName:"ul"},"CASSANDRA_RACK")))))}d.isMDXComponent=!0},142:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return b}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=t,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return a?r.a.createElement(b,c(c({ref:n},l),{},{components:a})):r.a.createElement(b,c({ref:n},l))}));function b(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);