import ListItem from "~/components/organisms/listItems"
import { BoxHome } from "./style"
import CarouselBox from "~/components/molucules/boxCarousel"
import StartupsBox from "~/components/molucules/boxStartup"
import Footer from "~/components/organisms/footer"
interface Pops {
    data: any,
    startups: any,
    condominiums: [{}],
    medias: any
}
const Home = ({data, condominiums,startups, medias}: Pops) => {
    return (
        <BoxHome>
            <ListItem items={data}/>
            <CarouselBox condominiums={condominiums}/>
            <StartupsBox startups={startups}/>
            <Footer medias={medias}/>
        </BoxHome>
    )
}

export default Home