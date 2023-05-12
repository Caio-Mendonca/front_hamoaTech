import * as React from 'react'
import { useNavigate } from "@remix-run/react"
import { BoxElement, BoxItemEnd, BoxItemStart } from './style'
import { BoxSubTitle, BoxSumary, BoxTitle, ButtonStyle } from '~/styleGlobal'
interface Props {
    item: any
}
const InitialElement: React.FC<Props> =({item}) => {
    const server_back = process.env.URL_PHOTO
    let navigate = useNavigate()
    return (
        <BoxElement>
            <BoxItemStart>
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
            </BoxItemStart>
            <BoxItemEnd>
                    <img src={
                        server_back + item.attributes.file.data[0].attributes.url
                    }
                    alt={item.attributes.title}
                    />
            </BoxItemEnd>
        </BoxElement>
    )
}
export default InitialElement