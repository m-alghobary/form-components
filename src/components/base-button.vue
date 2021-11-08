<template>
	<component
		:id="`base-button-${uId}`"
		:is="link ? 'a' : 'button'"
		:href="link ? '#' : undefined"
		class="text-white py-2 px-5 uppercase rounded shadow-sm focus:outline-none focus:ring-2 transition-colors ease-in-out duration-300"
		:class="`bg-${color}-500 focus:ring-${color}-500 hover:bg-${color}-400 focus:ring-offset-1 focus:ring-opacity-75`"
		:type="type"
		v-bind="$attrs"
	>
		<slot></slot>
	</component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import genUID from '../util/genUID';
import { ButtonType } from '../types';

export default defineComponent({
	name: 'BaseButton',

	props: {
		type: {
			type: String as PropType<ButtonType>,
			default: 'button',
		},

		color: {
			type: String,
			default: 'green',
		},

		link: {
			type: Boolean,
			default: false,
		},
	},

	setup() {
		return { uId: genUID() };
	},
});
</script>

<style scoped></style>
