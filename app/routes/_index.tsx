import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navgation from "~/components/organisms/navigations";
import Home from "~/components/templates/home";
import http from "~/config";
export async function loader({ request }: LoaderArgs) {
  
  const apiUrl = 'projects?populate=*';
  const resProjects = await  http.request({
    method: "get",
    url: apiUrl,
  })
  const resCondominiums = await  http.request({
    method: "get",
    url: 'condominiums?populate=*',
  })
  const resNavgation = await  http.request({
    method: "get",
    url: 'navgations',
  })
  const resStartUps = await  http.request({
    method: "get",
    url: 'startups?populate=*',
  })
  const resMedias = await  http.request({
    method: "get",
    url: 'medias?populate=*',  
  })
  const dataProjects = await resProjects.data.data;
  const dataNavgation = await resNavgation.data.data;
  const dataCondominiums = await resCondominiums.data.data;
  const dataStartUps = await resStartUps.data.data;
  const dataMedias = await resMedias.data.data;
  const data ={
    projects: dataProjects,
    navgationItems: dataNavgation,
    condominiums: dataCondominiums,
    startups: dataStartUps,
    medias: dataMedias
  }
  return data;
}
export const meta: V2_MetaFunction = () => {
  return [{ title: "Hamoa Tech" }];
};

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      <Navgation items={data.navgationItems}/>
      <Home data={data.projects} condominiums={data.condominiums} startups={data.startups} medias={data.medias}/>
    </div>
  );
}
