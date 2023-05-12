import * as React from 'react'
import { BoxTitle } from '../boxCarousel/style'
import { BoxImages, BoxItems } from './style'
interface Props {
    startups: any
}
const StartupsBox: React.FC<Props> =({startups}) => {
    console.log('ta aqui startups', startups)
    const server_back = process.env.URL_PHOTO

    return (
        <BoxItems>
            <BoxTitle>
                Ajudamos startups a chegarem mais longe
            </BoxTitle>
            <BoxImages>
                {startups.map((item: any) => (
                    <img src={server_back +item.attributes.logo.data[0].attributes.url} alt={item.name} key={item.id}/>
                ))}
            </BoxImages>
        </BoxItems>
    )
}
export default StartupsBox