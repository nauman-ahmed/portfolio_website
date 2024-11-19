import React, { useEffect, useState } from 'react';

export default function Modal({ show, setShow, title, content }) {
  const [hideAnimate, setHideAnimate] =useState(false)
  // Close the modal when the close button is clicked
  const handleClose = () => {
    setHideAnimate(true)
    setTimeout(() => {
      setShow(false);
      setHideAnimate(false)
    }, 500)
  };

  // Modal visibility is controlled via the `show` prop
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'; // Disable background scrolling when modal is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
    }
  }, [show]);

  return (
    <>
      {show && (
        <div className="modal fade show d-block " tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className={`modal-dialog modal-dialog-centered animate__animated animate__fadeInDown   ${hideAnimate ? 'animate__fadeOutUp' : ''} `} role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitle">{title}</h5>
                <button type="button" className="close" onClick={handleClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div dangerouslySetInnerHTML={{ __html: content }} className="modal-body" id="modalContent" style={{ maxHeight: '400px', overflowY: 'auto', alignContent: 'start', textAlign: 'left' }}>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
