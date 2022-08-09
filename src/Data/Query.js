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
			products {
				name
				gallery
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

export { GET_ALL_PRODUCT, GET_CATEGORY_DATA };
