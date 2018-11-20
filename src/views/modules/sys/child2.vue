<template>
	<div id="app-20" class="child2 cont2">
		<span>chid2：测试子组件向父组件传值</span>
		<div v-bind:title="me" class="block2">
			{{me}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app-20',
		data () {
			return {
				me: '页面加载于 ' + new Date().toLocaleString(),
				message1: '这是引用组件里的内容2'
			}
		},
		methods:{

		},
	}
</script>

<style type="text/css">
	.cont2{border: 1px solid darkgreen;}
	.block2{width: 500px;height: 100px;background:orange;margin-top: 10px;}
	.child2{margin-top: 10px;}
</style>

