<template>
	<div class="base-radio flex items-center">
		<input
			:id="`base-radio-${uId}`"
			type="radio"
			class="h-4 w-4 border-gray-300"
			:class="`text-${color}-400 focus:ring-${color}-500`"
			:checked="modelValue === value"
			@change="$emit('update:modelValue', value)"
			v-bind="$attrs"
		/>
		<label v-if="label" :for="`base-radio-${uId}`" class="ml-2 block text-sm text-gray-900">{{ label }}</label>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useInput, makeInputProps } from '../../composables/useInput';

export default defineComponent({
	name: 'BaseRadio',

	props: {
		label: {
			type: [String, Number],
			default: '',
		},

		modelValue: {
			type: [String, Number],
			default: '',
		},

		value: {
			type: [String, Number],
			required: true,
		},

		color: {
			type: String,
			default: 'green',
		},

		...makeInputProps(),
	},

	setup() {
		const { uId } = useInput();

		return { uId };
	},
});
</script>

<style scoped></style>
