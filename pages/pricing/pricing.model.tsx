export interface ProductPackage {
    productId: number,
    period: number,
    ssRefId: number,
    amount: number,
    credit: number,
    productCode: string,
    name: string,
    description: string,
    sender: number

}

export interface Product {
    amount: number,
    standard: ProductPackage,
    corporate: ProductPackage,
    period: number,
}
export interface PricingProps {
    t: Function,
    packages: ProductPackage[],
    test: string
}

export interface PackageAll {
    filter: string
}
