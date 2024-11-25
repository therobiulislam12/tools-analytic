import { Modal } from "react-responsive-modal";

const TATPModal = ({ tool, onCloseModal, open }) => {

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <h2>{tool?.title}</h2>
      <h4>Total Clicks: {tool?.total_clicks || 0}</h4>
    </Modal>
  );
};

export default TATPModal;
