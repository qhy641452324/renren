<template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>
    
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">父组件传来的值:{{number}}</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">父组件动态传过来的：{{inputVal}}</div>
      </transition>
    </div>
    <div class="" style="margin-top: 10px;">
    	<el-button @click="emitToParent">向父组件传值</el-button>
    </div>
    <div class="" style="margin-top: 10px;">
    	<el-button @click="changeInfo">父传子</el-button>
    </div>
  </div>
</template>

<script>
    export default {
    	props:{
    		'number':[Number,String,Object], 
    		'input-val':[String]
    	},
    	data(){
    		return{
    			show: true
    		}
    	},
    	methods:{
    		emitToParent(){
    			this.$emit('child-event','我是子组件往父组件传的值')
    		},
    		changeInfo(){

    		}
    	},
    	watch:{
    	
    	}
//  data: () => ({
//    show: true
//  })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>