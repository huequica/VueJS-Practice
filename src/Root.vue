<template>

	<div v-bind:title="title">
		Hello Vue!<br/>
		{{ message }}

		<span v-if="isSpanAppear">
			<code>isSpanAppear</code>は<code>true</code>だよ
		</span>

		{{/* `v-for` でeachみたいな処理が可能、ただし `v-bind:key` を与える必要あり */}}
		<ol>
			<li v-for="(Item, index) in ListQue" v-bind:key="index">
				{{Item.text}}
			</li>
		</ol>

		<ReverseButton v-bind:label="'Reverse!!!'" />
		<Model />
	</div>

</template>

<script>
import ReverseButton from './Components/reverseButton.vue';
import Model from './Components/model.vue';

export default {
  name: 'Root',
  components: { ReverseButton, Model },
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
