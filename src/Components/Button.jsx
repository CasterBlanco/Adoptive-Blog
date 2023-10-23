
function Button({ color, children, size, type }) {
    return (
      <button className={`${color} ${size} btn`}>{children}</button>
    )
  }
  
  export default Button;
  