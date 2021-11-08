export default function useUID(): String {
	return Math.random().toString(36).substr(2, 12);
}
