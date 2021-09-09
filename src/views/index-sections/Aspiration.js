
import React from "react";

// reactstrap components
import { Col, Row, Container, Button, Modal } from "reactstrap";

// brand icon
import brandIcon from '../../assets/img/biop-white-icon-128x128px.png';

// core components

function Aspiration() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://medium-widget.pixelpoint.io/widget.js";
    scriptTag.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  React.useEffect(() => {
    if (!loaded) return;
    // the <script src="https://medium-widget.pixelpoint.io/widget.js"></script> should be loaded.

    window.MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/biopset",
          postsPerLine: 1,
          limit: 2,
          picture: "big",
          fields: ["description", "author", "claps", "publishAt"],
          ratio: "landscape"
        }
    })

    return () => {
      window.MediumWidget.unmount();
    };
  
  }, [loaded]);

  const [videoModal, setVideoModal] = React.useState(false);
  const toggleVideoModal = () => {
    setVideoModal(!videoModal);
  };

  const [blogModal, setBlogModal] = React.useState(false);
  const toggleBlogModal = () => {
    setBlogModal(!blogModal);
  };

  return (
    <div 
      className="section text-center" 
      style={{
        backgroundImage:
          "url(" + require("assets/img/biopset-dark-background-1920x1080px.jpg").default + ")",
        backgroundSize: "cover"
      }}
    >
      <div 
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          content: "",
          display: "block",
          height: "100%",
          left: 0,
          top: 0,
          position: "absolute",
          width: "100%",
          zIndex: "1"
        }} 
      />
      <Container>
        <div 
          className="text-center"
          style={{
            textAlign: "left",
            zIndex: 3,
            color: "#fff",
            position: "relative"      
          }}
        >
          <div
            style={{
              position: "absolue",
              minHeight: "100vh"
            }}
          >
            <Row>
              <Col className="ml-auto mr-auto" xs="10">
                <img src={brandIcon} width="10%" style={{paddingBottom: "50px"}} alt="brand icon" />
                <h5 style={{paddingBottom: "50px", fontFamily: "octarine-bold", textTransform: "lowercase"}}>
                  The binary options settlement protocol ("<span style={{color: '#D60000'}}>BIOPSET</span>") aims to be the most transparent programmatic 
                  clearinghouse for buying and selling binary options and esure all users ("<span style={{color: '#D60000'}}>settlers</span>") may leverage the 
                  protocol to earn fees for settling on-demand binary options offered by liquidity providers 
                  ("<span style={{color: '#D60000'}}>writers</span>") seeking to earn premiums from price speculators ("<span style={{color: '#D60000'}}>traders</span>"). 
                </h5>
                <Button
                  href="#blog"
                  className="btn-round mr-4"
                  color="danger"
                  onClick={toggleVideoModal}
                >
                  <i className="fa fa-play" />
                  Watch Video
                </Button>
                {/* Video Modal */}
                <Modal isOpen={videoModal} toggle={toggleVideoModal}>
                  <div className="modal-header">
                    <button
                      aria-label="Close"
                      className="close"
                      type="button"
                      onClick={toggleVideoModal}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5
                      className="modal-title text-center"
                      id="exampleVideoModalLabel"
                    >
                      Video Archive
                    </h5>
                  </div>
                  <div className="modal-body ml-auto mr-auto" xs="10">
                  <iframe width="100%" src="https://www.youtube.com/embed/G86wkheYmdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="modal-footer">
                    <div className="left-side">
                      <Button
                        className="btn-link"
                        color="default"
                        type="button"
                        onClick={toggleVideoModal}
                      >
                        Close
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                      <Button className="btn-link" color="danger" type="button">
                        More
                      </Button>
                    </div>
                  </div>
                </Modal>
                <Button
                  href="#video"
                  className="btn-round mr-4"
                  color="primary"
                  onClick={toggleBlogModal}
                >
                  <i className="fa fa-search" />
                  Research Blog
                </Button>
                {/* Video Modal */}
                <Modal isOpen={blogModal} toggle={toggleBlogModal}>
                  <div className="modal-header">
                    <button
                      aria-label="Close"
                      className="close"
                      type="button"
                      onClick={toggleBlogModal}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5
                      className="modal-title text-center"
                      id="exampleBlogModalLabel"
                    >
                      Recent Articles
                    </h5>
                  </div>
                  <div className="modal-body ml-auto mr-auto" xs="10">
                    <div id="medium-widget" />
                  </div>
                  <div className="modal-footer">
                    <div className="left-side">
                      <Button
                        className="btn-link"
                        color="default"
                        type="button"
                        onClick={toggleBlogModal}
                      >
                        Close
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                      <Button className="btn-link" color="danger" type="button">
                        More
                      </Button>
                    </div>
                  </div>
                </Modal>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Aspiration;
