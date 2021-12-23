(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(139)),l=["components"],c={id:"2_release_guide",title:"Release guide",sidebar_label:"Release guide"},i={unversionedId:"8_contributing/2_release_guide",id:"8_contributing/2_release_guide",isDocsHomePage:!1,title:"Release guide",description:"There are several things to do when you want to make a release of the project:",source:"@site/docs/8_contributing/2_release_guide.md",slug:"/8_contributing/2_release_guide",permalink:"/casskop/docs/8_contributing/2_release_guide",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/8_contributing/2_release_guide.md",version:"current",sidebar_label:"Release guide",sidebar:"docs",previous:{title:"Developer guide",permalink:"/casskop/docs/8_contributing/1_developer_guide"},next:{title:"Reporting bugs",permalink:"/casskop/docs/8_contributing/3_reporting_bugs"}},s=[{value:"With Helm",id:"with-helm",children:[{value:"Release helm charts on GitHub",id:"release-helm-charts-on-github",children:[]}]},{value:"With OLM (Operator Lifecycle Manager)",id:"with-olm-operator-lifecycle-manager",children:[{value:"Create new OLM release",id:"create-new-olm-release",children:[]},{value:"Instruction to tests locally with OLM",id:"instruction-to-tests-locally-with-olm",children:[]}]}],p={rightToc:s};function u(e){var t=e.components,a=Object(n.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are several things to do when you want to make a release of the project:\nTodo: things should be automatize ;)"),Object(o.b)("p",null,"For ease, we have same version for casskop and multi-casskop"),Object(o.b)("ul",{className:"contains-task-list"},Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update Changelog.md with informations for the new release"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update version/version.go with the new release version"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update multi-casskop/version/version.go with the new release version"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update helm/cassandra-operator/Chart.yaml and values.yaml"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","update multi-casskop/helm/multi-casskop/Chart.yaml and values.yaml"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","generate casskop helm with ",Object(o.b)("inlineCode",{parentName:"li"},"make helm-package")),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","add to git docs/helm, commit & push"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","once the PR is merged to master, create the release with content of changelog for this version",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Orange-OpenSource/casskop/releases"},"https://github.com/Orange-OpenSource/casskop/releases"))))),Object(o.b)("h2",{id:"with-helm"},"With Helm"),Object(o.b)("p",null,"The CassKop operator is released in the helm/charts/incubator see : ",Object(o.b)("a",{parentName:"p",href:"https://github.com/helm/charts/pull/14414"},"https://github.com/helm/charts/pull/14414")),Object(o.b)("p",null,"We also have a helm repository hosted on GitHub pages."),Object(o.b)("h3",{id:"release-helm-charts-on-github"},"Release helm charts on GitHub"),Object(o.b)("p",null,"In order to release the Helm charts on GitHub, we need to generate the package locally"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"make helm-package\n")),Object(o.b)("p",null,"then add to git the package and make a PR on the repo."),Object(o.b)("h2",{id:"with-olm-operator-lifecycle-manager"},"With OLM (Operator Lifecycle Manager)"),Object(o.b)("p",null,"OLM is used to manage lifecycle of the Operator, and is also used to puclish on ",Object(o.b)("a",{parentName:"p",href:"https://operatorhub.io"},"https://operatorhub.io")),Object(o.b)("h3",{id:"create-new-olm-release"},"Create new OLM release"),Object(o.b)("p",null,"You can create new version of CassKop OLM bundle using:"),Object(o.b)("p",null,"Exemple for generating version 0.0.4"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"operator-sdk olm-catalog gen-csv --csv-version 0.4.0 --update-crds\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You may need to manually update some fileds (such as description..), you can refere to previous versions for that")),Object(o.b)("h3",{id:"instruction-to-tests-locally-with-olm"},"Instruction to tests locally with OLM"),Object(o.b)("p",null,"Before submitting the operator to operatorhub.io you need to install and test OLM on a local Kubernetes."),Object(o.b)("p",null,"These tests and all pre-requisite can also be executed automatically in a single step using a\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/operator-framework/community-operators/blob/master/docs/using-scripts.md"},"Makefile"),"."),Object(o.b)("p",null,"Go to github/operator-framework/community-operators to interract with the OLM makefile"),Object(o.b)("p",null,"Install OLM"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"make operator.olm.install\n")),Object(o.b)("p",null,"Launch lint"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"make operator.verify OP_PATH=community-operators/casskop VERBOSE=true\n")),Object(o.b)("p",null,"Launch tests"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"make operator.test OP_PATH=community-operators/casskop VERBOSE=true\n")))}u.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return a?n.a.createElement(d,c(c({ref:t},s),{},{components:a})):n.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);