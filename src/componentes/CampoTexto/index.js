import './CampoTexto.css'

const CampoTexto = (props) => {

    /*
    Para fazer interpolação de strings poderiamos fazer assim:
    const placeholderModificada = `${props.placeholder}`
    e o campo imput ficaria assim:
    <input placeholder={placeholdermodificada}></input>
    */

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto