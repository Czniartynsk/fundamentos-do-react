import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {
    name: string
}

// Obtem a propriedade sem desestruturar
// export function Button(props: Props){

// Desestruturando a propriedade e passando diretamente sem props.
export function Button({ name, ...rest }: Props){
    // Em vez de pegar a propriedade específica, 
    // pega o restante das propriedades, aquelas que não foram 
    // mencionadas explicitamente, e repassa para o botão
    return (
        <button className={styles.container} {...rest}>
            <span>{name}</span>
        </button>
    )
}