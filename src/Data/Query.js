import { gql } from "@apollo/client";

const GET_ALL_PRODUCT = gql`
	query {
		categories {
			name
			products {
				id
				name
				inStock
				gallery
				description
				category
				attributes {
					id
					name
					type
					items {
						displayValue
						value
						id
					}
				}
				prices {
					currency {
						label
						symbol
					}
					amount
				}
				brand
			}
		}
	}
`;

const GET_CATEGORY_DATA = gql`
	query {
		categories {
			name
			products {
				id
				name
				gallery
				category
				prices {
					currency {
						label
						symbol
					}
					amount
				}
			}
		}
	}
`;

const GET_ID_PRODUCTS = gql`
	query {
		categories {
			products {
				id
			}
		}
	}
`;

const GET_CURRENCIES = gql`
	query {
		currencies {
			label
			symbol
		}
	}
`;

const GET_CATEGORIES_NAMES = gql`
	query {
		categories {
			name
		}
	}
`;

export { GET_ALL_PRODUCT, GET_CATEGORY_DATA, GET_ID_PRODUCTS, GET_CURRENCIES, GET_CATEGORIES_NAMES };
