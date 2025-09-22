import "./global.css"

import { useEffect, useState } from "react"
import { Button } from "./components/button"
// import { useMessage } from "./hooks/useMessage"

import styles from "./app.module.css"

// Todo componente tem que começar com letra maiúscula
export function App() {
    const [count, setCount] = useState(1)

    function handleAdd() {
        setCount(count + 1)
    }
    
    function handleRemove() {
        setCount(count - 1)
    }

// export default function App() {
// Com default o conteúdo é importado por padrão 
// (Podendo colocar qualquer nome na importação) 
// Quando o default não é utilizado, a exportação é nomeada, 
// tendo que colocar de fato o nome do componente

    // const { show } = useMessage({ name: "Bruno" })

    useEffect(() =>{
        console.log("O valor mudou!")
    },[count])

    // Todo componente tem um retorno
    return (
        // No retorno é o conteúdo que queremos declarar que deve renderizar em tela
        <div className={styles.container}>
            {/* <Button name="Adicionar" onClick={() => show("Mensagem personalizada do meu próprio Hook!")}/> */}
            <Button name="Adicionar" onClick={handleAdd}/>
            <span>{count}</span>
            <Button name="Remover" onClick={handleRemove}/>
        </div>
    )
}