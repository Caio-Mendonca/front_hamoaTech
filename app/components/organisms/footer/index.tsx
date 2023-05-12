import * as React from 'react'
import { BoxFooter, BoxIcons, BoxTitleFooter } from './style'
import IconMedia from '~/components/atoms/iconMedia'
interface Props {
    medias: any
}
const Footer: React.FC<Props> =({medias}) => {
    const server_back = process.env.URL_PHOTO

    console.log('teste medias ->', medias)
    return (
        <BoxFooter>
            <BoxTitleFooter>© 2023 Hamoa Tech - Todos os direitos reservados</BoxTitleFooter>
            <BoxIcons>
            {
                medias.map((item: any, index: number) => {
                   return <IconMedia 
                   key={item.id} 
                   icon={server_back + item.attributes.logo.data[0].attributes.url} 
                   link={item.attributes.link} 
                   title={item.attributes.name}/>

                })
            }
            </BoxIcons>
        </BoxFooter>
    )
}
export default Footer