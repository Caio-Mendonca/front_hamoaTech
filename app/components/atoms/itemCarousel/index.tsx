import * as React from 'react'
import { BoxElement, BoxTitle } from './style'
import { ButtonStyle } from '~/styleGlobal'
interface Props {
    item: any
}
const ItemCarousel: React.FC<Props> =({item}) => {
    const server_back = process.env.URL_PHOTO
    console.log('item', item)
    return (
        <BoxElement>
            <div className="box"
            style={{
                background:`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${server_back +  item.attributes.image.data[0].attributes.url}) `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '60%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '20px',
                borderRadius: '10px',
                height: '100%',
            }}
            >
                <BoxTitle>
                {item.attributes.name}
                </BoxTitle>
                <a href={item.attributes.link_site_jmd} target='blank'>
                <ButtonStyle>
                    saiba mais
                </ButtonStyle>
                </a>
            </div>
        </BoxElement>
    )
}
export default ItemCarousel