<template>
	<div class="base-select">
		<label v-if="label" :for="`base-select-${uId}`" class="block text-sm font-medium text-gray-700">{{ label }}</label>
		<div class="mt-1 rounded-md shadow-sm">
			<select
				:id="`base-select-${uId}`"
				class="border-gray-300 focus:outline-none focus:ring-1 rounded w-full"
				:class="`focus:border-${color}-500 focus:ring-${color}-500`"
				:placeholder="label"
				:value="modelValue"
				v-bind="$attrs"
				@change="selectChange"
			>
				<option v-for="item in items" :key="item.value" :value="item.value" :selected="item.value === modelValue">{{ item.text }}</option>
			</select>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { useInput, makeInputProps } from '../../composables/useInput';
import { Option } from '../../types';

export default defineComponent({
	name: 'BaseSelect',

	props: {
		label: {
			type: String,
			default: '',
		},

		items: {
			type: Array as PropType<Option[]>,
			default: () => [],
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
		function selectChange(event: Event): void {
			const selectEl = event.target as HTMLSelectElement | null;
			ctx.emit('update:modelValue', selectEl?.value || '');
		}

		const { uId } = useInput();

		return { selectChange, uId };
	},
});
</script>

<style scoped></style>
