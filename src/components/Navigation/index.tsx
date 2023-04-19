import { HTMLAttributes } from 'react'

interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode
  title?: string
  withIcon?: boolean
}

export const Navigation = ({
  icon,
  title,
  withIcon = false,
  ...rest
}: ILinkProps) => {
  return (
    <a
      className={
        withIcon
          ? 'flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white hover:text-lg'
          : 'text-sm font-semibold text-zinc-400 hover:text-zinc-100'
      }
      {...rest}
    >
      {withIcon && icon}
      <span className={withIcon ? '[@media(max-width:400px)]:hidden' : ''}>
        {title}
      </span>
    </a>
  )
}
