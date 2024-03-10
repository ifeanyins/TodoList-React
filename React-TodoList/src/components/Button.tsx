
const Button = (props :{btnText: string, bgcolor: string | any, color: string | any}) => {
  return (
    <div>
      <button style={{backgroundColor : props.bgcolor, color: props.color}}>{props.btnText}</button>
    </div>
  )
}

export default Button
