export default function SearchField(props){
    return (
        <input type="text" value={props.value} onChange={props.onChange}/>
    )
}