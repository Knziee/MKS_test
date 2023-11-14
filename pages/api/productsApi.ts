import { useQuery } from "react-query";

const fetchProducts = async ({
    page = 1,
    rows = 10,
    sortBy = "id",
    orderBy = "ASC",
}) => {
    const queryParams = new URLSearchParams({
        page: page.toString(),
        rows: rows.toString(),
        sortBy,
        orderBy,
    });

    const response = await fetch(
        `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?${queryParams}`
    );
    const data = await response.json();
    return data;
};

const getProducts = ({ page, rows, sortBy, orderBy }) => {
    const queryKey = ["products", page, rows, sortBy, orderBy].join("-");

    return useQuery(queryKey, () =>
        fetchProducts({ page, rows, sortBy, orderBy })
    );
};

export default getProducts;
