/**
 * Props for the search filter input component,
 * @property {string} searchTerm - Represents the current search term entered by the user.
 * @property {(text: string) => void} onChangeText - A function that will be called when the text in the search input changes.
 * @property {string} testID - A unique identifier used for testing purposes
 */
export type SearchFilterInputProps = {
  searchTerm?: string;
  onChangeText: (text: string) => void;
  testID: string;
};
