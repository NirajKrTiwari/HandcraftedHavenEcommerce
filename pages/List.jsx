import { useState } from "react";
import Layout from "../components/Layout"
import { useRouter } from "next/router";
import Menu from "../components/Menu";
import {client} from "../lib/client";
import css from "../styles/List.module.css"
export default function List({ub}) {
    const router = useRouter();
    return (
        <Layout>
            <div className={css.container}>
                <Menu ub={ub}/>
            </div>
        </Layout>
    );
}
export const getServerSideProps =async()=>
{
  const query='*[_type == "underbelly"]'
  const ub =await client.fetch(query)
  return{
    props:{ub}
  }
}