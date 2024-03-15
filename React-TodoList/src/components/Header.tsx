
import Button from './Button';

const Header = (props: { text: string }) => {
  return (
    <div className='header-cont'>
      <h3 className='header-text'>{props.text}</h3>
      <span className='header-btn'><Button btnText={'Add'} bgcolor={'green'} color={'white'} width={"75px"}/></span>
    </div>
  )
}


export default Header

