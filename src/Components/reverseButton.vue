<template>
	<div>
		<p>{{ Message }}</p>
		<button v-on:click="reverseMessage">{{label}}</button>
	</div>
</template>

<script>
export default {
  name: 'reverseButton',
  props: ['label'],
  data() {
    return {
      Message: 'Reversed!'
    };
  },

  // `methods.~~` でイベントハンドラ等を記述
  // この際自分のコンポーネントの `state` は `this.~~` で拾える
  methods: {
    reverseMessage() {
      this.$set(this, 'Message', this.Message.split('')
        .reverse()
        .join(''));
    }
  }
};
</script>
