import LogoLink from "~/components/atoms/logo"
import ItemLink from "../../atoms/ItemLink"
import { BoxItems, BoxLinks, BoxNavBar } from "./style"
import Select from "~/components/atoms/select"

interface Props {
    items: any
}
const Navgation = ({items}:Props) => {
    console.log('teste items ->', items)
    const fixedItems = [
        {
            id: 'start_on',
            title: 'Start On'
        },
        {
            id: 'jmd',
            title: 'JMD'
        },
        {
        id: 'about',
        title: 'Sobre'
        ,
        }
    ]
    return (
        <BoxNavBar>  
            <BoxItems>
                <LogoLink/>
                <BoxLinks>
                {
                    items.map((item:any) => {
                        return (
                            <ItemLink 
                            key={item.id} 
                            url={`/projects/${item.attributes.id_reference_project}`}
                            title={item.attributes.title}/>
                        )
                    })
                }
                {
                    fixedItems.map((item:any) => {
                        return (
                            <ItemLink 
                            key={item.id} 
                            url={`${item.id}`}
                            title={item.title}/>
                        )
                    })
                }
                </BoxLinks>
                <Select/>
            </BoxItems>
        </BoxNavBar>
    )
}
export default Navgation