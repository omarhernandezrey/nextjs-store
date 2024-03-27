
interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}


export default function categories(props: CategoryProps) {


    const { categories } = props.params

    console.log(props)
    console.log(categories)

   
    return (
        <h1>Categoria dinamica: { categories }</h1>
    )
}