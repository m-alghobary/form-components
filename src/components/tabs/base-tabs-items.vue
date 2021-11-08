<script lang="ts">
import { defineComponent, h, inject, ref, watch } from 'vue';

export default defineComponent({
	name: 'BaseTabsItems',

	setup(_, { slots }) {
		const selectedTab = ref(inject<number>('selectedTab', 0));
		watch(selectedTab, () => console.log(selectedTab.value));

		return () => {
			const rowChildren = slots.default && typeof slots.default === 'function' ? slots.default() : [];
			const child = rowChildren.filter((_, i) => i === selectedTab.value);

			return h('div', { class: 'base-tabs--items' }, [child]);
		};
	},
});
</script>

<style scoped></style>
