import { gql } from '@apollo/client';

export const LOAD_CATEGORIES = gql`
query LoadCategories {
    categories {
        name
    }
}
`

export const LOAD_CURRENCIES = gql`
query LoadCurrencies {
    currencies {
        symbol
        label
    }
  }
`

export const LOAD_PRODUCTS = gql`
query LoadProducts($title: String!) {
    category(input: { title: "all" }) {
        products {
            name
            brand
            inStock
            description
            gallery
            category
            attributes {
                id
                name
                type
                items {
                    id
                    value
                    }
                }
            id
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
`

export const LOAD_PRODUCT = gql`
query LoadProduct($id: String!) {
    product(id: $id) {
        id
        name
        inStock
        brand
        gallery
        description
        attributes {
            name
            id
            type
            items {
                id
                value
                displayValue
                }
            }
        prices {
            currency {
                label
                symbol
              }
            amount
            }
        }
    }
`