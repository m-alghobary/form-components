<template>
	<div class="base-textarea">
		<label v-if="label" :for="`baseTextarea${uId}`" class="block text-sm font-medium text-gray-700">{{ label }}</label>
		<div class="mt-1 rounded-md">
			<textarea
				:id="`baseTextarea${uId}`"
				class="border border-gray-300 focus:outline-none focus:ring-1 rounded w-full shadow-sm"
				:class="`focus:border-${color}-500 focus:ring-${color}-500`"
				:placeholder="label"
				:value="modelValue"
				@input="inputChange"
				v-bind="$attrs"
			></textarea>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useInput, makeInputProps } from '../../composables/useInput';

export default defineComponent({
	name: 'BaseTextarea',

	props: {
		label: {
			type: String,
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

	setup(_, ctx) {
		function inputChange(event: Event): void {
			const inputEl = event.target as HTMLInputElement | null;
			const value = inputEl?.value || '';
			ctx.emit('update:modelValue', value);
		}

		const { uId } = useInput();

		return { inputChange, uId };
	},
});
</script>

<style scoped></style>
