<template>
	<div class="base-input">
		<label v-if="label" :for="`baseInput${uId}`" class="block text-sm font-medium text-gray-700">{{ label }}</label>
		<div class="mt-1 rounded-md shadow-sm">
			<input
				:id="`baseInput${uId}`"
				class="border border-gray-300 focus:outline-none focus:ring-1 rounded w-full"
				:class="`focus:border-${color}-500 focus:ring-${color}-500`"
				:type="type"
				:placeholder="label"
				:value="modelValue"
				@input="inputChange"
				v-bind="$attrs"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { useInput, makeInputProps } from '../../composables/useInput';
import { InputType } from '../../types';

export default defineComponent({
	name: 'BaseInput',

	props: {
		label: {
			type: String,
			default: '',
		},

		type: {
			type: String as PropType<InputType>,
			default: '',
		},

		modelValue: {
			type: [String, Number],
			default: '',
		},

		color: {
			type: String,
			default: 'green',
		},

		...makeInputProps(),
	},

	setup(props, ctx) {
		function inputChange(event: Event): void {
			const inputEl = event.target as HTMLInputElement | null;
			const value = inputEl?.value || '';
			ctx.emit('update:modelValue', props.type === 'number' ? parseInt(value, 10) : value);
		}

		const { uId, valid, errorBucket, hasError } = useInput();

		return { inputChange, uId, valid, errorBucket, hasError };
	},
});
</script>

<style scoped></style>
