import { HTMLAttributes } from 'react'

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

export const Button = ({ icon, children, ...rest }: IButtonProps) => {
  return icon ? (
    <button
      className="flex items-center rounded-full bg-black/40 p-1 hover:bg-zinc-700 transition duration-700"
      {...rest}
    >
      {icon}
    </button>
  ) : null
}
