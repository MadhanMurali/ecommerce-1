//Categories and sub categories related queries

import { gql } from '@apollo/client';

const GET_CATEGORIES_LIST = gql`
    query GET_CATEGORIES_LIST ($Authorization: String!) {
        getCategoryList(Authorization: $Authorization) {
            id
            item_category_type
            item_category_name
            description
            branch_id
            company_id
            image_address
            message
          }
    }
`;

const GET_CATEGORIES = gql`
    query GET_CATEGORIES ($Authorization: String!) {
        getCategory(Authorization: $Authorization) {
            id
            item_category_type
            item_category_name
            description
            branch_id
            company_id
            image_address
            message
            itemSubCategory {
                id
                item_sub_category_name
                item_category_id
                description
                branch_id
                company_id
                image_address
                message
            }
          }
    }
`;

const GET_SUB_CATEGORIES = gql`
    query GET_SUB_CATEGORIES ($Authorization: String!, $item_category_id: String!) {
        getSubCategoryList(Authorization: $Authorization, item_category_id: $item_category_id) {
            id
            item_category_id
            item_sub_category_name
            description
            branch_id
            company_id
            message
            image_address
          }
    }
`;

export {
    GET_CATEGORIES,
    GET_SUB_CATEGORIES,
}