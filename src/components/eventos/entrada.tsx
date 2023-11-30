interface EntradaProps {
    tipo?: 'text' | 'number' | 'date'
    texto: string
    valor: any
    somenteLeitura?: boolean
    onChange?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (<div className="flex flex-col mt-3" > <label className="mb-2">
        {props.texto} </label>
        <input type={props.tipo ?? 'text'} value={props.valor} readOnly={props.somenteLeitura}
            onChange={e => props.onChange?.(e.target.value)} className={`
    border border-green-600 rounded-l g focus:outline-none bg-gray-100 px-4 py-2
    ${props.somenteLeitura ? '' : 'focus:bg-white'} `} />
    </div>)
}