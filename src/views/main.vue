<template>
	<section class="container"></section>
</template>

<script>
import $ from 'jquery';
export default {
	data() {
		return {};
	},
	mounted() {
		$('.layout').show();
	},
};
</script>

<style lang="scss" scoped>
.tree-menu {
	display: flex;
	& > div {
		width: 50%;
	}
}
</style>
