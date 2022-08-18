"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7435],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(a),d=s,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3042:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),o=["components"],l={title:"Multi-Casskop on Google Kubernetes Engine",author:"Alexandre Guitton",author_title:"Alexandre Guitton",author_url:"https://github.com/erdrix",author_image_url:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4",tags:["gke","casskop","cassandra","external-dns","multi-casskop"]},c=void 0,i={permalink:"/casskop/blog/2020/01/15/multicasskop_gke",editUrl:"https://github.com/cscetbon/casskop/edit/master/website/blog/blog/2020-01-15-multicasskop_gke.md",source:"@site/blog/2020-01-15-multicasskop_gke.md",title:"Multi-Casskop on Google Kubernetes Engine",description:"Pre-requisites",date:"2020-01-15T00:00:00.000Z",formattedDate:"January 15, 2020",tags:[{label:"gke",permalink:"/casskop/blog/tags/gke"},{label:"casskop",permalink:"/casskop/blog/tags/casskop"},{label:"cassandra",permalink:"/casskop/blog/tags/cassandra"},{label:"external-dns",permalink:"/casskop/blog/tags/external-dns"},{label:"multi-casskop",permalink:"/casskop/blog/tags/multi-casskop"}],readingTime:5.64,truncated:!1,authors:[{name:"Alexandre Guitton",title:"Alexandre Guitton",url:"https://github.com/erdrix",imageURL:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4"}],frontMatter:{title:"Multi-Casskop on Google Kubernetes Engine",author:"Alexandre Guitton",author_title:"Alexandre Guitton",author_url:"https://github.com/erdrix",author_image_url:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4",tags:["gke","casskop","cassandra","external-dns","multi-casskop"]},prevItem:{title:"Casskop 0.5.1 - Dynamic sidecars and storage configuration feature",permalink:"/casskop/blog/dynamics_sidecars_storage"}},u={authorsImageUrls:[void 0]},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setup GCP environment",id:"setup-gcp-environment",level:2},{value:"Environment setup",id:"environment-setup",level:3},{value:"Setup base infrastructure",id:"setup-base-infrastructure",level:3},{value:"Master provisionning",id:"master-provisionning",level:4},{value:"Slave provisionning",id:"slave-provisionning",level:4},{value:"Check installation",id:"check-installation",level:3},{value:"Check master configuration",id:"check-master-configuration",level:4},{value:"Check slave configuration",id:"check-slave-configuration",level:4},{value:"Check DNS zone configuration",id:"check-dns-zone-configuration",level:4},{value:"Check Firewall configuration",id:"check-firewall-configuration",level:4},{value:"Check Storage Class",id:"check-storage-class",level:4},{value:"Multi casskop deployment",id:"multi-casskop-deployment",level:2},{value:"Bootstrap API access to Slave from Master",id:"bootstrap-api-access-to-slave-from-master",level:3},{value:"Install Multi-CassKop",id:"install-multi-casskop",level:3},{value:"Create the MultiCasskop CRD",id:"create-the-multicasskop-crd",level:3},{value:"Check multi cluster installation",id:"check-multi-cluster-installation",level:3},{value:"Clean up everything",id:"clean-up-everything",level:2},{value:"Cleaning slave cluster",id:"cleaning-slave-cluster",level:3},{value:"Cleaning master cluster",id:"cleaning-master-cluster",level:3}],m={toc:p};function d(e){var t=e.components,l=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"User should need :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/terraform/getting-started/install.html"},"terraform")," version v0.12.7+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/fr/docs/tasks/tools/install-kubectl"},"kubectl")," version v1.13.3+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},"kubectx")," & kubens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/using_helm/"},"Helm")," version v2.15.1+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/install?hl=fr"},"gcloud sdk")," version 272.0.0+"),(0,r.kt)("li",{parentName:"ul"},"A service account with enough rights (for this example : ",(0,r.kt)("inlineCode",{parentName:"li"},"editor"),")"),(0,r.kt)("li",{parentName:"ul"},"Having a DNS zone in google cloud dns.")),(0,r.kt)("h2",{id:"setup-gcp-environment"},"Setup GCP environment"),(0,r.kt)("p",null,"To setup the GCP environment we will use terraform provisionning, to instantiate the following infrastructure :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2 GKE clusters :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First on europe-west1-b which will be the ",(0,r.kt)("inlineCode",{parentName:"li"},"master")),(0,r.kt)("li",{parentName:"ul"},"Second on europe-west1-c which will be the ",(0,r.kt)("inlineCode",{parentName:"li"},"slave")))),(0,r.kt)("li",{parentName:"ul"},"Firewall rules to allow clusters to communicate"),(0,r.kt)("li",{parentName:"ul"},"External DNS on each cluster to expose cassandra nodes"),(0,r.kt)("li",{parentName:"ul"},"Casskop operator on each cluster to focus on multi-casskop usage")),(0,r.kt)("h3",{id:"environment-setup"},"Environment setup"),(0,r.kt)("p",null,"Start to set variables needed for the instantiation : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ export CASSKOP_WORKSPACE=<path to cassandra-k8s-operateur project>\n$ export PROJECT=<gcp project>\n$ export SERVICE_ACCOUNT_KEY_PATH=<path to service account key>\n$ export NAMESPACE=cassandra-demo\n$ export DNS_ZONE_NAME=external-dns-test-gcp-trycatchlearn-fr     # -> change with your own one\n$ export DNS_NAME=external-dns-test.gcp.trycatchlearn.fr          # -> change with your own one\n$ export MANAGED_ZONE=tracking-pdb                                # -> change with your own one\n")),(0,r.kt)("h3",{id:"setup-base-infrastructure"},"Setup base infrastructure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ${CASSKOP_WORKSPACE}/multi-casskop/config/samples/gke/terraform\n$ terraform init\n")),(0,r.kt)("h4",{id:"master-provisionning"},"Master provisionning"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"MultiCasskop architecture",src:a(1373).Z,width:"1091",height:"788"})),(0,r.kt)("p",null,"With the master provisionning, we will deploy firewall and Cloud dns configuration :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ terraform workspace new master\n$ terraform workspace select master\n$ terraform apply \\\n    -var-file="env/master.tfvars" \\\n    -var="service_account_json_file=${SERVICE_ACCOUNT_KEY_PATH}" \\\n    -var="namespace=${NAMESPACE}" \\\n    -var="project=${PROJECT}" \\\n    -var="dns_zone_name=${DNS_ZONE_NAME}" \\\n    -var="dns_name=${DNS_NAME}" \\\n    -var="managed_zone=${MANAGED_ZONE}"\n')),(0,r.kt)("h4",{id:"slave-provisionning"},"Slave provisionning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ terraform workspace new slave\n$ terraform workspace select slave\n$ terraform apply \\\n    -var-file="env/slave.tfvars" \\\n    -var="service_account_json_file=${SERVICE_ACCOUNT_KEY_PATH}" \\\n    -var="namespace=${NAMESPACE}" \\\n    -var="project=${PROJECT}" \\\n    -var="dns_zone_name=${DNS_ZONE_NAME}" \\\n    -var="dns_name=${DNS_NAME}" \\\n    -var="managed_zone=${MANAGED_ZONE}"\n')),(0,r.kt)("h3",{id:"check-installation"},"Check installation"),(0,r.kt)("h4",{id:"check-master-configuration"},"Check master configuration"),(0,r.kt)("p",null,"Now we will check that everything is well deployed in the GKE master cluster : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ gcloud container clusters get-credentials cassandra-europe-west1-b-master --zone europe-west1-b --project ${PROJECT}\n$ kubectl get pods -n ${NAMESPACE}\nNAME                                          READY   STATUS    RESTARTS   AGE\ncasskop-casskop-54c4cfcbcb-b4qxq   1/1     Running   0          4h9m\nexternal-dns-6dd96c985-h76gh                  1/1     Running   0          4h16m\n")),(0,r.kt)("h4",{id:"check-slave-configuration"},"Check slave configuration"),(0,r.kt)("p",null,"Now we will check that everything is well deployed in the GKE slave cluster : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ gcloud container clusters get-credentials cassandra-europe-west1-c-slave --zone europe-west1-c --project ${PROJECT}\n$ kubectl get pods -n ${NAMESPACE}\nNAME                                          READY   STATUS    RESTARTS   AGE\ncasskop-casskop-54c4cfcbcb-sxjz7   1/1     Running   0          4m56s\nexternal-dns-7f947c5b5b-mq7kg                 1/1     Running   0          5m46s\n")),(0,r.kt)("h4",{id:"check-dns-zone-configuration"},"Check DNS zone configuration"),(0,r.kt)("p",null,"Make a note of the nameservers that were assigned to your new zone : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ gcloud dns record-sets list \\\n    --zone "${DNS_ZONE_NAME}" \\\n    --name "${DNS_NAME}." \\\n    --type NS\nNAME                                     TYPE  TTL    DATA\nexternal-dns-test.gcp.trycatchlearn.fr.  NS    21600  ns-cloud-e1.googledomains.com.,ns-cloud-e2.googledomains.com.,ns-cloud-e3.googledomains.com.,ns-cloud-e4.googledomains.com.\n')),(0,r.kt)("h4",{id:"check-firewall-configuration"},"Check Firewall configuration"),(0,r.kt)("p",null,"@TODO : rework firewall source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ gcloud compute firewall-rules describe gke-cassandra-cluster\nallowed:\n- IPProtocol: udp\n- IPProtocol: tcp\ncreationTimestamp: '2019-12-05T13:31:01.233-08:00'\ndescription: ''\ndirection: INGRESS\ndisabled: false\nid: '8270840333953452538'\nkind: compute#firewall\nlogConfig:\n  enable: false\nname: gke-cassandra-cluster\nnetwork: https://www.googleapis.com/compute/v1/projects/poc-rtc/global/networks/default\npriority: 1000\nselfLink: https://www.googleapis.com/compute/v1/projects/poc-rtc/global/firewalls/gke-cassandra-cluster\nsourceRanges:\n- 0.0.0.0/0\ntargetTags:\n- cassandra-cluster\n")),(0,r.kt)("h4",{id:"check-storage-class"},"Check Storage Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get storageclasses.storage.k8s.io \nNAME                 PROVISIONER            AGE\nstandard (default)   kubernetes.io/gce-pd   28m\nstandard-wait        kubernetes.io/gce-pd   24m\n")),(0,r.kt)("h2",{id:"multi-casskop-deployment"},"Multi casskop deployment"),(0,r.kt)("h3",{id:"bootstrap-api-access-to-slave-from-master"},"Bootstrap API access to Slave from Master"),(0,r.kt)("p",null,"Multi-Casskop will be deployed in ",(0,r.kt)("inlineCode",{parentName:"p"},"master cluster"),", change your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," context to point this cluster."),(0,r.kt)("p",null,"In order to allow Multi-CassKop controller to have access to ",(0,r.kt)("inlineCode",{parentName:"p"},"slave")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),", we are going to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/admiraltyio/multicluster-service-account/releases/tag/v0.6.1"},"kubemcsa")," from ",(0,r.kt)("a",{parentName:"p",href:"https://admiralty.io/"},"admiralty")," to be able to export secret from ",(0,r.kt)("inlineCode",{parentName:"p"},"slave")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"kubemcsa")," : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ export RELEASE_VERSION=v0.6.1\n$ wget https://github.com/admiraltyio/multicluster-service-account/releases/download/${RELEASE_VERSION}/kubemcsa-linux-amd64\n$ mkdir -p ~/tools/kubemcsa/${RELEASE_VERSION} && mv kubemcsa-linux-amd64 tools/kubemcsa/${RELEASE_VERSION}/kubemcsa\n$ chmod +x ~/tools/kubemcsa/${RELEASE_VERSION}/kubemcsa\n$ sudo ln -sfn  ~/tools/kubemcsa/${RELEASE_VERSION}/kubemcsa /usr/local/bin/kubemcsa\n")),(0,r.kt)("p",null,"Generate secret for ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ kubectx # Switch context on master cluster\nSwitched to context "gke_<Project name>_europe-west1-b_cassandra-europe-west1-b-master".\n$ kubens # Switch context on correct namespace\nContext "gke_<Project name>_europe-west1-b_cassandra-europe-west1-b-master" modified.\nActive namespace is "<Namespace>".\n$ kubemcsa export --context=gke_poc-rtc_europe-west1-c_cassandra-europe-west1-c-slave --namespace ${NAMESPACE} casskop --as gke-slave-west1-c | kubectl apply -f -\nsecret/gke-slave-west1-c created\n')),(0,r.kt)("p",null,"Check that the secret is correctly created"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get secrets -n ${NAMESPACE}\n...\ngke-slave-west1-c                Opaque                                5      28s\n")),(0,r.kt)("h3",{id:"install-multi-casskop"},"Install Multi-CassKop"),(0,r.kt)("p",null,"@TODO : To correct once the watch object will be fixed"),(0,r.kt)("p",null,"Add MultiCasskop crd on the ",(0,r.kt)("inlineCode",{parentName:"p"},"slave")," cluster : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ kubectx # Switch context on slave cluster\nSwitched to context "gke_<Project name>_europe-west1-c_cassandra-europe-west1-c-slave".\n$ kubectl apply -f https://raw.githubusercontent.com/cscetbon/casskop/master/multi-casskop/config/crd/bases/multicluster_v2_cassandramulticluster_crd.yaml\n')),(0,r.kt)("p",null,"Deployment with Helm : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ kubectx # Switch context on master cluster\nSwitched to context "gke_<Project name>_europe-west1-b_cassandra-europe-west1-b-master".\n$ helm init --client-only\n$ cd ${CASSKOP_WORKSPACE}\n$ helm install --name multi-casskop oci://ghcr.io/cscetbon/multi-casskop-helm --set k8s.local=gke-master-west1-b --set k8s.remote={gke-slave-west1-c} #--no-hooks if crd already install\n')),(0,r.kt)("h3",{id:"create-the-multicasskop-crd"},"Create the MultiCasskop CRD"),(0,r.kt)("p",null,"Now we are ready to deploy a MultiCassKop CRD instance.\nWe will use the example in ",(0,r.kt)("inlineCode",{parentName:"p"},"multi-casskop/config/samples/gke/multi-casskop-gke.yaml")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f multi-casskop/config/samples/gke/multi-casskop-gke.yaml\n")),(0,r.kt)("h3",{id:"check-multi-cluster-installation"},"Check multi cluster installation"),(0,r.kt)("p",null,"We can see that each cluster has the required pods : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ kubectx # Switch context on master cluster\nSwitched to context "gke_<Project name>_europe-west1-b_cassandra-europe-west1-b-master".\n$ kubectl get pods -n ${NAMESPACE}\nNAME                                          READY   STATUS    RESTARTS   AGE\ncassandra-demo-dc1-rack1-0                    1/1     Running   0          8m30s\ncasskop-casskop-54c4cfcbcb-8qncr   1/1     Running   0          34m\nexternal-dns-6dd96c985-7jf6w                  1/1     Running   0          35m\nmulti-casskop-67dc74dff7-z4642                1/1     Running   0          11m\n$ kubectx # Switch context on slave cluster\nSwitched to context "gke_<Project name>_europe-west1-c_cassandra-europe-west1-c-slave".\n$ kubectl get pods -n ${NAMESPACE}\nNAME                                          READY   STATUS    RESTARTS   AGE\ncassandra-demo-dc3-rack3-0                    1/1     Running   0          6m55s\ncassandra-demo-dc4-rack4-0                    1/1     Running   0          4m59s\ncassandra-demo-dc4-rack4-1                    1/1     Running   0          3m20s\ncasskop-casskop-54c4cfcbcb-sxjz7   1/1     Running   0          71m\nexternal-dns-7f947c5b5b-mq7kg                 1/1     Running   0          72m\n')),(0,r.kt)("p",null,"If we go in one of the created pods, we can see that nodetool see pods of both clusters : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ kubectx # Switch context on master cluster\nSwitched to context "gke_<Project name>_europe-west1-b_cassandra-europe-west1-b-master".\n$ kubectl exec -ti cassandra-demo-dc1-rack1-0 nodetool status\nDatacenter: dc1\n===============\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address    Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  10.52.2.3  108.62 KiB  256          49.2%             a0958905-e1fa-4410-baca-fc86f4457f1a  rack1\nDatacenter: dc3\n===============\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address    Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  10.8.3.2   74.95 KiB  256          51.5%             03f8eede-4b69-43be-a0c1-73f73470398b  rack3\nDatacenter: dc4\n===============\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address    Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  10.8.4.3   107.87 KiB  256          47.8%             1a7432e2-4ca8-4767-acdb-3b40e6ff4a57  rack4\nUN  10.8.2.5   107.85 KiB  256          51.6%             272037ce-4146-42c1-9079-ef4561249254  rack4\n')),(0,r.kt)("h2",{id:"clean-up-everything"},"Clean up everything"),(0,r.kt)("p",null,"If you have set the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteCassandraCluster")," to true, then when deleting the ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiCassKop")," object, it will cascade the deletion of the CassandraCluster object in the targeted k8s clusters. Then each local CassKop will delete their Cassandra clusters (else skip this step)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl delete multicasskops.db.orange.com multi-casskop-demo\n$ helm del --purge multi-casskop\n")),(0,r.kt)("h3",{id:"cleaning-slave-cluster"},"Cleaning slave cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ cd ${CASSKOP_WORKSPACE}/multi-casskop/config/samples/gke/terraform\n$ terraform workspace select slave\n$ terraform destroy \\\n    -var-file="env/slave.tfvars" \\\n    -var="service_account_json_file=${SERVICE_ACCOUNT_KEY_PATH}" \\\n    -var="namespace=${NAMESPACE}" \\\n    -var="project=${PROJECT}" \\\n    -var="dns_zone_name=${DNS_ZONE_NAME}" \\\n    -var="dns_name=${DNS_NAME}" \\\n    -var="managed_zone=${MANAGED_ZONE}"\n')),(0,r.kt)("h3",{id:"cleaning-master-cluster"},"Cleaning master cluster"),(0,r.kt)("p",null,"Before running the following command, you need to clean dns records set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ terraform workspace select master\n$ terraform destroy \\\n    -var-file="env/master.tfvars" \\\n    -var="service_account_json_file=${SERVICE_ACCOUNT_KEY_PATH}" \\\n    -var="namespace=${NAMESPACE}" \\\n    -var="project=${PROJECT}" \\\n    -var="dns_zone_name=${DNS_ZONE_NAME}" \\\n    -var="dns_name=${DNS_NAME}" \\\n    -var="managed_zone=${MANAGED_ZONE}"\n')))}d.isMDXComponent=!0},1373:function(e,t,a){t.Z=a.p+"assets/images/multicasskop_architecture-4ab1ea0d34c7b749dfd848259c6bab1c.jpeg"}}]);