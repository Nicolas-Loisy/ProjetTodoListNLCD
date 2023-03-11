export default function SearchField(props){
    return (
        <input type="text" id="search" value={props.value} onChange={props.onChange}/>
    )
}