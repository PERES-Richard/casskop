(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var c=a(0),n=a.n(c);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),b=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,s=e.originalType,r=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=c,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||s;return a?n.a.createElement(m,i(i({ref:t},o),{},{components:a})):n.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,r[1]=i;for(var o=2;o<s;o++)r[o]=a[o];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var c=a(2),n=a(6),s=(a(0),a(125)),r={id:"2_features",title:"Features",sidebar_label:"Features"},i={unversionedId:"1_concepts/2_features",id:"1_concepts/2_features",isDocsHomePage:!1,title:"Features",description:"To highligt some of the features we needed and were not possible with the operators available, please keep reading",source:"@site/docs/1_concepts/2_features.md",slug:"/1_concepts/2_features",permalink:"/casskop/docs/1_concepts/2_features",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/1_concepts/2_features.md",version:"current",sidebar_label:"Features",sidebar:"docs",previous:{title:"Introduction",permalink:"/casskop/docs/1_concepts/1_introduction"},next:{title:"Design Principes",permalink:"/casskop/docs/1_concepts/3_design_principes"}},l=[],o={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(c.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"To highligt some of the features we needed and were not possible with the operators available, please keep reading "),Object(s.b)("p",null,"CassKop deals with Cassandra clusters on one datacenter. For multi-dacenters deployments, please use ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/tree/master/multi-casskop"}),"Multi-Casskop")," in addition to CassKop. This second operator is part of this same repository."),Object(s.b)("p",null,"The following features are supported by CassKop:"),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Deployment of a C* cluster (rack or AZ aware)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Scaling up the cluster (with cleanup)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Scaling down the cluster (with decommission prior to Kubernetes scale down)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Pods operations (removenode, upgradesstable, cleanup, rebuild..)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Adding a Cassandra DC"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Removing a Cassandra DC"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Setting and modifying configuration files"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Setting and modifying configuration parameters"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Update of the Cassandra docker image"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Rolling update of a Cassandra cluster",Object(s.b)("ul",Object(c.a)({parentName:"li"},{className:"contains-task-list"}),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Update of Cassandra version (including upgradesstable in case of major upgrade)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Update of JVM"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Update of configuration"))),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Rolling restart of a Cassandra rack"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Stopping a Kubernetes node for maintenance",Object(s.b)("ul",Object(c.a)({parentName:"li"},{className:"contains-task-list"}),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Process a remove node (and create new Cassandra node on another Kubernetes node)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Process a replace address (of the old Cassandra node on another Kubernetes node)"))),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Manage operations on pods through CassKop plugin (cleanup, rebuild, upgradesstable, removenode..)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Monitoring (using Instaclustr Prometheus exporter to Prometheus/Grafana)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Use official Cassandra Image (configuration for Casskop is done through a bootstrap init-container)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Performing live Cassandra repairs through the use of ",Object(s.b)("a",Object(c.a)({parentName:"li"},{href:"http://cassandra-reaper.io/"}),"Cassandra reaper")),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Pause/Restart & rolling restart operations through CassKoP plugin."),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Live Backup of Cassandra datas (using Instaclustr sidecar)"),Object(s.b)("li",Object(c.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(c.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Live restore of datas (using Instaclustr sidecar)")))}b.isMDXComponent=!0}}]);