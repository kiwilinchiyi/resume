import Chef from "./images/test/photoAC設置拌飯.jpg";
import StarGroup from "./StarGroup";
import React, { Component, useState, useEffect } from "react";
import CourseService from "../services/course.service";
import { PUBLIC_URL } from "../config/config";

const CourseMiniCard = (props) => {
  let {
    coursePicture,
    courseName,
    chefName,
    courseBatch,
    courseQuota,
    courseNowQuota,
    courseLevel,
    coursePrice,
    score_sum,
    score_count,
    id,
    tag,
  } = props;
  const CardTest = [
    {
      courseCategory: "日式料理", //分類
      courseName: "好吃好吃好好吃料理好吃好吃好好吃料理", //名稱 //字數上限20字
      chefName: "佐藤真一(Sado)", //主廚名稱
      courseBatch: "2022/12/20", //梯次日期
      coursePrice: 5000, //價格
      courseScore: 1000, //總分
      courseScoreCount: 200, //評分人數
      courseQuota: 100, //課程總人數
      courseNowQuota: 60, //現在人數
      courseChefImage: Chef,
      courseLevel: "1",
    },
  ];
  const courseLevelList = ["高階", "中階", "初階"];

  const [levelColor, setLevelColor] = useState();

  useEffect( () => {
    if(courseLevel != undefined){
  if (courseLevel == 1) {
    setLevelColor("highLevel");
  }  else if(courseLevel == 2){
    setLevelColor("midLevel");
  } 
}
  }, [courseLevel]);

  // useEffect(async () => {
  //   try {
  //     let homepage = await CourseService.course_homepage();
  //     setHomepageCourse(homepage.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <>
      <div
        onClick={() => {
          window.location.href = "http://localhost:3000/courses/" + id;
        }}
        className="st-courseMiniCard"
      >
        <div className="st-courseMiniCardWrapper">
          {/* 課程照片容器 */}
          <div className="courseMiniCardPictureWrapper">
            <img
              className="courseMiniCardPicture"
              src={coursePicture}
              alt=""
            ></img>
            {/* 課程標籤(即將截止/即將額滿) */}
            <div className="st-courseMiniCardTag st-courseMiniCardBarActiveDeadline">
              <p>{tag}</p>
            </div>
          </div>

          {/* 課程資訊上半 */}
          <div className="courseMiniCardTextUpper">
            {/* 上方文字容器 */}
            <div className="st-courseMiniCardName">
              {/* 課程名稱 */}
              <p>{courseName}</p>

              <div className="st-courseMiniCardChefName">
                {/* 主廚名稱 */}
                {chefName}
              </div>

              {/* 評價星數 */}
              <div className="st-startWidth">
                <StarGroup
                  allScore={score_sum}
                  percent={(20 * score_sum) / score_count}
                />
              </div>
            </div>
          </div>

          {/* 課程資訊下半 */}
          <div className="courseMiniCardTextDown">
            {/* 梯次日期 */}
            <div className="st-courseMiniCardBatch">
              最早可報名梯次：
              <div className="st-courseMiniCardTime">{courseBatch}</div>
            </div>

            {/* 學員報名進度條 */}
            <div className="st-courseMiniCardProgressBox">
              <div className="st-courseMiniCardProgress"></div>
              <div
                className="st-courseMiniCardFullProgress"
                style={{
                  width: Math.round(100 / (courseQuota / courseNowQuota)) + "%",
                }}
              ></div>

              <div className="st-courseMiniCardCount">
                報名人數：{courseNowQuota}&nbsp;/&nbsp;
                {courseQuota}
              </div>
            </div>
          </div>

          {/* 課程分級與價格 */}
          <div className="courseMiniCardContentDown">
            {/* 課程分級 */}
            <div className= {`st-courseMiniCardLevel ${levelColor}`}>
              <p className="st-courseMiniCardLevelText">
                {courseLevelList[courseLevel - 1]}
              </p>
            </div>
            <div className="st-courseMiniCardPriceBox">
              <p className="st-courseMiniCardPrice">
                NT$
                {coursePrice
                  ? coursePrice
                      .toString()
                      .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
                  : 0}
              </p>
              <p className="st-courseMiniCardSpecialPrice">
                NT$
                {coursePrice
                  ? (coursePrice * 0.9)
                      .toString()
                      .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
                  : 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseMiniCard
