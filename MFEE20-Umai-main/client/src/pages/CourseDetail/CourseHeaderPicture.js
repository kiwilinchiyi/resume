import React from "react";
import CircleOrange from "../../components/images/circle_orange.svg";
import CircleBlue from "../../components/images/circle_blue.svg";


function CourseHeaderPicture(props) {
  let { image1, image2, image3 } = props;
  return (
    <>
      <img className="orange1 CourseDecorate_RWD1" src={CircleOrange} alt=""></img>
      <img className="orange2-right CourseDecorate_RWD6" src={CircleOrange} alt=""></img>
      <img className="blue1-right CourseDecorate_RWD4" src={CircleBlue} alt=""></img>       
      <div className="Coursedetail CoursedetailMargin">
      {/* <img className="orange1" src={CircleOrange} alt=""></img> */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide CourseDetail-headerPicture"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={image1} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src={image2} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src={image3} class="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button
            class="carousel-control-prev Course-headerPictureButton"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next Course-headerPictureButton"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CourseHeaderPicture;
