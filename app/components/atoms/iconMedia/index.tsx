import * as React from 'react'
import { ImageIcon } from './style'
interface Props {
    icon: string
    link: string
    title: string
}
const IconMedia: React.FC<Props> =({icon, link, title}) => {
    return (
        <ImageIcon>
            <a href={link} target='blank'>
                <img src={icon} alt={title}/>
            </a>
        </ImageIcon>
    )
}
export default IconMedia