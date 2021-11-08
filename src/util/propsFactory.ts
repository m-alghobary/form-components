import type { ComponentObjectPropsOptions } from 'vue';

type PartialKeys<T> = { [P in keyof T]?: unknown };
interface PropsOptions extends ComponentObjectPropsOptions {}
interface Defaults extends PartialKeys<PropsOptions> {}

export default function propsFactory<PropsOptions extends ComponentObjectPropsOptions>(props: PropsOptions) {
	return (defaults?: Defaults) => {
		return Object.keys(props).reduce<any>((obj, prop) => {
			const isObject = typeof props[prop] === 'object' && props[prop] != null && !Array.isArray(props[prop]);
			const definition = isObject ? props[prop] : { type: props[prop] };

			if (defaults && prop in defaults) {
				obj[prop] = {
					...definition,
					default: defaults[prop],
				};
			} else {
				obj[prop] = definition;
			}

			return obj;
		}, {});
	};
}
