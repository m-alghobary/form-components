import { computed, PropType, ref } from 'vue';
import { Rule } from '../types';
import propsFactory from '../util/propsFactory';
import useUID from '../util/genUID';

export const makeInputProps = propsFactory({
	rules: {
		type: Array as PropType<Rule[]>,
		default: () => [],
	},
});

export function useInput() {
	const uId = useUID();
	const valid = ref(false);
	const errorBucket = ref<String[]>([]);

	const hasError = computed(() => {
		return errorBucket.value.length > 0;
	});

	return {
		uId,
		valid,
		errorBucket,
		hasError,
	};
}
