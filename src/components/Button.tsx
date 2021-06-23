import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> /* passar para o elemento do botão do HMTL toda tipagem que um botão pode receber por meio de ButtonHTMLAttributes, 
  a tipagem do elemento button é global*/

export function Button(props: ButtonProps) {

  return (
    <button className="button" {...props} /> 

  )
}