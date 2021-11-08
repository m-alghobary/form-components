<template>
	<div class="base-radio-group">
		<label v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</label>
		<div class="mt-1 flex" :class="{ 'flex-col space-y-2': stacked, 'space-x-3': !stacked }">
			<base-radio
				v-for="item in items"
				:key="item.value"
				:value="item.value"
				:label="item.text"
				:name="name"
				:modelValue="modelValue"
				@update:modelValue="$emit('update:modelValue', $event)"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import BaseRadio from './base-radio.vue';
import { Option } from '../../types';
import { useInput, makeInputProps } from '../../composables/useInput';

export default defineComponent({
	name: 'BaseRadioGroup',

	components: { BaseRadio },

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
			type: [String, Number],
			required: true,
		},

		stacked: {
			type: Boolean,
			default: false,
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
