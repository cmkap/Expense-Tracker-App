//PascallCAsing
function Message() {
    // JSX: JAvascript XML
    const name = "Mosh";
    // expressions return a value {}
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>

}

export default Message;