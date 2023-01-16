// import { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import postServices from "../services/postServices";
// function UpdateModalComponent(props) {
//   const [isShow, invokeModal] = useState(false);
//   const initModal = () => {
//     return invokeModal(!isShow);
//   };
//   const [title, setTitle] = useState(props.title);
//   const [date, setDate] = useState(props.date);
//   const [id, setId] = useState(props.id);
//   const [selectedFile, setSelectedFile] = useState('');
//   console.log(selectedFile, "selectedFile");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("id", id);
//     formData.append("title", title);
//     formData.append("date", date);
//     // if (selectedFile != "" && selectedFile.length != 0) {
//       formData.append("image", selectedFile);
//     // }
//     // console.log(FormData, "console");

//     const response = await postServices.update(formData);
//     if (response.data.success == true) {
//       alert(response.data.msg);
//     } else {
//       alert(response.data.msg);
//     }
//     initModal();
//   };
//   return (
//     <>
//       <Button variant="success" onClick={initModal}>
//         Edit
//       </Button>
//       <Modal show={isShow}>
//         <Modal.Header closeButton onClick={initModal}>
//           <Modal.Title>Update Post</Modal.Title>
//         </Modal.Header>
//         <form onSubmit={handleSubmit}>
//           <Modal.Body>
//             <input
//               type="text"
//               placeholder="Enter Post title"
//               value={title}
//               required
//               onChange={(e) => setTitle(e.target.value)}
//               name="title"
//             />
//             <input
//               type="date"
//               placeholder="Enter Post title"
//               value={date}
//               required
//               onChange={(e) => setDate(e.target.value)}
//               name="date"
//             />
//             <input
//               type="file"
//               name="file"
//               onChange={(e) => setSelectedFile(e.target.files[0])}
//             />
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="danger" onClick={initModal}>
//               Close
//             </Button>
//             <Button type="submit" variant="dark">
//               Update
//             </Button>
//           </Modal.Footer>
//         </form>
//       </Modal>
//     </>
//   );
// }
// export default UpdateModalComponent;
