(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{188:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(1),o=t(9),r=(t(0),t(193)),s={id:"7_cluster_topology",title:"Cluster topology - Cassandra rack aware deployments",sidebar_label:"Cluster topology"},i={id:"3_tasks/2_configuration_deployment/7_cluster_topology",title:"Cluster topology - Cassandra rack aware deployments",description:"CassKop rack awareness feature helps to spread the Cassandra nodes replicas among different racks in the",source:"@site/docs/3_tasks/2_configuration_deployment/7_cluster_topology.md",permalink:"/casskop/docs/3_tasks/2_configuration_deployment/7_cluster_topology",editUrl:"https://github.com/Orange-OpenSource//casskop/edit/master/website/docs/3_tasks/2_configuration_deployment/7_cluster_topology.md",sidebar_label:"Cluster topology",sidebar:"docs",previous:{title:"CPU and Memory Usage",permalink:"/casskop/docs/3_tasks/2_configuration_deployment/6_cpu_memory_usage"},next:{title:"Implementation architecture",permalink:"/casskop/docs/3_tasks/2_configuration_deployment/8_implementation_architecture"}},c=[{value:"Quick overview",id:"quick-overview",children:[]},{value:"Kubernetes nodes labels",id:"kubernetes-nodes-labels",children:[]},{value:"Configuring pod scheduling",id:"configuring-pod-scheduling",children:[{value:"Cassandra node placement in the Kubernetes cluster",id:"cassandra-node-placement-in-the-kubernetes-cluster",children:[]},{value:"Configuring hard antiAffinity in Cassandra cluster",id:"configuring-hard-antiaffinity-in-cassandra-cluster",children:[]}]},{value:"Cassandra notion of dc and racks",id:"cassandra-notion-of-dc-and-racks",children:[]},{value:"Configure the CassandraCluster CRD for dc &amp; rack",id:"configure-the-cassandracluster-crd-for-dc--rack",children:[]},{value:"How CassKop configures dc and rack in Cassandra",id:"how-casskop-configures-dc-and-rack-in-cassandra",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"CassKop rack awareness feature helps to spread the Cassandra nodes replicas among different racks in the\nkubernetes infrastructure. Enabling rack awareness helps to improve availability of Cassandra nodes and the data they\nare hosting, through correct use of Cassandra's replication factor. "),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Rack might represent an availability zone, data center or an actual physical rack in your data center."))),Object(r.b)("h2",{id:"quick-overview"},"Quick overview"),Object(r.b)("p",null,"CassKop awareness can be configured in the ",Object(r.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.topology")," section. "),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"topology")," section is missing then CassKop will create a default Cassandra DC ",Object(r.b)("inlineCode",{parentName:"p"},"dc1")," and a default Rack\n",Object(r.b)("inlineCode",{parentName:"p"},"rack1"),".\nIn this case, CassKop will not use specific kubernetes nodes labels for placement and in consequence the cluster is\nnot rack aware. "),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"topology")," section we can declare all the Cassandra Datacenters (DCs) and Racks, and for each of them we provide\nlabels which will need to match the labels assigned to the Kubernetes cluster nodes. "),Object(r.b)("p",null,"Each of our rack targets Kubernetes nodes having the combination of labels defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"dc")," section and in the ",Object(r.b)("inlineCode",{parentName:"p"},"rack"),"\nsection. The labels are used in Kubernetes when scheduling the Cassandra pods to kubernetes nodes.\nThis has the effect of spreading the Cassandra nodes across physical zones."),Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"CassKop doesn't rely on specific labels and will adapt to any topology you may define in your\ndatacenter or cloud provider. "))),Object(r.b)("h2",{id:"kubernetes-nodes-labels"},"Kubernetes nodes labels"),Object(r.b)("p",null,"Cassandra will run on Kubernetes Nodes, which may already have some labels representing their geographic topology."),Object(r.b)("p",null,"Example :"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../docs/assets/kubernetes-operators/topology-custom-example.png",alt:null}))),Object(r.b)("p",null,"Example of labels for node001 in our dc:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"location.myorg.com/bay=1\nlocation.myorg.com/building=building\nlocation.myorg.com/label=SC_K08_-_KUBERNETES\nlocation.myorg.com/room=Salle_1\nlocation.myorg.com/site=SiteName\nlocation.myorg.com/street=Rue_3\n")),Object(r.b)("p",null,"In the cloud the labels used for topology may better look like :"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../docs/assets/kubernetes-operators/topology-custom-example.png",alt:null}))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"beta.kubernetes.io/fluentd-ds-ready=true\nfailure-domain.beta.kubernetes.io/region=europe-west1\nkubernetes.io/hostname=gke-demo-default-pool-0c404f82-0100\nbeta.kubernetes.io/arch=amd64\nfailure-domain.beta.kubernetes.io/zone=europe-west1-d\nbeta.kubernetes.io/os=linux\ncloud.google.com/gke-os-distribution=cos\nbeta.kubernetes.io/instance-type=n1-standard-4\ncloud.google.com/gke-nodepool=default-pool\n")),Object(r.b)("p",null,"The idea is to use the Kubernetes nodes labels which refer to their physical position in the datacenters, to allow or\nnot Cassandra Pods placement."),Object(r.b)("p",null,"Because CassKop manages its Cassandra Node Pods through\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"}),"statefulset"),",\neach Pod will inherit the placement configuration of its parent\nstatefulset. In order to place Pods on different racks, we need to associate a new statefulset with specialized nodes\nplacement constraints for each Cassandra Rack we define."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Because the AZ feature was not yet available for statefulsets when we began to develop CassKop, we chose to\nimplement 1 statefulset for 1 Cassandra Rack. Hopefully, we will be able to benefit of improvements about the\ntopology-aware dynamic provisioning feature proposed in future version of K8S (more information here :\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/blog/2018/10/11/topology-aware-volume-provisioning-in-kubernetes/"}),"https://kubernetes.io/blog/2018/10/11/topology-aware-volume-provisioning-in-kubernetes/"),"\n)")),Object(r.b)("p",null,"See Example of configuration with topology : ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"samples/cassandracluster-demo-gke.yaml"}),"cassandracluster-demo-gke.yaml")),Object(r.b)("h2",{id:"configuring-pod-scheduling"},"Configuring pod scheduling"),Object(r.b)("p",null,"When two applications are scheduled to the same Kubernetes node, both applications might use the same resources like\ndisk I/O and impact performances. It may be recommended to schedule Cassandra Pods in a way that avoids sharing nodes\nwith other critical workloads. Using the right nodes or dedicated a set of nodes only for cassandra are the best ways to\navoid such problems."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"}),"Placement of Pods")," in a Statefulsets are done\nusing ",Object(r.b)("strong",{parentName:"p"},"NodeAffinity")," and ",Object(r.b)("strong",{parentName:"p"},"PodAntiAffinity")," : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"}),"nodeAffinity")," will be used to select specific\nnodes which have specific targeted labels."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity"}),"podAntiAffinity")," can\nbe used to ensure that critical applications are never scheduled on the same node.")),Object(r.b)("h3",{id:"cassandra-node-placement-in-the-kubernetes-cluster"},"Cassandra node placement in the Kubernetes cluster"),Object(r.b)("h4",{id:"node-affinity"},"Node affinity"),Object(r.b)("p",null,"To target a Specific Kubernetes group of Nodes CassKop needs to define a specific ",Object(r.b)("strong",{parentName:"p"},"nodeAffinity"),"\nsection in the targeted ",Object(r.b)("inlineCode",{parentName:"p"},"dc-rack")," statefulset to match specific kubernetes nodes labels."),Object(r.b)("p",null,"Example. If we want to deploy our statefulset only on nodes which have these labels :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"location.myorg.com/site=Valbonne\nlocation.myorg.com/building=HT2\nlocation.myorg.com/room=Salle_1\nlocation.myorg.com/street=Rue_11\n")),Object(r.b)("p",null,"CassKop need to add this section in the Statefulset definition :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n          - key: location.myorg.com/building\n            operator: In\n            values:\n            - HT2\n          - key: location.myorg.com/room\n            operator: In\n            values:\n            - Salle_1\n          - key: location.myorg.com/site\n            operator: In\n            values:\n            - Valbonne\n          - key: location.myorg.com/street\n            operator: In\n            values:\n            - Rue_9\n")),Object(r.b)("p",null,"All Pods that will be created from this statefulset will target only nodes which have these 4 labels.\nIf there is no kubernetes nodes available with these labels, then the statefulset will remain stuck in a pending state,\nuntil we correct either labels on nodes, or deployment constraints definition of the statefulset. "),Object(r.b)("p",null,"We can also use specific labels to dedicate some kubernetes nodes to some type of work, for instance dedicated some\nnodes for Cassandra. "),Object(r.b)("p",null,"You can define custom labels on kubernetes nodes :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl label node <your-node> <label-name>=<label-value>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is done automatically by combining the labels you specify in the Cassandra CRD definition in the ",Object(r.b)("inlineCode",{parentName:"p"},"Topology"),"\nsection. ")),Object(r.b)("h4",{id:"pod-anti-affinity"},"Pod anti affinity"),Object(r.b)("p",null,"If we lose a Kubernetes node, then we may want to limit the impact to loosing only one Cassandra node. Otherwise,\ndepending on the replication factor, we may have a data loss. "),Object(r.b)("p",null,"In our CassandraCluster, the statefulset will target a pool of Kubernetes nodes using it's NodeSelector we just saw\nabove.\nAll these Pods will inherit the specific labels from the Statefulset. "),Object(r.b)("p",null,'To implement the limitation "one Cassandra Pod per Kubernetes node", we use the pod definition section\n',Object(r.b)("inlineCode",{parentName:"p"},"podAntiAffinity"),". This tells kubernetes that it can't deploy to a Kubernetes node, if a pod having the same labels\nalready exist. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    podAntiAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n      - podAffinityTerm:\n          labelSelector:\n            matchLabels:\n              app: cassandracluster\n              cassandracluster: cassandra\n              cluster: k8s.kaas\n          topologyKey: kubernetes.io/hostname\n        weight: 100\n")),Object(r.b)("p",null,"This Tells that we ",Object(r.b)("strong",{parentName:"p"},"Require")," not deploy to a node if a pod already exists with these existing labels. "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is configured by default by CassKop")),Object(r.b)("h4",{id:"using-dedicated-nodes"},"Using dedicated nodes"),Object(r.b)("p",null,"Cluster administrators can mark selected kubernetes nodes as tainted. Nodes with taints are excluded from regular\nscheduling and normal pods will not be scheduled to run on them. Only services which can tolerate the taint set on the\nnode can be scheduled on it. The only other services running on such nodes will be kubernetes system services such  as\nlog collectors or software defined networks"),Object(r.b)("p",null,"Taints can be used to create dedicated nodes. Running Cassandra on dedicated nodes can have many advantages. There will\nbe no other applications running on the same nodes which could cause disturbance or consume the resources needed  for\nCassandra. That can lead to improved performance and stability."),Object(r.b)("p",null,"Example of tainting a node :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl taint node <your-node> dedicated=Cassandra:NoSchedule\n")),Object(r.b)("p",null,"Additionally, add a label to the selected nodes as well"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl label node <your-node> dedicated=Cassandra\n")),Object(r.b)("p",null,"Pod tolerations like pod annotations can be added to created pods by using the pod entry in the spec section of the cassandracluster object as below :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'kind: "CassandraCluster"\n...\nspec:\n  ...\n  pod:\n    tolerations:\n    - key: "dedicated"\n      operator: "Equal"\n      value: "Cassandra"\n      effect: "NoSchedule"\n...\n')),Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"toleration must be used with node affinity on the same labels"))),Object(r.b)("h3",{id:"configuring-hard-antiaffinity-in-cassandra-cluster"},"Configuring hard antiAffinity in Cassandra cluster"),Object(r.b)("p",null,"In development environment, we may have other concern than in production and we may allow our cluster to deploy several\nnodes on the same kubernetes nodes."),Object(r.b)("p",null,"The boolean ",Object(r.b)("inlineCode",{parentName:"p"},"hardAntiAffinity")," parameter in ",Object(r.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec")," will define if we want the constraint to be\n",Object(r.b)("strong",{parentName:"p"},"Required")," or ",Object(r.b)("strong",{parentName:"p"},"Preferred")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"hardAntiAffinity=false")," then the podAntiAffinity will be ",Object(r.b)("strong",{parentName:"p"},"preferred")," instead of ",Object(r.b)("strong",{parentName:"p"},"required")," and then kubernetes\nwill try to not put the cassandra node on the kubernetes node ",Object(r.b)("strong",{parentName:"p"},"BUT")," it will allow to do it if it has no other choices."),Object(r.b)("h2",{id:"cassandra-notion-of-dc-and-racks"},"Cassandra notion of dc and racks"),Object(r.b)("p",null,"As we previously see, the Cassandra rack awareness is defined using several Cassandra datacenters ",Object(r.b)("inlineCode",{parentName:"p"},"dc"),"s and ",Object(r.b)("inlineCode",{parentName:"p"},"rack"),"s.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.topology")," section allows us to define the virtual notion of DC & Rack.\nFor each we will define Kubernetes ",Object(r.b)("inlineCode",{parentName:"p"},"labels")," that will be used for pod placement."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The name and numbers of labels used to define a DC & rack is not defined in advance and will be defined in each\nCassandraCluster manifests, depending on labels presents on Kubernetes Nodes and the required topology")),Object(r.b)("h2",{id:"configure-the-cassandracluster-crd-for-dc--rack"},"Configure the CassandraCluster CRD for dc & rack"),Object(r.b)("p",null,"If the section topology is missing: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"then CassKop will deploy without label constraints to any available kubernetes nodes in the cluster"),Object(r.b)("li",{parentName:"ul"},"there will be only one DC defined named by default ",Object(r.b)("strong",{parentName:"li"},"dc1")),Object(r.b)("li",{parentName:"ul"},"there will be only one Rack defined named by default ",Object(r.b)("strong",{parentName:"li"},"rack1"))),Object(r.b)("p",null,"If the ",Object(r.b)("strong",{parentName:"p"},"topology")," section is defined, this will enable to create specific Cassandra dcs and racks: this creates a\nspecific statefulset for each rack and deploys on Kubernetes nodes matching the desired Node Labels (the concatenation\nof DC labels + Rack labels for each statefulset)"),Object(r.b)("p",null,"Example of topology section:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"...\n  nodesPerRacks: 3\n...\n  topology:\n    dc:\n      - name: dc1\n        labels:\n          location.k8s.myorg.com/site : Valbonne\n          location.k8s.myorg.com/building : HT2\n        rack:\n          - name: rack1\n            labels:\n              location.k8s.myorg.com/room : Salle_1\n              location.k8s.myorg.com/street : Rue_9\n          - name: rack2\n            labels:\n              location.k8s.myorg.com/room : Salle_1\n              location.k8s.myorg.com/street : Rue_10\n      - name: dc2\n        nodesPerRacks: 4\n        labels:\n          location.k8s.myorg.com/site : Valbonne\n          location.k8s.myorg.com/building : HT2\n        rack:\n          - name: rack1\n            labels:\n              location.k8s.myorg.com/room : Salle_1\n              location.k8s.myorg.com/street : Rue_11\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This will create 2 Cassandra DC (",Object(r.b)("inlineCode",{parentName:"li"},"dc1")," & ",Object(r.b)("inlineCode",{parentName:"li"},"dc2"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For DC ",Object(r.b)("inlineCode",{parentName:"li"},"dc1")," it will create 2 Racks : ",Object(r.b)("inlineCode",{parentName:"li"},"rack1")," and ",Object(r.b)("inlineCode",{parentName:"li"},"rack2"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"In each of these Racks there will be 3 Cassandra nodes"),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"dc1")," will have 6 nodes"))),Object(r.b)("li",{parentName:"ul"},"For DC ",Object(r.b)("inlineCode",{parentName:"li"},"dc2")," it will create 1 Rack : ",Object(r.b)("inlineCode",{parentName:"li"},"rack1"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"dc2")," overwrite the global parameter ",Object(r.b)("inlineCode",{parentName:"li"},"nodesPerRacks=3")," with a value of ",Object(r.b)("inlineCode",{parentName:"li"},"4"),". "),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"dc2")," will have 4 nodes")))))),Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We want to have the same numbers of Cassandra nodes in each Rack for a dedicated\nDatacenter. We can still have different values for different datacenters. "))),Object(r.b)("p",null,"The NodeSelectors labels for each Rack will be the aggregation of labels of the DC and the labels for the Racks :"),Object(r.b)("p",null,"For instance with this example, NodeSelectors labels for ",Object(r.b)("inlineCode",{parentName:"p"},"dc1")," / ",Object(r.b)("inlineCode",{parentName:"p"},"rack2")," will be :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"location.k8s.myorg.com/site : Valbonne\nlocation.k8s.myorg.com/building : HT2\nlocation.k8s.myorg.com/room : Salle_1\nlocation.k8s.myorg.com/street : Rue_10\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"dc")," / ",Object(r.b)("inlineCode",{parentName:"p"},"rack")," topology definition is generic and does not rely on particular labels. It uses the ones\ncorresponding to your needs.")),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The names for the dc and rack must be lowercase and respect Kubernetes DNS naming which follow ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://tools.ietf.org/html/rfc1123#section-2"}),"RFC 1123\ndefinition")," which can be expressed with this regular expression :\n",Object(r.b)("inlineCode",{parentName:"p"},"[a-z0-9]([-a-z0-9]*[a-z0-9])?")))),Object(r.b)("h2",{id:"how-casskop-configures-dc-and-rack-in-cassandra"},"How CassKop configures dc and rack in Cassandra"),Object(r.b)("p",null,"CassKop will add 2 specific labels on each created Pod to tell them in witch Cassandra DC and Rack they belong :"),Object(r.b)("p",null,"Example :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cassandraclusters.db.orange.com.dc=dc1\ncassandraclusters.db.orange.com.rack=rack1\n")),Object(r.b)("p",null,"Using the Kubernetes DownwardAPI, CassKop will inject into the Cassandra Image 2 environment variables, from these\n2 labels. Excerpt from the Statefulset template :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'...\nv1.EnvVar{\n    Name: "CASSANDRA_DC",\n    ValueFrom: &v1.EnvVarSource{\n        FieldRef: &v1.ObjectFieldSelector{\n            FieldPath: "metadata.labels[\'cassandraclusters.db.orange.com.dc\']",\n        },\n    },\n},\nv1.EnvVar{\n    Name: "CASSANDRA_RACK",\n    ValueFrom: &v1.EnvVarSource{\n        FieldRef: &v1.ObjectFieldSelector{\n            FieldPath: "metadata.labels[\'cassandraclusters.db.orange.com.rack\']",\n        },\n    },\n},\n...\n')),Object(r.b)("p",null,"In order to allow configuring Cassandra with the DC and Rack information, we use a specific ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/cassandra-image/"}),"Cassandra\nImage"),", which has a startup script that will retrieve\nthese environment variables, and configure the Cassandra ",Object(r.b)("inlineCode",{parentName:"p"},"cassandra-rackdc.properties")," file with the values for dc and\nrack."),Object(r.b)("p",null,"The Cassandra Image makes us of the ",Object(r.b)("inlineCode",{parentName:"p"},"GossipingPropertyFileSnitch")," Cassandra Snitch, so that both Kubernetes and\nCassandra are aware of the chosen topology. "))}d.isMDXComponent=!0},193:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},b=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,m=b["".concat(s,".").concat(u)]||b[u]||p[u]||r;return t?o.a.createElement(m,i({ref:n},l,{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);