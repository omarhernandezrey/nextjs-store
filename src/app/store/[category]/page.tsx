// Define la interfaz para las propiedades que se esperan en el componente Category
interface CategoryProps {
    params: {
        category: string  // Se espera un parámetro 'category' de tipo string
    }
}

// Exporta la función Category que toma un objeto 'props' que se ajusta a la interfaz CategoryProps
export default function Category(props: CategoryProps) {

    // Extrae la propiedad 'category' de 'props.params'
    const { category } = props.params

    // Registra en la consola el objeto 'props' completo
    console.log(props)

    // Devuelve un elemento JSX que es un encabezado de nivel 1
    // El contenido del encabezado es una cadena de texto que incluye el valor de 'category'
    return (
        <h1>Categoria dinamica: { category }</h1>
    )
}