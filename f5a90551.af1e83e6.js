(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{116:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return p}));var n=t(2),r=t(6),o=(t(0),t(121)),s={id:"2_pods_operations",title:"Pods Operations",sidebar_label:"Pods Operations"},c={unversionedId:"5_operations/2_pods_operations",id:"5_operations/2_pods_operations",isDocsHomePage:!1,title:"Pods Operations",description:"Here is the list of Operations managed by CassKop at the Pod operations level, which apply at pod level and can be triggered by specifics pods labels. Status of pod operations are also followed up at rack level.",source:"@site/docs/5_operations/2_pods_operations.md",slug:"/5_operations/2_pods_operations",permalink:"/casskop/docs/5_operations/2_pods_operations",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/5_operations/2_pods_operations.md",version:"current",sidebar_label:"Pods Operations",sidebar:"docs",previous:{title:"Cluster Operations",permalink:"/casskop/docs/5_operations/1_cluster_operations"},next:{title:"Multi-CassKop",permalink:"/casskop/docs/5_operations/3_multi_casskop"}},i=[{value:"OperationCleanup",id:"operationcleanup",children:[]},{value:"OperationRebuild",id:"operationrebuild",children:[]},{value:"OperationDecommission",id:"operationdecommission",children:[]},{value:"RollingRestart",id:"rollingrestart",children:[]}],l={rightToc:i};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here is the list of Operations managed by CassKop at the ",Object(o.b)("strong",{parentName:"p"},"Pod operations")," level, which apply at pod level and can be triggered by specifics pods labels. Status of pod operations are also followed up at rack level."),Object(o.b)("p",null,"Some Pods Operations can be triggered automatically by CassKop if :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CassandraCluster.spec.autoPilot")," is true, that will trigger ",Object(o.b)("inlineCode",{parentName:"li"},"cleanup"),", ",Object(o.b)("inlineCode",{parentName:"li"},"rebuild")," and ",Object(o.b)("inlineCode",{parentName:"li"},"upgadesstable")," operation in\nresponse to cluster events automatically."),Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("inlineCode",{parentName:"li"},"decommission operation")," is special and will be triggered automatically each time we need to ScaleDown a Pod."),Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("inlineCode",{parentName:"li"},"removenode operation")," is also special and may be set manually when needed.")),Object(o.b)("p",null,'It is also possible to trigger operations "manually", setting some labels on the Pods.'),Object(o.b)("h2",{id:"operationcleanup"},"OperationCleanup"),Object(o.b)("p",null,"A Cleanup may be automatically triggered by CassKop when it ends Scaling the cluster.\nCassKop will set some specific labels on the targeted pods.\nWe can also set these labels manually, or using the privided plugin (",Object(o.b)("inlineCode",{parentName:"p"},"kubectl casskop cleanup start"),")\nIf we want to see labels for each of the pods of the cluster :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ kubectl label pod $(kubectl get pods -l app=cassandracluster -o jsonpath='{range .items[*]}{.metadata.name}{\" \"}') --list\nListing labels for Pod./cassandra-demo-dc1-rack1-0:\n cluster=k8s.pic\n controller-revision-hash=cassandra-demo-dc1-rack1-56c9bbb958\n dc-rack=dc1-rack1\n statefulset.kubernetes.io/pod-name=cassandra-demo-dc1-rack1-0\n app=cassandracluster\n cassandracluster=cassandra-demo\n cassandraclusters.db.orange.com.dc=dc1\n cassandraclusters.db.orange.com.rack=rack1\n...\n")),Object(o.b)("p",null,"Now, to trigger a ",Object(o.b)("inlineCode",{parentName:"p"},"cleanup")," on pod ",Object(o.b)("inlineCode",{parentName:"p"},"cassandra-demo-dc1-rack2-0")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl label pod cassandra-demo-dc1-rack2-0 operation-name=cleanup --overwrite\nkubectl label pod cassandra-demo-dc1-rack2-0 operation-status=ToDo --overwrite\n")),Object(o.b)("p",null,"Automatically, CassKop will detect the change, start the action, and update the status :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"    dc1-rack2:\n      cassandraLastAction:\n        Name: UpdateSeedList\n        endTime: 2018-09-27T15:26:51Z\n        startTime: 2018-09-27T15:23:54Z\n        status: Done\n      phase: Running\n      podLastOperation:\n        Name: cleanup\n        endTime: 2018-09-27T16:00:52Z\n        operatorName: operator-cassandr-f6d2968d4504448180ace041d3818d10-799dbb4zqss8\n        podsOK:\n        - cassandra-demo-dc1-rack2-0\n        - cassandra-demo-dc1-rack2-0\n        startTime: 2018-09-27T16:00:32Z\n        status: Done\n")),Object(o.b)("p",null,"The section ",Object(o.b)("inlineCode",{parentName:"p"},"podLastOperation")," appears and we can see that it has correctly executed the cleanup operation on the 2\nnodes"),Object(o.b)("h2",{id:"operationrebuild"},"OperationRebuild"),Object(o.b)("p",null,"This operation operates on multiple nodes in the cluster. Use this operation when CassKop add a new datacenter to an\nexisting cluster."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl casskop rebuild {--pod <pod_name> | --prefix <prefix_pod_name>} <from-dc_name>\n")),Object(o.b)("p",null,"In the background this command is equivalent to set labels on each pods like :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl label pod cassandra-demo-dc2-rack1-0 operation-name=rebuild --overwrite\nkubectl label pod cassandra-demo-dc2-rack1-0 operation-status=ToDo --overwrite\nkubectl label pod cassandra-demo-dc2-rack1-0 operation-argument=dc1 --overwrite\n")),Object(o.b)("h2",{id:"operationdecommission"},"OperationDecommission"),Object(o.b)("p",null,"see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/casskop/docs/5_operations/1_cluster_operations#updatescaledown"}),"UpdateScaleDown")),Object(o.b)("h2",{id:"rollingrestart"},"RollingRestart"),Object(o.b)("p",null,"This operation can be triggered with the plugin using simple commands as :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ kubectl casskop restart --crd cassandra-e2e --rack dc1.rack1 dc2.rack1\n\nNamespace cassandra-e2e\nTrigger restart of dc1.rack1\nTrigger restart of dc2.rack1\n\n$ kubectl casskop restart --crd cassandra-e2e --dc dc1\n\nNamespace cassandra-e2e\nTrigger restart of dc1.rack1\nTrigger restart of dc1.rack2\n\n$ kubectl casskop restart --crd cassandra-e2e --full\n\nNamespace cassandra-e2e\nTrigger restart of dc1.rack1\nTrigger restart of dc1.rack2\nTrigger restart of dc2.rack1\n")),Object(o.b)("p",null,"After one of this command, CassKop will do a rolling restart of each rack one at a time avoiding any disruption."))}p.isMDXComponent=!0},121:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||o;return t?r.a.createElement(m,c(c({ref:a},l),{},{components:t})):r.a.createElement(m,c({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);