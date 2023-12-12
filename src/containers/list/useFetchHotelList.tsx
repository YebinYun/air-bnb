// import { useQuery } from "@tanstack/react-query"
// import { useState } from "react"

// const paramInit = {
//     filter_by_currency: '',
//     locale: '',
//     room_number: '',
//     checkin_date: '',
//     checkout_date: '',
//     longitude: '',
//     adults_number: '',
//     latitude: '',
//     order_by: '',
//     units: '',
//     categories_filter_ids: '',
//     include_adjacency: '',
//     page_number: '',
//     children_number: '',
//     children_ages: '',
// }

// export const useFetchHotelList = ({  }) => {
//     const [ param, setParam ] = useState(paramInit)
//     const [ dataHotel, setData ] = useState()

//     const fetchHotelListData = ({ param }) => {

//         const option = {
//             ...param,
//             header: process.-----
//         }

//         axios.request(option)

//         return 머시기 머시기
//     }

//     const { data, isLoading, isError } = useQuery({
//         queryKey:['동사를 사용해서.. get or fetch 무슨무슨 data : ei) getHotelDatListByParams'],
//         queryFn: () => return {
//             fetchHotelListData(옵션 ~~)
//         }
//     })

//   return { dataHotel, isLoading, isError, setParam }
// }

// const { data, iLoaindg, isErr} = useFetchHotelList()
