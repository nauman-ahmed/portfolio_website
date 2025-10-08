import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

export default function ProjectBox({ projectData }) {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedModalIndex, setSelectedModalIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video source
      // Videos will remain paused until user manually clicks play
    }
  }, [projectData]); // Re-run the effect when the video path changes

  return (
    <>
      <div className="col-md-6 col-lg-4 col-sm-12 mb-4 w-100">
        <div className="project-info projectBox p-2">
          <div className="w-100 titleBox bg-body-secondary p-1">
            <h5 className="mb-0">{projectData.title}</h5>
          </div>
          <video
            className="img-fluid w-100 rounded-vid border border-secondary"
            ref={videoRef}
            controls
            muted
            loop
          >
            <source src={projectData.videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="d-flex flex-row justify-content-center flex-wrap">
            {projectData?.modalsArray?.map((modalData, i) => (
              <div key={projectData.videoPath + i} className="p-1">
                <button
                  className="w-100 btn custom-btn custom-btn-project"
                  onClick={() => {
                    setSelectedModalIndex(i);
                    setShowInfo(true);
                  }}
                >
                  {modalData.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
        <Modal 
          show={showInfo} 
          setShow={setShowInfo} 
          modalsArray={projectData?.modalsArray}
          initialIndex={selectedModalIndex}
        />
      </div>
    </>
  );
}
