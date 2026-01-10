import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../Styles/content.css";
import ImageSlider from "./imagesSlider";
import evenImage1 from "../images/IMG-20250911-WA0201.jpg";
import evenImage3 from "../images/Screenshot (130).png";
import Icon1 from "../images/2.png";
import Icon2 from "../images/3.png";
import video1 from "../images/VID-20251002-WA0001.mp4";
import video2 from "../images/VID-20251005-WA0078.mp4";
import pdf from "../images/StarAwrd.pdf";
function Content() {
  const [infor, setInfor] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const imagesUrls = [
    { id: 1, src: evenImage1 },
    { id: 2, src: evenImage3 },
  ];
  const videos = [
    { id: 1, src: video1 },
    { id: 2, src: video2 },
  ];

  useEffect(() => {
    const intervalID = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imagesUrls.length);
    }, 3000);
    return () => clearInterval(intervalID);
  }, [imagesUrls.length]);

  function back() {
    setVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  }
  function next() {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }
  return (
    <div>
      <section className="main_container">
        <main>
          <ImageSlider />
        </main>

        <article className="compliments_containers">
          <div className="Method_container details">
            <img src={Icon1} alt="" />
            <span>
              <h2 className="subtitle">THE BEST LEARNING METHOD</h2>
              <p className="text_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus officiis neque libero quisquam quae repellat a
                praesentium, corporis itaque corrupti, temporibus blanditiis
              </p>
            </span>
          </div>
          <div className="Compliment_container details">
            <img src={Icon2} alt="" />
            <span>
              <h2 className="subtitle">AWESOME RESULT OF OUR SCHOOL</h2>
              <p className="text_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                illum officia velit distinctio, quis sapiente molestias error
                reprehenderit, ducimus reiciendis culpa soluta aliquid sunt
                earum eum voluptatum ullam laborum perspiciatis! !
              </p>
            </span>
          </div>
        </article>
        <div className="information_container">
          <button onClick={() => setInfor("Guidinces")}>How to Apply</button>
          <button onClick={() => setInfor("Policy")}>Policy</button>
          <button onClick={() => setInfor("form")}>Application Form</button>
        </div>
        <div className={infor === "" ? " d-none" : "displayed d-flex  vh-100 mt-1 " }>
         {infor === 'Guidinces' && <div className=" w-100 ">
         
        <div className=" px-5 pt-5 bg-black mt-2 m-auto auto heig ">
           <button className="cancelBtn" onClick={()=> setInfor('')}>X</button>
            <p className="text-info">Hello</p>
          <p className="text-info">Hello you</p>
          <p className="text-info">How are you doing</p>
        </div>
          </div>}
         {infor === 'Policy' && <div className=" w-100 ">
         
        <div className=" px-5 pt-5 bg-black mt-2 m-auto auto heig ">
           <button className="cancelBtn" onClick={()=> setInfor('')}>X</button>
            <p className="text-info">Hello</p>
          <p className="text-info">Hello you</p>
          <p className="text-info">How are you doing</p>
        </div>
          </div>}
         {infor === 'form' && <div className=" w-100 ">
         
        <div className=" px-5 pt-5 bg-black mt-2 m-auto auto heig ">
           <button className="cancelBtn" onClick={()=> setInfor('')}>X</button>
            <p className="text-info">Hello</p>
          <p className="text-info">Hello you</p>
          <p className="text-info">How are you doing</p>
        </div>
          </div>}
         </div>
        <div>
          <aside id="News_and_Event" className="News_and_Event">
            <div className="latest_new_container">
              <h1>LATEST NEWS</h1>
              <div className="details_about_news">
                <div className="new1">
                  <button className="btn leftHand" onClick={() => back()}>
                    &lt;
                  </button>
                  {videos &&
                    videos.map((video, index) => (
                      <video
                        src={video.src}
                        alt=""
                        controls
                        className={
                          index === videoIndex ? "videoDisplay" : "noDisplay"
                        }
                      />
                    ))}

                  <button className="btn rightHand" onClick={() => next()}>
                    &gt;
                  </button>
                </div>
                <article>
                  <div>
                    {imagesUrls &&
                      imagesUrls.map((image, index) => (
                        <img
                          key={image.id}
                          src={image.src}
                          alt=""
                          className={
                            index === imageIndex ? "display" : "displayNone"
                          }
                        />
                      ))}
                  </div>
                </article>
              </div>
            </div>
            <div>
              <span className="texts">
                Hello OGSSIAN we hereby invite you to our starAward. Download 🔗
              </span>
              <a className="downloadBtn" href={pdf} download={pdf}>
                Download
              </a>
            </div>
          </aside>
         <div className="allDates">
          <h1 className=" center">Upcoming Schedules</h1>
           <div className="upcoming_dates_container">
            <div className="date1">
              <div className="dates">
                <p className="second_text">Oct</p>
                <p className="date">17</p>
              </div>
              <span className="details_about_date">
                Star Award Giving Day. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusamus deleniti distinctio perspiciatis,
                dignissimos eius quidem dolores officiis maxime delectus earum
                nobis deserunt recusandae a, fugit cumque non rem vero?
                Blanditiis! Ab ut et dicta id obcaecati amet architecto quae
                corporis distinctio soluta? Tenetur culpa illo hic, eum
                necessitatibus excepturi non itaque? Fugit fugiat accusamus
                odio, esse voluptates atque fuga illum!
              </span>
            </div>
            <div className="date1">
              <div className="dates">
                <p className="second_text">Dec</p>
                <p className="date">20</p>
              </div>
              <span className="details_about_date">
                School closes Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sunt ab nam possimus facere illum dolorum at!
                Sunt mollitia nesciunt impedit voluptate, vel cum ab saepe? Eius
                ipsum aspernatur omnis labore? Ea facere in asperiores
                voluptatem, nobis quo hic nulla corrupti deleniti natus
                reiciendis nihil ducimus error, nemo dicta. Corrupti dolorem
                debitis nemo quisquam nostrum ad! A sed dolor doloribus
                blanditiis.
              </span>
            </div>
            <div className="date1">
              <div className="dates">
                <p className="second_text">Jan</p>
                <p className="date">21</p>
              </div>
              <span className="details_about_date">
               Resumption Date.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem accusantium! Minus, aut soluta repellat ipsum temporibus officia hic eum sint animi tenetur deleniti vel excepturi quod omnis repudiandae culpa.
               Quae blanditiis amet dignissimos ea error corporis quaerat nobis tempore perferendis ducimus, nulla eveniet voluptates temporibus! Id molestias laboriosam sunt eum nulla esse officia rerum, modi mollitia at ratione provident?
              </span>
            </div>
          </div>
         </div>
        </div>
      </section>
    </div>
  );
}
export default Content;
