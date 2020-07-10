<template>
	<div class="templateClass">
		<div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fileOutPath:{
					imapper:'',
					iservice:'2',
					service:'2',
					entity:'2',
					controller:'2'
					
				},
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
			executeData() {
				this.$Message({
					message: '恭喜你，这是一条成功消息',
					type: 'success',
					duration: 1000
				})
				//const selectData = this.$refs.multipleTable.selection
			}
		}
	}
</script>
<style scoped>
.templateClass{
	margin-top: 20px;
}
</style>
