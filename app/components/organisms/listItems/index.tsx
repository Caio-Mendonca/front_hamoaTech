import * as React from 'react'
import InitialElement from '~/components/molucules/InitialImageItem'
import LeftPhoneItem from '~/components/molucules/LeftImageItem'
import { BoxItems } from './style'
import RightPhoneItem from '~/components/molucules/RightImageItem'
interface Props {
    items: any
}
const ListItem: React.FC<Props> =({items}: Props) => {
    function validatedItem(item: any, index:number){
        if(index === 0){
            return (
                <InitialElement item={item} key={item.id}/>
            )
        }
        if(index % 2 === 0){
            return (
                <RightPhoneItem item={item} key={item.id}/>
            )
        }
        else{
            return (
                <LeftPhoneItem item={item} key={item.id}/>
            )
        }
    }
    return (
        <BoxItems>
        {
            items.map((item:any, index:any) => {
                    return validatedItem(item, index)
            })
        }
        </BoxItems>
    )
}
export default ListItem