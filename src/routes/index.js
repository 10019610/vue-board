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
				path: '',
				redirect: '/main'
			},
			{
				path: '/main', name: 'BoardMain', component: BoardMain
			}
			, {
				path: '/board', name: 'BoardList', component: BoardList


			},
			{
				path: '/write', name: 'BoardWrite', component: BoardWrite
			},
			{
				path:'/detail' , name:'BoardDetail', component: BoardDetail
			},
			// 리스트에서 상세로 이동할 때 path 설정법
			// 주소(url)에 '/:' 추가하고, 다음 전달할 값의 이름을 적어준다.
			// 주소: /detail 전달할 값: boardId
			// name, component 세팅후 boardId를 전달 받고자 하는 component에서 props로 받기위해 props 옵션을 true로 해준다.
			// 전달할 값을 여기서 설정하고, 페이지 이동이 일어나는 컴포넌트(ex, List)에서 router params에 컴포넌트 이름 및 보낼 값을 설정하여 보낸다
			// {
			// 	path: '/detail/:boardId', name: 'boardDetail', component: BoardDetail, props: true
			// }
		]
	})