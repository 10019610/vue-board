import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 
import BoardList from '@/components/BoardList'; //리스트 컴포넌트 

Vue.use(Router); //vue 라우터 사용

export default 
new Router({      //라우터 연결
	mode: 'history'
	,routes: [
		{
			path:'/main' ,name:'HelloWorld', component: HelloWorld
		}
		,{
			path:'/board' ,name:'BoardList' ,component: BoardList
			
			
		},
	]
})