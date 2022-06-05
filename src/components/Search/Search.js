import { useState } from "react";
import { SearchContainer } from "./SearchStyle";

export default function Search({ width, display }) {
    const [filter, setFilter] = useState('')
    const searchData = ['Engenheiro de bike', 'Mecanica de bike', 'Posto de ferramenta de bike', 'Mecanica eBike']

    function filterPlaces() {
        if(filter !== '') {
            return searchData.filter(data => data.toLowerCase().includes(filter)).map(data => {
                return (
                    <p>{data}</p>
                )
            })
        }
    }

    return (
        <SearchContainer width={width} display={display}>
            <input type='text' placeholder='Buscar' value={filter} onChange={e => setFilter(e.target.value)} />
            <div>
                {filterPlaces()}
            </div>
        </SearchContainer>
    )
}