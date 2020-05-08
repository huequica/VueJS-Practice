<template>

	<div v-bind:title="title">
		Hello Vue!<br/>
		{{ message }}

		<span v-if="isSpanAppear">
			<code>isSpanAppear</code>は<code>true</code>だよ
		</span>

		{{/* `v-for` でeachみたいな処理が可能、ただし `v-bind:key` を与える必要あり */}}
		<ol>
			<li v-for="Item in ListQue" v-bind:key="Item">
				{{Item.text}}
			</li>
		</ol>

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
			isSpanAppear: true,
			ListQue: [
				{ text: 'Learn JS(ES2017)' },
				{ text: 'Learn VueJS' },
				{ text: 'Build Great WebApp' },
			],
		};
	},
};
</script>
