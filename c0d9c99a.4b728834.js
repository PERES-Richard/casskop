(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),s=(a(0),a(139)),c=["components"],o={id:"3_5_backup_restore",title:"Backup and restore",sidebar_label:"Backup and restore"},i={unversionedId:"5_operations/3_5_backup_restore",id:"5_operations/3_5_backup_restore",isDocsHomePage:!1,title:"Backup and restore",description:"Tip: For a full working example step by step, please check also this well written article. This also explain more deeply how Casskop Backup & Restore works in background",source:"@site/docs/5_operations/3_5_backup_restore.md",slug:"/5_operations/3_5_backup_restore",permalink:"/casskop/docs/5_operations/3_5_backup_restore",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/5_operations/3_5_backup_restore.md",version:"current",sidebar_label:"Backup and restore",sidebar:"docs",previous:{title:"Multi-CassKop",permalink:"/casskop/docs/5_operations/3_multi_casskop"},next:{title:"Upgrade Operator",permalink:"/casskop/docs/5_operations/4_upgrade_operator"}},p=[{value:"Backup",id:"backup",children:[{value:"Supported storage",id:"supported-storage",children:[]},{value:"Life cycle of the CassandraBackup object",id:"life-cycle-of-the-cassandrabackup-object",children:[]}]},{value:"Restore",id:"restore",children:[{value:"Rename",id:"rename",children:[]},{value:"Entities",id:"entities",children:[]},{value:"Datacenter",id:"datacenter",children:[]}]}],l={rightToc:p};function u(e){var t=e.components,a=Object(n.a)(e,c);return Object(s.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Tip"),": For a full working example step by step, please check also this ",Object(s.b)("a",{parentName:"p",href:"https://cscetbon.medium.com/casskop-1-0-1-backup-and-restore-ba92f01c00df"},"well written article"),". This also explain more deeply how Casskop Backup & Restore works in background"),Object(s.b)("p",null,"In order to provide Backup/Restore abilities we use InstaCluster's ",Object(s.b)("a",{parentName:"p",href:"https://github.com/instaclustr/cassandra-sidecar"},"cassandra-sidecar project")," and add it to each Cassandra node to spawn. We want to thant Instaclustr for the modifications they made to make it work with CassKop!"),Object(s.b)("h2",{id:"backup"},"Backup"),Object(s.b)("p",null,"It is possible to backup keyspaces or tables from a cluster managed by Casskop. To start or schedule a backup, you\ncreate an object of type ",Object(s.b)("a",{parentName:"p",href:"/casskop/docs/6_references/5_cassandra_backup"},"CassandraBackup"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: db.orange.com/v2\nkind: CassandraBackup\nmetadata:\n  name: nightly-cassandra-backup\n  labels:\n    app: cassandra\nspec:\n  cassandraCluster: test-cluster\n  datacenter: dc1\n  storageLocation: s3://cassie\n  snapshotTag: SnapshotTag2\n  secret: cloud-backup-secrets\n  schedule: "@midnight"\n  entities: k1.t1,k2.t3\n')),Object(s.b)("p",null,"If there is no schedule defined, the backup will start as soon as it's created and won't be start again with that object.\nYou can always delete the object and recreate it though."),Object(s.b)("h3",{id:"supported-storage"},"Supported storage"),Object(s.b)("p",null,"The following storage options for storing the backups are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"s3 (as in the example above)"),Object(s.b)("li",{parentName:"ul"},"gcp"),Object(s.b)("li",{parentName:"ul"},"azure"),Object(s.b)("li",{parentName:"ul"},"oracle cloud")),Object(s.b)("p",null,"More details can be found on ",Object(s.b)("a",{parentName:"p",href:"https://github.com/instaclustr/cassandra-backup"},"Instaclustr's Cassandra backup page")),Object(s.b)("h3",{id:"life-cycle-of-the-cassandrabackup-object"},"Life cycle of the CassandraBackup object"),Object(s.b)("p",null,"When this object gets created, CassKop does a few checks to ensure:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The specified Cassandra cluster exists"),Object(s.b)("li",{parentName:"ul"},"If there is a secret that it has the expected parameters depending on the chosen backend"),Object(s.b)("li",{parentName:"ul"},"If there is a schedule that its format is correct (",Object(s.b)("a",{parentName:"li",href:"https://godoc.org/gopkg.in/robfig/cron.v3#hdr-CRON_Expression_Format"},"Cron expressions"),",\n",Object(s.b)("a",{parentName:"li",href:"https://godoc.org/gopkg.in/robfig/cron.v3#hdr-Predefined_schedules"},"Predefined schedules")," or ",Object(s.b)("a",{parentName:"li",href:"https://godoc.org/gopkg.in/robfig/cron.v3#hdr-Intervals"},"Intervals"),")")),Object(s.b)("p",null,"Then, if all those checks pass, it triggers the backup if there is no schedule, or creates a Cron task with the specified schedule."),Object(s.b)("p",null,"When this object gets deleted, if there is a scheduled task, it is unscheduled."),Object(s.b)("p",null,"When this object gets updated, and the change is located in the spec section, CassKop unschedules the existing task and schedules a new one with the new parameters provided."),Object(s.b)("h2",{id:"restore"},"Restore"),Object(s.b)("p",null,"Following the same logic, a ",Object(s.b)("a",{parentName:"p",href:"/casskop/docs/6_references/6_cassandra_restore"},"CassandraRestore")," object must be created to trigger a restore, and it must refer to an\nexisting ",Object(s.b)("a",{parentName:"p",href:"/casskop/docs/6_references/5_cassandra_backup"},"CassandraBackup")," object in K8S:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: db.orange.com/v2\nkind: CassandraRestore\nmetadata:\n  name: nightly-cassandra-backup\n  labels:\n    app: cassandra\nspec:\n  cassandraBackup: nightly-cassandra-backup\n  cassandraCluster: test-cluster\n  entities: k1.t1\n")),Object(s.b)("h3",{id:"rename"},"Rename"),Object(s.b)("p",null,"It's possible to restore the content of tables into other existing tables. Here is an example"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: db.orange.com/v2\nkind: CassandraRestore\nmetadata:\n  name: nightly-cassandra-backup\n  labels:\n    app: cassandra\nspec:\n  cassandraBackup: nightly-cassandra-backup\n  cassandraCluster: test-cluster\n  entities: k1.t1\n  rename:\n    k1.t1: k1.t2\n")),Object(s.b)("p",null,"With the object above, table k1.t1 will be restored under k1.t2 using the backup nightly-cassandra-backup"),Object(s.b)("h3",{id:"entities"},"Entities"),Object(s.b)("p",null,"In the restore phase, you can specify a subset of the entities specified in the backup. For instance, you can backup 2\ntables and only restore one."),Object(s.b)("h3",{id:"datacenter"},"Datacenter"),Object(s.b)("p",null,"It can be specified in a backup or a restore and declares where data must be backed up or restored. If not specified it\nwill run everywhere and entities must exist if they're specified. Specifying it in a restore will declare where data\nwill be restored but as icarus truncates entities it restores, it won't prevent the truncate from cleaning data in non\nchosen datacenters."))}u.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),b=r,h=u["".concat(c,".").concat(b)]||u[b]||d[b]||s;return a?n.a.createElement(h,o(o({ref:t},p),{},{components:a})):n.a.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<s;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);