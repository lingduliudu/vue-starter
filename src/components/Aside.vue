<template>
	<div class="templateClass">
		<div>
			<el-button @click="executeData" type="primary">查看包路径</el-button>
		</div>
		<el-dialog title="" :visible.sync="dialogVisible" width="70%" :close-on-click-modal="false" >
			<el-input placeholder="packageEntity" v-model="fileOutPath.packageEntity" style="width: 300px;margin-right: 5px;">
				<template slot="prepend">packageEntity:</template>
			</el-input>
			<el-input placeholder="packageController" v-model="fileOutPath.packageController" style="width: 300px;margin-right: 5px;">
				<template slot="prepend">packageController:</template>
			</el-input>
			<br />
			<el-input placeholder="packageIMapper" v-model="fileOutPath.packageIMapper" style="width: 300px;margin-right: 5px;">
				<template slot="prepend">packageIMapper:</template>
			</el-input>
			<el-input placeholder="packageMapper" v-model="fileOutPath.packageMapper" style="width: 300px;margin-right: 5px;">
				<template slot="prepend">packageMapper:</template>
			</el-input>
			<br />
			<el-input placeholder="packageIService" v-model="fileOutPath.packageIService" style="width: 300px;margin-right: 5px;">
				<template slot="prepend">packageIService:</template>
			</el-input>
			<el-input placeholder="packageService" v-model="fileOutPath.packageService" style="width: 300px;margin-right: 5px;">
				<template slot="prepend">packageService:</template>
			</el-input>
			<br/>
			<el-input placeholder="preUrl" v-model="fileOutPath.preUrl" style="width: 300px;margin-right: 5px;">
				<template slot="prepend">preUrl(路径前缀):</template>
			</el-input>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="savePackagePath">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fileOutPath: {
					packageEntity: 'D:/test/com/',
					packageIMapper: 'com.test',
					packageMapper: 'com.test',
					packageIService: 'com.test',
					packageService: 'com.test',
					packageController: 'com.test',
					preUrl:'factory'
				},
				dialogVisible: false,
				multipleSelection: []
			}
		},
		methods: {
			executeData() {
				this.dialogVisible = !this.dialogVisible
			},
			async savePackagePath() {
				const result = await this.$http.post("setpackagepath", this.fileOutPath)
				this.$message({
					message: result.data.msg,
					type: 'success',
					duration: 500
				})
				if (result.data.code == '0000') {
					this.dialogVisible = !this.dialogVisible
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.el-input{
		margin-right: 10px;
		margin-bottom: 10px;
	}
	.templateClass{
		text-align: left;
	}
</style>
