import React, { useState } from "react";
import { Button, Modal } from "antd";

const SearchModal: React.FC = ({ modalOpen, setModalOpen }: any) => {
  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default SearchModal;
