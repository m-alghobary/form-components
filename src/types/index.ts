/**
 * For the items passed to select, radio-group & checkbox-group components
 * */
interface Option {
	value: number | string;
	text: number | string;
}

/**
 * For the input component type attribute
 */
type InputType = 'text' | 'number' | 'email' | 'password' | 'date';

/**
 * For the button component type attribute
 */
type ButtonType = 'button' | 'submit' | 'reset';

/**
 * For validation rules
 */
type Rule = (val: any) => Boolean | String;

/**
 * Base form input type
 */
interface BaseFormInput {
	_uid: string;
	rules: Rule[];
	valid: Boolean;
	hasError: Boolean;
}

type Watcher = {
	uid: string;
	valid: () => void;
};

export { Option, InputType, ButtonType, Rule, BaseFormInput, Watcher };
