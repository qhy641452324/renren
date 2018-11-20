<template>
  <div class="mod-demo-echarts">
    <el-alert
      title="提示："
      type="warning"
      :closable="false">
      <div slot-scope="description">
        <p class="el-alert__description">这是一个测试页面</p>
      </div>
    </el-alert>

    <el-row :gutter="8">
    	<el-col :span="24">
        <el-card>
          <el-button @click="click">按钮</el-button>
          <el-button @click="click">按钮</el-button>
          <el-button @click="click">按钮</el-button>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="24"> 
      <el-col :span="12">     	
        <el-card>
        	<p>子组件的测试写在src/fade-in里面</p>
        	<p>这是一个测试引用外部组件的模块：子往父</p>
          <fades number="8+8=1" :input-val="inputText"  @child-event='parentEvent'></fades>
        </el-card>
      </el-col>
      <el-col :span="12">     	
        <el-card>
        	<p>这是一个测试引用外部组件的模块：父往子</p>
        	<p>下班，下次继续：https://blog.csdn.net/qq_35430000/article/details/79291287</p>
        	<input type="text" v-model="inputText" placeholder="placeHoderInfo"/>
		      <div style="color: red;margin-top: 10px;">子传父传值测试：{{dataFromP}}</div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="24" style="margin-top: 15px;">
    	<el-col :span="24">
        <el-card>
		      <div id="ap">
				    <child-component></child-component>		
				</div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="24" style="margin-top: 15px;">
    	<el-col :span="24">
        <el-card>
        	<div id="J_chartPieBox" class="chart-box"></div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="24" style="margin-top: 15px;">
    	<el-col :span="24">
        <el-card>
        	<p>描述：stylus在vue中的使用：('style lang="stylus" rel="stylesheet/stylus">/style>')</p>
						<p>cnpm i stylus -D</p>
						<p>cnpm i stylus-loader -D</p>
					<p>参考链接：https://blog.csdn.net/thatway_wp/article/details/79065906?%3E</p>
          <starts></starts>
        </el-card>
      </el-col>
    </el-row>
    
    <div style="width: 100%;height: 100px;border: 1px solid seagreen;">
    	<!--<search></search>-->
    	<p>带回调的测试</p>
    	<starts :score="score" startClick @starChoose="starChoose"></starts>
    </div>
    
    <el-row :gutter="24" style="margin-top: 15px;">
    	<el-col :span="24">
        <el-card>
          <my-component></my-component>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="24" style="margin-top: 15px;">
    	<el-col :span="24">
        <el-card>
          <div id="component-test1">
		        <!-- 3.#component-test是Vue实例挂载的元素，应该在挂载元素范围内使用组件 -->
		        <matrix-component></matrix-component>
		      </div>
		      <div id="component-test2">
		        <my-component2></my-component2>
		      </div>
        </el-card>
      </el-col>
    </el-row>
    


  </div>
</template>

<script>
	import Vue from 'vue'
	import echarts from 'echarts'
//import fades from './fadetest'//测试引用组件
	import fades from '@/components/fade-in'//测试引用组件:components下面的
	import starts from '@/components/star'
//	import search from '@/components/search'

  export default {
//	props: {
//      message: String  //定义传值的类型<br>    }
//		}
		components: {fades,starts},
    data () {
      return {
        chartPie: null,
        score:3.5,//星星默认值
        dataFromP:'0',
        placeHoderInfo:0
      }
    },
    mounted () {
      this.initChartPie();
      this.creatComponents();
    },
    activated () {
//  	alert(this.$route.query.id)//路由传参测试$router.push({ path: '/infos', query: { id: 123 } })
      if (this.chartPie) {
        this.chartPie.resize()
      }
    },
    methods: {
    	parentEvent(data){
    		console.log(data)
    		this.dataFromP = data;
    	},
    	ievent(...data){
        console.log('allData:',data);// data为包含传过来所有数据的数组，第一个元素是对象，第二个元素是字符串
    	},	
    	click(){
    		alert("0")
    	},
    	creatComponents(){// creatComponent+‘s’
    		let time = 0,timer;
    		new Vue({
	        el: "#ap",
	        components:{
	            "child-component":{
	            	template:"<button class='btn-time' @click='add2'>我是局部组件:{{time}}</button>",
	            	data:function(){
						      return {
						      	time:60//只起默认值作用
						      }
						    },
						    methods:{
						      add2:function(){		
						      let data = {
					            a:'data'
					        };
					        this.$emit('ievent',data,'lalala');//打印监听
						      	var time = this.time;  //this 指向当前组件Vue实例 
//						      	if (time > 0) {
//								      return;
//								    }
								    time = 60;
								    clearInterval(timer);
								    timer = setInterval(() => {
								      if (time <= 0) {
								      	this.time = 0
								        clearInterval(timer);
								      } else {
								        this.time = time--;
								        console.log(this.time)
								      }
								    }, 100)
						      }
						    }
	            }
	        }
	    	})
    	},
    	starChoose (stars,val) {
        alert(stars + '颗星星:这里执行回调处理')
        alert(val)
      },
      // 饼状图
      initChartPie () {
        var option = {
          backgroundColor: '#2c343c',
          title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#ccc'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                { value: 135, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 474, name: '联盟广告' },
                { value: 235, name: '视频广告' },
                { value: 400, name: '搜索引擎' }
              ].sort(function (a, b) { return a.value - b.value }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200
              }
            }
          ]
        }
        this.chartPie = echarts.init(document.getElementById('J_chartPieBox'))
        this.chartPie.setOption(option)
        window.addEventListener('resize', () => {
          this.chartPie.resize()
        })
      }
    }
  }
</script>

<style lang="scss">
  .mod-demo-echarts {
    > .el-alert {
      margin-bottom: 10px;
    }
    > .el-row {
      margin-top: -10px;
      margin-bottom: -10px;
      .el-col {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .chart-box {
      min-height: 400px;
    }
    .btn-time{
    	width:120px;
    	height: 40px;
    	border-radius: 12px;
    }
    .mp10{margin-top: 10px;}
  }
</style>
