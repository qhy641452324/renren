<template>
	<div id="app-3" class="c1">
		<p v-if="seen">组件引用测试:</p>
		<p class="t1">{{dataFP}}</p>
		<vbind infos='向子传固定参数123' @child-e='pEvent'></vbind>
		
		
		<!--子传父测试-->
		<p v-if="seen" style="margin-top: 100px;">组件引用测试2</p>
		<button class="bt11">向子组件传值</button>
		<vbind2></vbind2>
	</div>
</template>
<script>
	import vbind from './child'
	import vbind2 from './child2'
	export default {
		name:'app-3',
		components: {
			vbind,
			vbind2
		},
		data () {
			return {
				seen:true,
				dataFP:'',
			}
		},
		methods:{
			changeInfo(){
				
			},
			pEvent(data){
    		console.log(data)
    		this.dataFP = data;
    	},
		},	
		beforeCreated () {
//			alert('beforeCreated called')
		},
		created () {
//			alert('created called')
		}		
		
	}
</script>

<style type="text/css">
	.bt11{height: 35px;}
	.c1 .t1{color: royalblue;font-weight: bold;}
</style>
