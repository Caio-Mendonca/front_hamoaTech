import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navgation from "~/components/organisms/navigations";
import http from "~/config";
export async function loader({ request }: LoaderArgs) {
  const resNavgation = await  http.request({
    method: "get",
    url: 'navgations',
  })
  const dataNavgation = await resNavgation.data.data;
  const data ={
    navgationItems: dataNavgation
  }
  return data;
}
export const meta: V2_MetaFunction = () => {
  return [{ title: "Hamoa Tech" }];
};

export default function Index() {
  const data = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Navgation items={data.navgationItems}/>
    </div>
  );
}
