export const TextSearchFilter = ({column}) =>{
    const {filterValue, setFilter} = column
    return(
        <span>
            <input className="w-[7rem] p-2 border-2 rounded-xl" placeholder="Search for..." value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}