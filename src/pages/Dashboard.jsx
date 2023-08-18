import { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

export default function Dashboard() {
  const [showModal, setShowModal] = useState();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    
    <>
        <div className="flex justify-center flex-col md:flex-row lg:flex-row gap-4 rounded p-3">
          
          <span className="bg-red-50 p-5 shadow-lg">
            Dashboard Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis veniam incidunt cupiditate officia sapiente alias, suscipit natus perspiciatis voluptas veritatis error laborum soluta corporis atque tempora obcaecati, ipsum nam vero? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut provident reiciendis commodi. Rerum mollitia iusto maiores totam dolorum nesciunt quae id illum, ab ea, quod sint blanditiis quam numquam officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti fugit repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolor, ea amet quam non quis architecto doloribus quasi provident optio, totam quae? Ut aliquam facilis sint, alias sit minima tenetur. quidem vero cumque voluptas. Quasi veniam sed eum, suscipit assumenda, obcaecati ad id enim quam perspiciatis minus voluptas.lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, necessitatibus ipsum nobis aliquam molestiae nam, harum quia debitis amet quo laudantium sed! Incidunt, magnam vitae? Quasi accusantium asperiores ducimus dolorum.
          </span>
          <span className="bg-red-50 p-5 shadow-lg">
            Dashboard Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis veniam incidunt cupiditate officia sapiente alias, suscipit natus perspiciatis voluptas veritatis error laborum soluta corporis atque tempora obcaecati, ipsum nam vero? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut provident reiciendis commodi. Rerum mollitia iusto maiores totam dolorum nesciunt quae id illum, ab ea, quod sint blanditiis quam numquam officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti fugit repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolor, ea amet quam non quis architecto doloribus quasi provident optio, totam quae? Ut aliquam facilis sint, alias sit minima tenetur. quidem vero cumque voluptas. Quasi veniam sed eum, suscipit assumenda, obcaecati ad id enim quam perspiciatis minus voluptas.lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, necessitatibus ipsum nobis aliquam molestiae nam, harum quia debitis amet quo laudantium sed! Incidunt, magnam vitae? Quasi accusantium asperiores ducimus dolorum.
          </span>

          <div>
      <button onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={showModal} onClose={closeModal}>
        <h2 className="text-lg font-bold mb-4">Welcome to the Modal!</h2>
        <p>This is a reusable modal component.</p>
        <h2 className="text-lg font-bold mb-4">Welcome to the Modal!</h2>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <p>This is a reusable modal component.</p>
        <h2 className="text-lg font-bold mb-4">Welcome to the Modal!</h2>
        <p>This is a reusable modal component.</p>
        <h2 className="text-lg font-bold mb-4">Welcome to the Modal!</h2>
        <p>This is a reusable modal component.</p>
      </Modal>
    </div>
          </div>
    </>
  )
}
