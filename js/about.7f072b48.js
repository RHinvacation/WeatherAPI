"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[594],{9740:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var l=a(6768),s=a(4232);const o=e=>((0,l.Qi)("data-v-07beecd7"),e=e(),(0,l.jt)(),e),i={class:"about"},d=o((()=>(0,l.Lk)("h1",null,"This is an about page",-1))),n={class:"table"};function r(e,t,a,o,r,u){const c=(0,l.g2)("el-table-column"),b=(0,l.g2)("el-button"),k=(0,l.g2)("el-table");return(0,l.uX)(),(0,l.CE)("div",i,[d,(0,l.Lk)("div",n,[(0,l.bF)(k,{data:r.student,"default-sort":{prop:"userID",order:"ascending"},"max-height":"250",style:{width:"100%"}},{default:(0,l.k6)((()=>[(0,l.bF)(c,{type:"index",width:"50"}),(0,l.bF)(c,{prop:"userID",label:"UserID",sortable:"",width:"180"}),(0,l.bF)(c,{prop:"userName",label:"UserName",width:"180"}),(0,l.bF)(c,{prop:"count",label:"Count"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.$store.state.count),1)])),_:1}),(0,l.bF)(c,{fixed:"right",label:"Operations",width:"120"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{link:"",type:"primary",size:"small",onClick:u.detailClick},{default:(0,l.k6)((()=>[(0,l.eW)(" Detail ")])),_:1},8,["onClick"]),(0,l.bF)(b,{link:"",type:"primary",size:"small",onClick:u.editClick},{default:(0,l.k6)((()=>[(0,l.eW)("Edit")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["data"])])])}var u={name:"about",data(){return{student:[]}},mounted(){this.axios.get("data.json").then((e=>{console.log("res.data："),console.log(e.data),this.student=e.data.users,console.log("this.student："),console.log(this.student)})).catch((e=>{console.log(e)}))},methods:{detailClick(){alert("details")},editClick(){alert("edit")}}},c=a(1241);const b=(0,c.A)(u,[["render",r],["__scopeId","data-v-07beecd7"]]);var k=b}}]);
//# sourceMappingURL=about.7f072b48.js.map