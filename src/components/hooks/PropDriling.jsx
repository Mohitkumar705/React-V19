const Parent = () => {
    return(
        <>
            <h1>Hello to Props Driling </h1>
            <Children  data= "React Props"  />
        </>
    )
}
export default Parent;

const Children = (props) => {
    return(
        <>
            <h1>Hello childern</h1>
            <GrandFather  data={props.data}  />
        </>
    )
}

const GrandFather = (props) => {
    return(
        <>
            <h1>Hello Grandfather</h1>
            <GrandGrandFather  data={props.data}  />
        </>
    )
}

const GrandGrandFather = (props) => {
    return(
        <>
            <h1>Hello i love {props.data}</h1>
        </>
    )
}
