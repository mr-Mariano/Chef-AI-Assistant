import React from 'react'

const IconLink = ({children , link}: {children : React.ReactNode, link: string})  => {
    return (
        <a href={link}>
            {children}
        </a>
    )
}
export default IconLink
