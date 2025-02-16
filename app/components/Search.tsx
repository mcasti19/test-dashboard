"use client"
import { SearchInput } from "anjrot-components";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce"; // Para minimizar las llamadas a la API en la busqueda


const Search = () => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    // console.log("PATHNAME: ", pathName);

    const handleOnChange = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('query', value)
        } else {
            params.delete("query")
        }

        console.log("VALUE: ", params.toString());

        replace(`${pathName}?${params.toString()}`)

    }, 1000)

    return (
        <SearchInput placeholder="Search..." onChange={(e) => { handleOnChange(e.target.value) }} />
    )
}

export default Search;