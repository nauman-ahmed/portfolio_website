import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

export default function ProjectBox({ projectData }) {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedModalIndex, setSelectedModalIndex] = useState(0);
  const videoRef = useRef(null);

  // Projects ship either a video demo or a still image, never both.
  const isImage = Boolean(projectData.imagePath);
  const mediaPath = projectData.imagePath || projectData.videoPath;

  // Every demo has a generated still beside it (foo.mp4 -> foo-poster.webp) so the
  // card shows a real frame while preload="none" keeps the video itself unfetched.
  const posterPath =
    projectData.posterPath ||
    (projectData.videoPath
      ? projectData.videoPath.replace(/\.mp4$/, '-poster.webp')
      : undefined);

  // Only reload when the source actually changes after mount. Calling load() on the
  // first render makes the browser fetch each video despite preload="none", which
  // costs a request per card for no benefit.
  const loadedPathRef = useRef(projectData.videoPath);
  useEffect(() => {
    if (loadedPathRef.current === projectData.videoPath) return;
    loadedPathRef.current = projectData.videoPath;
    if (videoRef.current) videoRef.current.load();
  }, [projectData.videoPath]);

  return (
    <>
      <div className="col-md-6 col-lg-4 col-sm-12 mb-4 w-100">
        <div className="project-info projectBox p-2">
          <div className="w-100 titleBox bg-body-secondary p-1">
            <h5 className="mb-0">{projectData.title}</h5>
          </div>
          {isImage ? (
            <img
              className="img-fluid w-100 rounded-vid border border-secondary"
              src={projectData.imagePath}
              alt={projectData.title}
              loading="lazy"
            />
          ) : (
            <video
              className="img-fluid w-100 rounded-vid border border-secondary"
              ref={videoRef}
              controls
              muted
              loop
              preload="none"
              poster={posterPath}
            >
              <source src={projectData.videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="d-flex flex-row justify-content-center flex-wrap">
            {projectData?.modalsArray?.map((modalData, i) => (
              <div key={mediaPath + i} className="p-1">
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
