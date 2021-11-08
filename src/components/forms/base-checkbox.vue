<template>
	<div class="base-checkbox flex items-center">
		<input
			:id="`base-checkbox-${uId}`"
			type="checkbox"
			class="h-4 w-4 border-gray-300 rounded"
			:class="`text-${color}-400 focus:ring-${color}-500`"
			:checked="modelValue"
			@change="inputChange"
			v-bind="$attrs"
		/>
		<label v-if="label" :for="`base-checkbox-${uId}`" class="ml-2 block text-sm text-gray-900">{{ label }}</label>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useInput, makeInputProps } from '../../composables/useInput';

export default defineComponent({
	name: 'BaseCheckbox',

	props: {
		label: {
			type: [String, Number],
			default: '',
		},

		modelValue: {
			type: Boolean,
			default: false,
		},

		color: {
			type: String,
			default: 'green',
		},

		...makeInputProps(),
	},

	setup(_, ctx) {
		function inputChange(event: Event): void {
			const inputEl = event.target as HTMLInputElement | null;
			ctx.emit('update:modelValue', inputEl?.checked || false);
		}

		const { uId } = useInput();

		return { inputChange, uId };
	},
});
</script>

<style scoped></style>
