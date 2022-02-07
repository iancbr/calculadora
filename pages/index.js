import { useState } from 'react';


export default function App() {
  const[valorTela,setValorTela]=useState('')
  const[resultado,setResultado]=useState(0)
  const[acumulador,setAcumulador]=useState(0)
  const[operado,setOperado]=useState(false)

  //COMPONENTES
  const Tela=(valor,resultado)=>{
    return(
      <div>
        <span>{valor}</span>
        <span>{resultado}</span>
      </div>
    )
  }
  const btn=(label,onCLick)=>{
    return(
      <button onClick={onCLick}>{label}</button>
    )
  }
  
  //FUNÇÕES
  const addDigitoTela=(d)=>{
    if((d=='+'||d=='-'||d=='*'||d=='/')&& operado){
      setOperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }
  const limparMemoria=()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  const Operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.lenght-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r=eval(valorTela)
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('ERRO')
    }    
  }
  
  return (
    <>
      <div>
        <h3>Calculadora</h3>
        {Tela(valorTela,resultado)}
        <div>
          {btn('AC',limparMemoria)}
          {btn('(',()=>addDigitoTela('('))}
          {btn(')',()=>addDigitoTela(')'))}
          {btn('/',()=>addDigitoTela('/'))}
          {btn('7',()=>addDigitoTela('7'))}
          {btn('8',()=>addDigitoTela('8'))}
          {btn('9',()=>addDigitoTela('9'))}
          {btn('*',()=>addDigitoTela('*'))}
          {btn('4',()=>addDigitoTela('4'))}
          {btn('5',()=>addDigitoTela('5'))}
          {btn('6',()=>addDigitoTela('6'))}
          {btn('-',()=>addDigitoTela('-'))}
          {btn('1',()=>addDigitoTela('1'))}
          {btn('2',()=>addDigitoTela('2'))}
          {btn('3',()=>addDigitoTela('3'))}
          {btn('+',()=>addDigitoTela('+'))}
          {btn('0',()=>addDigitoTela('0'))}
          {btn('.',()=>addDigitoTela('.'))}
          {btn('<-',()=>Operacao('bs'))}
          {btn('=',()=>Operacao('='))}
        </div>
      </div>
    </>
  )
}