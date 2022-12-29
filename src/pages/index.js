import * as React from "react"
import '../scss/index.scss'
import Layout from "../components/Layout/layout";
import PersionalInfo from "../components/PersionalInfo/persionalInfo";

export default function Home() {
    return <div>
        <Layout>
            <PersionalInfo></PersionalInfo>
        </Layout>
    </div>
}
