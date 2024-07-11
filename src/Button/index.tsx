import styled from 'styled-components'


export interface ButtonProps {
  size: 'small' | 'medium' | 'large' | 'xlarge'
  children: string,
  color : 'Primary' | 'Black',
  onClick?: () => void
}



const ButtonLayout = styled.button<{size:{width:string,height:string,font:string},color:string}>`
  width: ${({size}) => size.width};
  height: ${({size}) => size.height};
  font-size: ${({size}) => size.font};
  background-color: ${({color}) => color};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:disabled{
    background-color: #BDBDBD;
    cursor: not-allowed;
  }
  &:hover{
    opacity: 0.8;
    outline: none;
  }
`

const Button = ({size, children, color, onClick}:ButtonProps) => {

  const sizeMappging = {
    small: {
      width: "98px",
      height: "40px",
      font:"16px"
    },
    medium: {
      width: "150px",
      height: "50px",
      font:"20px"
    },
    large: {
      width: "220px",
      height: "60px",
      font:"20px"
    },
    xlarge:{
      width: "342px",
      height: "70px",
      font:"28px"
    }
  }
  
  const colorMapping = {
    Primary:`#FD7400`,
    Black:'black',
  }
  const bgColorClass = colorMapping[color] || colorMapping.Primary;
  const sizeClass = sizeMappging[size] || sizeMappging.medium;
  return(
    <ButtonLayout color={bgColorClass} size={sizeClass} onClick={onClick}>
      {children}
    </ButtonLayout>
  )
}

export default Button
