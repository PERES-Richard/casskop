(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(139)),s=(a(149),a(150),["components"]),i={id:"5_upgrade_v1_to_v2",title:"Upgrade v1 to v2",sidebar_label:"Upgrade v1 to v2"},c={unversionedId:"2_setup/5_upgrade_v1_to_v2",id:"2_setup/5_upgrade_v1_to_v2",isDocsHomePage:!1,title:"Upgrade v1 to v2",description:"Version 2 makes it possible to use Cassandra 3 and 4 using the same bootstrap image. That's why it's recommended to",source:"@site/docs/2_setup/5_upgrade_v1_to_v2.md",slug:"/2_setup/5_upgrade_v1_to_v2",permalink:"/casskop/docs/2_setup/5_upgrade_v1_to_v2",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/2_setup/5_upgrade_v1_to_v2.md",version:"current",sidebar_label:"Upgrade v1 to v2",sidebar:"docs",previous:{title:"MiniKube",permalink:"/casskop/docs/2_setup/4_platform_setup/2_minikube"},next:{title:"Customizable install with Helm",permalink:"/casskop/docs/3_configuration_deployment/1_customizable_install_with_helm"}},l=[{value:"Collect your ConfigMap parameters",id:"collect-your-configmap-parameters",children:[]},{value:"Uninstall your operator",id:"uninstall-your-operator",children:[]},{value:"Update the CRDs",id:"update-the-crds",children:[]},{value:"Edit your CassandraCluster object",id:"edit-your-cassandracluster-object",children:[]},{value:"Edit your ConfigMap",id:"edit-your-configmap",children:[]},{value:"Install the latest version of the operator",id:"install-the-latest-version-of-the-operator",children:[]}],u={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,s);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Version 2 makes it possible to use Cassandra 3 and 4 using the same bootstrap image. That's why it's recommended to\nupgrade to version 2."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It's highly recommended that you test this procedure on a testing environment first."))),Object(o.b)("p",null,"In order to upgrade to version 2 without impacting your users you need to follow those steps."),Object(o.b)("h2",{id:"collect-your-configmap-parameters"},"Collect your ConfigMap parameters"),Object(o.b)("p",null,"If you use a ConfigMap, you can't use parameters other than pre_run.sh and post_run.sh\nCollect all the non default parameters that you use and also the number of tokens. you'll\nneed those when it's time to set the configuration in your CassandraCluster objects."),Object(o.b)("h2",{id:"uninstall-your-operator"},"Uninstall your operator"),Object(o.b)("p",null,"You need to uninstall it which won't have any effect on your running cluster other than\nnot allow you to trigger operations, scale it etc..."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm delete casskop\n")),Object(o.b)("h2",{id:"update-the-crds"},"Update the CRDs"),Object(o.b)("p",null,"helm does not version CRDs, so you'll need to manually update them (You can get the\nnew CRDs from our git repo)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f config/crd/bases\n")),Object(o.b)("h2",{id:"edit-your-cassandracluster-object"},"Edit your CassandraCluster object"),Object(o.b)("p",null,"Now it's time to edit your object and add the cassandra/java configuration from your configmap in there.\nYou also have to update the bootstrap image version to ",Object(o.b)("em",{parentName:"p"},"0.1.9"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"kubectl edit cassandraclusters.db.orange.com your-object\n")),Object(o.b)("p",null,"Here is an example of what you could have after you've edited it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: db.orange.com/v2\nkind: CassandraCluster\nmetadata:\n  name: your-object\nspec:\n  nodesPerRacks: 2\n  cassandraImage: cassandra:3.11.9\n  bootstrapImage: orangeopensource/cassandra-bootstrap:0.1.9\n  config:\n    cassandra-yaml:\n      num_tokens: 256\n    jvm-options:\n      initial_heap_size: 32M\n      max_heap_size: 256M\n  dataCapacity: "1Gi"\n  deletePVC: true\n  autoPilot: true\n  resources:\n    limits:\n      cpu: 100m\n      memory: 512Mi\n  topology:\n    dc:\n      - name: dc1\n        rack:\n          - name: rack1\n')),Object(o.b)("p",null,"If you use a version like ",Object(o.b)("inlineCode",{parentName:"p"},"cassandra:latest"),", you have to add at the\nsame level a parameter called ",Object(o.b)("em",{parentName:"p"},"serverVersion")," and set it to the version of\nthe configuration you wanna use cause it's used when generating it."),Object(o.b)("p",null,"Also you don't have to set the heap and in that case some automatic values\nwill be picked for you."),Object(o.b)("p",null,"If you have a doubt on what name to use for a parameter in your cassandra.yaml,\nyou can take a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/datastax/cass-config-definitions/tree/1b7eaf4e50447fc8168c4a6c16d0ed986941edf8/resources/cassandra-yaml/cassandra"},"https://github.com/datastax/cass-config-definitions/tree/1b7eaf4e50447fc8168c4a6c16d0ed986941edf8/resources/cassandra-yaml/cassandra")),Object(o.b)("h2",{id:"edit-your-configmap"},"Edit your ConfigMap"),Object(o.b)("p",null,"Remove all other keys than pre_run.sh and post_run.sh from your file.\nOf course if you're not using any of those 2 files you can even get rid of this\nConfigMap and remove it from your CassandraCluster object."),Object(o.b)("h2",{id:"install-the-latest-version-of-the-operator"},"Install the latest version of the operator"),Object(o.b)("p",null,"Now you can install version 2 of the operator by running the usual install\ncommand:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm install casskop orange-incubator/cassandra-operator\n")))}d.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},140:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},144:function(e,t,a){"use strict";var n=a(0),r=a(145);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},145:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(144),s=a(140),i=a(55),c=a.n(i),l=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,v=Object(n.useState)(i),y=v[0],g=v[1],O=n.Children.toArray(e.children);if(null!=p){var j=f[p];null!=j&&j!==y&&d.some((function(e){return e.value===j}))&&g(j)}var _=function(e){g(e),null!=p&&h(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},b)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return _(t)},onClick:function(){_(t)}},a)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);