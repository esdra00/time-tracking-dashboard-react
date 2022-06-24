import React from "react";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { Layout } from "./AppStyle";
import CardProfile from "./component/CardProfile/CardProfile";
import CardItem from "./component/CardItem/CardItem";

export default function App() {
    const [timeFrame, setTimeFrame] = useState("weekly");

    return (
        <>
            <GlobalStyle />
            <Layout>
                <CardProfile timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
                <CardItem activity="Work" timeFrame={timeFrame} />
                <CardItem activity="Play" timeFrame={timeFrame} />
                <CardItem activity="Study" timeFrame={timeFrame} />
                <CardItem activity="Exercise" timeFrame={timeFrame} />
                <CardItem activity="Social" timeFrame={timeFrame} />
                <CardItem activity="SelfCare" timeFrame={timeFrame} />
            </Layout>
        </>
    )
}