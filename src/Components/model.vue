<template>
	<div>
		<p>{{ message }}</p>
		<label>
			<input v-model="message" />
		</label>
	</div>
</template>

<script>
export default {
  name: 'Model',
  data() {
    return {
      message: 'Hello Vue!'
    };
  }
};
</script>
