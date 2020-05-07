<template>
	<div>
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
		};
	},
};
</script>
