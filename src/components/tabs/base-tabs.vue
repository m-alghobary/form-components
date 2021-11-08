<script lang="ts">
import { ComponentOptions, VNode, h, ref, createVNode, provide } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseTabs',

	setup(_, { slots }) {
		const rowChildren = slots.default && typeof slots.default === 'function' ? slots.default() : [];
		const tabs = rowChildren.filter((child) => (child.type as ComponentOptions).name === 'BaseTab');
		const tabsItems = rowChildren.filter((child) => (child.type as ComponentOptions).name === 'BaseTabsItems');

		const selectedTab = ref(0);

		const changeSelectd = (event: Event, index: number) => {
			event.preventDefault();

			selectedTab.value = index;
		};

		const genTabs = (tabs: VNode[]) => {
			return h(
				'ul',
				{
					class: 'base-tabs--header',
				},
				[
					tabs.map((tab, i) =>
						h(tab, {
							class: { active: selectedTab.value === i },
							onClick: ($event: Event) => changeSelectd($event, i),
						})
					),
				]
			);
		};

		provide('selectedTab', selectedTab);

		return () => h('div', { class: 'base-tabs' }, [genTabs(tabs), tabsItems]);
	},
});
</script>

<style scoped></style>
