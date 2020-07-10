<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<el-container>
			<el-aside width="900px;height:100%"><Aside></Aside></el-aside>
			<el-main style="width: 100%;height: 100%;">
				<TemplateTable class='innerCenter'></TemplateTable>
			</el-main>
		</el-container>

	</div>
</template>

<script>
	/* import HelloWorld from './components/HelloWorld.vue' */
	import TemplateTable from './components/TemplateTable.vue'
	import Aside from './components/Aside.vue'
	export default {
		name: 'App',
		components: {
			//HelloWorld
			TemplateTable,
			Aside
		}
	}
</script>

<style>
	body {
		height: 100%;
		width: 100%;
	}
	html {
		height: 100%;
		width: 100%;
	}
	.el-container {
		height: 100%;
		width: 100%;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		width: 100%;
		height: 100%;
	}

	.innerCenter2 {
		margin-left: 30%;
		margin-top: 20px;
		width: 800px;
	}
</style>
