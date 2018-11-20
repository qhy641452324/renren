<template>
	<div class="cont1">
		<span v-bind:title="message">child1:测试父组件向子组件传值！</span>
		<button class="bt11" @click="changeInfo">向父组件传值emit</button>
		<div v-bind:title="message1" class="block">
			{{infos}}
		</div>
	</div>
</template>

<script>
	export default {
		props:{
    		'infos':[Number,String,Object], 
    	},
		data () {
			return {
				message: '页面加载于 ' + new Date().toLocaleString(),
				message1: '这是引用组件里的内容',
				count:0
			}
		},
		methods:{
    		changeInfo(){
				var a = this.countCompute();
    			this.$emit('child-e',a)
    		},
    		countCompute(){
    			this.count += 1;
    			var a = this.count;
    			return a;
    		}
    	},
	}
</script>

<style type="text/css">
	.cont1{border: 1px solid green;}
	.block{width: 500px;height: 100px;background: #6DBFFF;margin-top: 10px;}
</style>

