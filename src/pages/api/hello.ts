// import axios from "axios";
// import { request } from "http";

// export default async function handler(req, res) {

//     const { body } = req
//     const { params } = req

//     if(body.uid) {
//         아이디가 있으면, 비교해서 권한이 있는지 체크하고
//         요청 자료를 검색

//          axios.post(업체 api). then(res => {
//             if(res.msg === "OK") {
//                 res.status(200).send(res.data)
//             } else {
//                 res.status(400).send({message:'자료가 없어요.'})
//             }
//          })
//     }

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     if (result) {
//       console.log("result", result);
//       res.status(200).send(result);
//     }

//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
