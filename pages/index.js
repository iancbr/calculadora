import React,{ useState } from 'react';
import styles from './index.module.css'


export default function App() {
  const[valorTela,setValorTela]=useState('')
  const[resultado,setResultado]=useState(0)
  const[acumulador,setAcumulador]=useState(0)
  const[operado,setOperado]=useState(false)
  const[cont,setCont]=useState(0)

  //COMPONENTES
  const Tela=(valor,resultado)=>{
    return(
      <div className={styles.visor}>
        <span className={styles.value}>{valor}</span>
        <span className={styles.res}>{resultado}</span>
      </div>
    )
  }
  const btn=(label,onCLick)=>{
    return(
      <button className={styles.botao} onClick={onCLick}>{label}</button>
    )
  }

  //FUNÇÕES
  const addDigitoTela=(d)=>{
    setCont(0)
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
  const oper=(o)=>{
    if((o=='+'||o=='-'||o=='*'||o=='/') && cont<1){
      addDigitoTela(o)
      setCont(1)
      return
    }
    else{
      setValorTela('ERRO')
      return
    }
  }
  const limparMemoria=()=>{
    setCont(0)
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  const limparvTela=()=>{
    setCont(0)
    setOperado(true)
    setValorTela('')
    setResultado(resultado)
    setAcumulador(0)
    return
  }
  
  const Operacao=(oper)=>{
    setCont(0)
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
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
      setValorTela('')
    }    
  }
  
  //CONTAINER

  return (
    <>
      <div className={styles.container}>
        <h3>Calculadora</h3>
        {Tela(valorTela,resultado)}
        <div className={styles.but}>
          {btn('%',limparvTela)}
          {btn('C',limparvTela)}
          {btn('AC',limparMemoria)}
          {btn('<-',()=>Operacao('bs'))}
          {btn('(',()=>addDigitoTela('('))}
          {btn(')',()=>addDigitoTela(')'))}
          {btn('²√x',()=>addDigitoTela(')'))}
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
          {btn('+/-',()=>addDigitoTela(')'))}
          {btn('.',()=>addDigitoTela('.'))}
          {btn('0',()=>addDigitoTela('0'))}
          {btn('=',()=>Operacao('='))}
        </div>
      </div>
    </>
  );
}