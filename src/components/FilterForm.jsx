import { useDispatch } from "react-redux"
//import { filterChangeActionCreator } from "../reducers/filterReducer";
import { filterAnecdotes } from "../reducers/filterReducer";

const FilterForm = () => {
    const dispatch = useDispatch();
    const handleFilterChange = (e) => {
        const filterValue = e.target.value
        console.log(filterValue);
        //dispatch(filterChangeActionCreator(filterValue))
        dispatch(filterAnecdotes(filterValue))
    }
    return (
        <div>
            filter  <input name="filter" onChange={handleFilterChange} />     
        </div>
    )
}

export default FilterForm