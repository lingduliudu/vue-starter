<template>
	<div class="templateClass">
		<el-input placeholder="数据库" v-model="schemaName" style="width: 200px;margin-right: 5px;">
			<template slot="prepend">数据库:</template>
		</el-input>
		<el-input placeholder="表名" v-model="tableName" style="width: 240px;margin-right: 10px;">
			<template slot="prepend">表:</template>
		</el-input>
		<el-button @click="executeData" type="primary">开始处理</el-button>
		<el-table ref="multipleTable" :data="tableData" :row-class-name="getRowClassName" @row-click="handleCurrentChange" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="50">
			</el-table-column>
			<el-table-column prop="tag" label="标识" width="120">
			</el-table-column>
			<el-table-column prop="name" label="文件名" width="120">
			</el-table-column>
			<el-table-column prop="desc" label="说明">
			</el-table-column>
			<el-table-column prop="outPath" label="输出位置">
				<template scope="scope">
					<el-input size="small" class="scope.row.light" v-model="scope.row.outPath" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.light}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="fileName" label="文件名规范">
			</el-table-column>
			<el-table-column prop="overWrite" label="是否覆盖">
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				editData: {},
				dialogVisible: false,
				schemaName: 'cgrzzl-factory',
				tableName: 'p_cost',
				overWriteArr: ['是', '否'],
				tableData: [{
					tag: 'Entity',
					name: 'Entity.java.vm',
					desc: '实体类',
					outPath: 'D:/test/',
					fileName: '.java',
					overWrite: "是",
					light: 0,
					overWriteFlag: 1
				}, {
					tag: 'IMapper',
					name: 'IMapper.java.vm',
					desc: 'Dao接口层',
					outPath: 'D:/test/',
					fileName: 'IMapper.java',
					overWrite: "是",
					light: 0,
					overWriteFlag: 1
				}, {
					tag: 'IService',
					name: 'IService.java.vm',
					desc: 'Service接口层',
					outPath: 'D:/test/',
					fileName: 'IService.java',
					overWrite: "是",
					light: 0,
					overWriteFlag: 1
				}, {
					tag: 'Service',
					name: 'Service.java.vm',
					desc: 'Service实现层',
					outPath: 'D:/test/',
					fileName: 'Service.java',
					overWrite: "是",
					light: 0,
					overWriteFlag: 1
				}, {
					tag: 'Controller',
					name: 'Controller.java.vm',
					desc: 'Controller实现层',
					outPath: 'D:/test/',
					fileName: 'Controller.java',
					overWrite: "是",
					light: 0,
					overWriteFlag: 1
				}],
				loading: false,
				multipleSelection: []
			}
		},

		methods: {
			getRowClassName({
				row
			}) {
				if (row.light) {
					return 'current-row';
				}
			},
			handleCurrentChange(row) {
				row.light = "current-row";

			},
			handleEdit() {

			},
			overFlag() {
				let flag = this.editData.overWriteFlag;
				if (flag == 1) {
					this.editData.overWriteFlag = 0;
				} else {
					this.editData.overWriteFlag = 1;
				}
			},
			selectClick(item) {
				item.light=true;
			},
			handleClick(row) {
				this.dialogVisible = !this.dialogVisible;
				this.editData = row;
			},
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
				const selectData = this.$refs.multipleTable.selection;
				if (selectData.length == 0) {
					this.$message({
						message: '至少一条',
						type: 'success',
						duration: 1000
					})
					return;
				}
				for (var i = 0; i < selectData.length; i++) {
					let item = selectData[i];
					item.schemaName = this.schemaName;
					item.tableName = this.tableName;
					this.loading = !this.loading;
					const result = await this.$http.post("generator", item);
					this.loading = !this.loading;
					this.$message({
						message: result.data.msg,
						type: 'success',
						duration: 1000
					})
				} //const selectData=this.$refs.multipleTable.selection
			}
		}
	}
</script>
<style scoped>
	.templateClass {
		text-align: left;
		align-items: flex-start;

	}

	.innerInput {
		width: 40px;
		height: 80px;
	}

	.tb-edit .el-input {
		display: none
	}

	.tb-edit .current-row .el-input {
		display: block
	}

	.tb-edit .current-row .el-input+span {
		display: none
	}
</style>
