import { Fragment } from 'react'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string
  styleClass?: string
  h1Title?: boolean
}

export const Title = ({ title, styleClass, h1Title, ...rest }: TitleProps) => {
  return (
    <Fragment>
      {h1Title ? (
        <h1 className={styleClass} {...rest}>
          {title}
        </h1>
      ) : (
        <h2 className={styleClass} {...rest}>
          {title}
        </h2>
      )}
    </Fragment>
  )
}
