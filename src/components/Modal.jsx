import React, { useEffect, useState } from 'react';

export default function Modal({ show, setShow, modalsArray, initialIndex = 0 }) {
  const [hideAnimate, setHideAnimate] = useState(false)
  const [currentModalIndex, setCurrentModalIndex] = useState(initialIndex)
  
  // Get current modal data
  const currentModal = modalsArray?.[currentModalIndex] || {}
  const { title = '', content = '' } = currentModal
  // Close the modal when the close button is clicked
  const handleClose = () => {
    setHideAnimate(true)
    setTimeout(() => {
      setShow(false);
      setHideAnimate(false);
      setCurrentModalIndex(0); // Reset to first modal when closing
    }, 500)
  };

  // Handle Next button click
  const handleNext = () => {
    const nextIndex = (currentModalIndex + 1) % modalsArray.length;
    setCurrentModalIndex(nextIndex);
  };

  // Close the modal when clicking outside of it (on the backdrop)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Modal visibility is controlled via the `show` prop
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'; // Disable background scrolling when modal is open
      setCurrentModalIndex(initialIndex); // Set to initial modal when opening
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
    }
  }, [show, initialIndex]);

  return (
    <>
      {show && (
        <div className="modal fade show d-block " tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={handleBackdropClick}>
          <div className={`modal-dialog modal-dialog-centered animate__animated animate__faster animate__fadeInDown   ${hideAnimate ? 'animate__fadeOutUp' : ''} `} role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <h5 className="modal-title mr-2" id="modalTitle">{title}</h5>
                  {modalsArray && modalsArray.length > 1 && (
                    <small className="text-muted ms-4">
                      {currentModalIndex + 1} of {modalsArray.length}
                    </small>
                  )}
                </div>
                <button type="button" className="close" onClick={handleClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div dangerouslySetInnerHTML={{ __html: content }} className="modal-body" id="modalContent" style={{ maxHeight: '400px', overflowY: 'auto', alignContent: 'start', textAlign: 'left' }}>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                {modalsArray && modalsArray.length > 1 && (
                  <button type="button" className="btn btn-primary" onClick={handleNext}>
                    {currentModalIndex === modalsArray.length - 1 ? 'Back to Start' : 'Next'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
