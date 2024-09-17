import React from 'react';


export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "15vh",
    width: "100%",
    backgroundColor: "aqua",
    border: "2px dotted black"

  }

  return (
    <footer className=' text-dark py-2'  style={footerStyle}>
      <p className='text-center '> Copyright &copy; MyTodosList.com</p>

     
    </footer>
  )
}
