<template>
	<div class="base-tab-item">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseTabItem',

	setup() {
		return {};
	},
});
</script>

<style scoped></style>
