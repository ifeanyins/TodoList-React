
const Button = (props :{btnText: string, bgcolor: string | any, color: string | any, width: string|any, onClick: any, className: string | any }) => {
  return (
    <div>
      <button style={{backgroundColor : props.bgcolor, color: props.color, width: props.width}} onClick={props.onClick} className="">{props.btnText}</button>
    </div>
  )
}

export default Button
