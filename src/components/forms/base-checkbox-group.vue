<template>
	<div class="base-checkbox-group">
		<label v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</label>
		<div class="mt-1 flex" :class="{ 'flex-col space-y-2': stacked, 'space-x-3': !stacked }">
			<base-checkbox
				v-for="item in items"
				:key="item.value"
				:label="item.text"
				:name="name"
				:modelValue="modelValue.includes(item.value)"
				@change="updateModelValue($event, item)"
				v-bind="$attrs"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import BaseCheckbox from './base-checkbox.vue';
import { Option } from '../../types';
import { useInput, makeInputProps } from '../../composables/useInput';

export default defineComponent({
	name: 'BaseCheckboxGroup',

	components: { BaseCheckbox },

	props: {
		label: {
			type: [String, Number],
			default: '',
		},

		items: {
			type: Array as PropType<Option[]>,
			required: true,
		},

		name: {
			type: String,
			default: '',
		},

		modelValue: {
			type: Array,
			required: true,
		},

		stacked: {
			type: Boolean,
			default: false,
		},

		...makeInputProps(),
	},

	setup(props, ctx) {
		function updateModelValue(event: Event, item: Option): void {
			const exist = props.modelValue.includes(item.value);

			const inputEl = event.target as HTMLInputElement | null;
			const checked = inputEl?.checked;

			if (checked && !exist) {
				props.modelValue.push(item.value);
			}

			if (!checked && exist) {
				const index = props.modelValue.findIndex((val: string | number) => val === item.value);
				props.modelValue.splice(index, 1);
			}

			ctx.emit('update:modelValue', props.modelValue);
		}

		const { uId } = useInput();

		return { updateModelValue, uId };
	},
});
</script>

<style scoped></style>
