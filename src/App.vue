<template>
	<h1 class="text-center text-3xl font-semibold text-gray-900 my-6">Vue3.ts UI Components</h1>
	<div class="max-w-2xl mx-auto mt-2 space-y-3 mb-3">
		<hr />
		<h3 class="mb-2 text-xl text-gray-900 font-semibold text-">- Forms</h3>
		<!-- Inputs -->
		<base-input type="text" v-model="userName" label="Username" />
		<base-input type="email" v-model="email" label="Email" />
		<base-input type="number" v-model="age" label="Age" />
		<base-input type="date" v-model="birthDate" label="Birth date" />

		<!-- Textarea -->
		<base-textarea v-model="bio" label="Bio" />

		<!-- Select -->
		<base-select v-model="countryId" :items="countries" label="Country" />

		<!-- Checkbox & Radio -->
		<base-checkbox v-model="saveMyData" label="Save my data?" />
		<base-checkbox-group v-model="userTechs" name="userTechs" label="User techs" :items="techs" stacked />
		<base-radio-group v-model="gender" name="gender" label="Gender" :items="genders" stacked />

		<base-button ref="btnRef">Save</base-button>

		<hr />
		<h3 class="mb-2 text-xl text-gray-900 font-semibold text-">- Tabs</h3>

		<base-tabs>
			<base-tab>Tab 1</base-tab>
			<base-tab>Tab 2</base-tab>
			<base-tab>Tab 3</base-tab>

			<base-tabs-items>
				<base-tab-item>Tab 1 content</base-tab-item>
				<base-tab-item>Tab 2 content</base-tab-item>
				<base-tab-item>Tab 3 content</base-tab-item>
			</base-tabs-items>
		</base-tabs>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import BaseInput from './components/forms/base-input.vue';
import BaseSelect from './components/forms/base-select.vue';
import BaseCheckbox from './components/forms/base-checkbox.vue';
import BaseRadioGroup from './components/forms/base-radio-group.vue';
import BaseCheckboxGroup from './components/forms/base-checkbox-group.vue';
import BaseTextarea from './components/forms/base-textarea.vue';
import BaseButton from './components/base-button.vue';
import BaseTabs from './components/tabs/base-tabs.vue';
import BaseTab from './components/tabs/base-tab.vue';
import BaseTabsItems from './components/tabs/base-tabs-items.vue';
import BaseTabItem from './components/tabs/base-tab-item.vue';

export default defineComponent({
	name: 'App',
	components: {
		BaseInput,
		BaseSelect,
		BaseCheckbox,
		BaseRadioGroup,
		BaseCheckboxGroup,
		BaseTextarea,
		BaseButton,
		BaseTabs,
		BaseTab,
		BaseTabsItems,
		BaseTabItem,
	},

	setup() {
		const userName = ref('Mohamed Alghobary');
		const email = ref('alghobary@gmail.com');
		const bio = ref('Full stack web developer');
		const birthDate = ref('2021-06-18');
		const age = ref(25);
		const countryId = ref(1);
		const saveMyData = ref(false);
		const gender = ref('');
		const userTechs = ref([]);

		const btnRef = ref();

		const countries = [
			{ value: 1, text: 'Yemen' },
			{ value: 2, text: 'United states' },
			{ value: 3, text: 'United kingdom' },
		];

		const genders = [
			{ value: 1, text: 'Mail' },
			{ value: 2, text: 'Femail' },
		];

		const techs = [
			{ value: 1, text: 'JavaScript' },
			{ value: 2, text: 'TypeScript' },
		];

		return { userName, email, age, birthDate, bio, countryId, countries, genders, saveMyData, gender, techs, userTechs, btnRef };
	},
});
</script>

<style></style>
