import * as React from 'react'
import Carousel from '~/components/atoms/carousel'
import ItemCarousel from '~/components/atoms/itemCarousel'
import { BoxTitle } from './style'
interface Props {
    condominiums: any
}
const CarouselBox: React.FC<Props> =({condominiums}) => {
    return (
        <>
        <BoxTitle>
            Conheça os empreendimentos JMD Hamoa Urbanismo
        </BoxTitle>

        <Carousel>
        {
            condominiums.map((item: any) => {
                return (<ItemCarousel key={item.id} item={item}/>)
            })
        }            
        </Carousel>   
        </>
    )
}
export default CarouselBox