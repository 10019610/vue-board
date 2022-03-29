import Vue from 'vue';
import Router from 'vue-router';
import BoardMain from '@/components/BoardMain'; //메인 컴포넌트 
import BoardList from '@/components/BoardList'; //리스트 컴포넌트 
import BoardWrite from '@/components/BoardWrite';
import BoardDetail from '@/components/BoardDetail';
Vue.use(Router); //vue 라우터 사용

export default 
new Router({      //라우터 연결
	mode: 'history',
	routes: [
		{
			path:'',
			redirect:'/main'
		},
		{
			path:'/main' ,name:'BoardMain', component: BoardMain
		}
		,{
			path:'/board' ,name:'BoardList' ,component: BoardList
			
			
		},
		{
			path:'/write' , name:'BoardWrite' , component: BoardWrite
		},
		{
			path:'/detail' , name:'BoardDetail', component: BoardDetail
		}
	]
})