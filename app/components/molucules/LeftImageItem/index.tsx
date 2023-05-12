import * as React from 'react'
import { BoxElement, BoxItemEnd, BoxItemStart } from './style'
import { BoxSubTitle, BoxSumary, BoxTitle, ButtonStyle } from '~/styleGlobal'
import { useNavigate } from '@remix-run/react'
interface Props {
    item: any
}
const LeftPhoneItem: React.FC<Props> =({item}) => {
    const server_back = process.env.URL_PHOTO
    let navigate = useNavigate()

    return (
        <BoxElement>
            <BoxItemStart>
                <img
                src={
                    server_back + item.attributes.file.data[0].attributes.url
                }
                width={item.attributes.file.data[0].attributes.width}
                height={item.attributes.file.data[0].attributes.height}
                alt={item.title}/>
            </BoxItemStart>
            <BoxItemEnd>
                <BoxTitle>
                    {item.attributes.title}
                </BoxTitle>
                <BoxSubTitle>
                    <h2>
                        {item.attributes.descriptionNoColor}
                        <span
                        style={{
                            color: 'transparent',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                            backgroundImage: `${item.attributes.color}`,
                        }}
                        >
                            {item.attributes.descriptionColor}
                        </span>
                    </h2>
                </BoxSubTitle>
                <BoxSumary>
                    {item.attributes.summary}
                </BoxSumary>
                <ButtonStyle onClick={() => {navigate(`projects/${item.id}`)}}>
                    saiba mais
                </ButtonStyle>
            </BoxItemEnd>
        </BoxElement>
    )
}
export default LeftPhoneItem