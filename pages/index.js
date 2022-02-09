import React,{ useState } from 'react';



export default function App() {
  const[valorTela,setValorTela]=useState('')
  const[resultado,setResultado]=useState(0)
  const[acumulador,setAcumulador]=useState(0)
  const[operado,setOperado]=useState(false)

  //COMPONENTES
  const Tela=(valor,resultado)=>{
    return(
      <div style={visor}>
        <span style={value}>{valor}</span>
        <span style={res}>{resultado}</span>
      </div>
    )
  }
  const btn=(label,onCLick)=>{
    return(
      <button style={botao} onClick={onCLick}>{label}</button>
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
    }    
  }
  
  //STYLE
  const container={
    display: 'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    width: 300,
    border: '1px solid #999'
  }
  const but={
    flexDirection:'row',
    flexWrap:'wrap',

  }
  const visor={
    display: 'flex',
    paddingleft:20,
    paddingright:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#444',
    flexDirection:'column',
    width:300,
  }
  const value={
    fontSize: 25,
    color:'#fff',
    height:20 ,
  }
  const res={
    fontSize: 35,
    color:'#fff',
    height:35,
    
  }
  const botao={
    fontSize:30,
    height:75,
    width:75,
    padding:20,
    backgroundColor:'#000',
    color:'#fff',
    textAlign:'center',
  }
  
  //CONTAINER

  return (
    <>
      <div style={container}>
        <h3>Calculadora</h3>
        {Tela(valorTela,resultado)}
        <div style={but}>
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
          {btn('.',()=>addDigitoTela('.'))}
          {btn('0',()=>addDigitoTela('0'))}
          {btn('<-',()=>Operacao('bs'))}
          {btn('=',()=>Operacao('='))}
        </div>
      </div>
    </>
  );
}