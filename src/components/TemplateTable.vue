<template>
	<div class="templateClass">
		<el-input placeholder="数据库" v-model="schemaName" style="width: 200px;margin-right: 5px;">
			<template slot="prepend">数据库:</template>
		</el-input>
		<el-input placeholder="表名"  v-model="tableName" style="width: 240px;margin-right: 10px;">
			<template slot="prepend">表:</template>
		</el-input>
		<el-button @click="executeData" type="primary">开始处理</el-button>
		<el-table v-loading="loading" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="tag" label="标识" width="120">
			</el-table-column>
			<el-table-column prop="name" label="文件名" width="120">
			</el-table-column>
			<el-table-column prop="desc" label="说明" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="outPath" label="输出位置" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="fileName" label="文件名规范" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="overWrite" label="是否覆盖" show-overflow-tooltip>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				schemaName: 'cgrzzl-factory',
				tableName: 'p_cost',
				tableData: [{
					tag: 'Entity',
					name: 'Entity.java.vm',
					desc: '实体类',
					outPath:'D:/test/',
					fileName:'.java',
					overWrite:"是",
					overWriteFlag:1
				}, {
					tag: 'IMapper',
					name: 'IMapper.java.vm',
					desc: 'Dao接口层',
					outPath:'D:/test/',
					fileName:'IMapper.java',
					overWrite:"是",
					overWriteFlag:1
				}, {
					tag: 'IService',
					name: 'IService.java.vm',
					desc: 'Service接口层',
					outPath:'D:/test/',
					fileName:'IService.java',
					overWrite:"是",
					overWriteFlag:1
				}, {
					tag: 'Service',
					name: 'Service.java.vm',
					desc: 'Service实现层',
					outPath:'D:/test/',
					fileName:'Service.java',
					overWrite:"是",
					overWriteFlag:1
				}, {
					tag: 'Controller',
					name: 'Controller.java.vm',
					desc: 'Controller实现层',
					outPath:'D:/test/',
					fileName:'Controller.java',
					overWrite:"是",
					overWriteFlag:1
				}],
				loading: false,
				multipleSelection: []
			}
		},

		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			async executeData() {
				const selectData = this.$refs.multipleTable.selection
				if(selectData.length==0) {
					this.$message({message: '至少一条',type: 'success',duration:1000})
					return;
				}
				for(var i=0;i<selectData.length;i++){
					let item = selectData[i]
					item.schemaName = this.schemaName
					item.tableName  = this.tableName
					this.loading=!this.loading;
					const result = await this.$http.post("generator",item)
					this.loading=!this.loading;
					this.$message({message: result.data.msg,type: 'success',duration:1000})
				}
				
				//const selectData = this.$refs.multipleTable.selection
			}
		}
	}
</script>
<style lang="less" scoped>
	.templateClass {
		text-align: left;
		align-items: flex-start;

	}

	.innerInput {
		width: 40px;
		height: 80px;
	}
</style>
