import React from "react";

type HomeState = {
    user: string;
}

class Home extends React.Component<Record<string, never>, HomeState>{

    constructor(props: Record<string, never>) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <h1>Hello from home</h1>
        )
    }
}

export default Home;