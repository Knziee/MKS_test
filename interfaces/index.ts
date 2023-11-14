export interface CartButtonProps {
    openCart: () => void;
}

export interface HeaderProps {
    toggleCartVisibility: () => void;
}

export interface StoreCardProps {
    name: string;
    brand: string;
    description: string;
    price: string;
    photo: string;
    quantity?: number;
}

export interface GetProductsProps {
    page: number;
    rows: number;
    sortBy: string;
    orderBy: string;
}

export interface QuantityProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export interface QuantityButtonProps {
    borderSide?: string;
    paddingLeft?: string;
    paddingRight?: string;
}
