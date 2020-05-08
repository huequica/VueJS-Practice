<template>
	<div v-bind:title="title">
		Hello Vue!<br />
		{{ message }}
	</div>
</template>

<script>
export default {
	name: 'Root',

	// VueにおいてArrow Functionは非推奨ぽい？
	data() {
		return {
			message: 'Hello World',
			title: 'sample title',
		};
	},
};
</script>
