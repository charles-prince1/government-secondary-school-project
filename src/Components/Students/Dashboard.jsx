import { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import "../../Styles/Dashboard.css";
import StudentData from "./studensData";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Collapse,
} from "react-bootstrap";
function Dashboard() {
  // const {stu } = students
  const [layout, setLayout] = useState("Dashboard");
  // const {NameOfStudent, Address, pictureOfStudent} = dataBase()
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [personDetails, setPersonDetails] = useState(false)



  const handleShow = () => setToggle(true);
  const handleclose = () => setToggle(false);
  const handlesDetails = () => {
    setPersonDetails(true)
    if (personDetails) {
      window.addEventListener('click', () => {
        setPersonDetails(false)
      })
    }
  }

  return (
    <div className="d-flex flex-column">
      <div className="w-100 bg-primary shadow-sm ">
        <button
          className="width"
          onClick={handleShow}
          data-bs-toggle="offcanvas"
          type="button"
        >
          <div className="Button"></div>
        </button>
        {StudentData.map((student, index) => (
          <span className="d-flex float-end flex-column px-5 cursor-pointer justify-content-center align-content-center" onClick={handlesDetails}>
            <img key={index} className={student.id === 0 ? " ms-5 round-circle" : null} alt="" />
            <h5 className="fs-6">{student.id === 0 ? student.Student_name : null}</h5>
          </span>
        ))}
      </div>
      <Offcanvas
        tabindex="-1"
        data-bs-toggle="offcanvas"
        className="w-1"
        show={toggle}
        onHide={handleclose}
        scroll={true}
        data-bs-scroll="true"
        class="offcanvas offcanvas-start"
        data-bs-backdrop="false"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Welcome</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="move svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 64 64"
            >
              <path d="M 32 8 C 31.08875 8 30.178047 8.3091875 29.435547 8.9296875 L 8.8007812 26.171875 C 8.0357812 26.810875 7.7634844 27.925203 8.2714844 28.783203 C 8.9184844 29.875203 10.35025 30.088547 11.28125 29.310547 L 31.677734 12.269531 C 31.864734 12.113531 32.135266 12.113531 32.322266 12.269531 L 52.71875 29.3125 C 53.09275 29.6255 53.546047 29.777344 53.998047 29.777344 C 54.693047 29.777344 55.382672 29.416656 55.763672 28.722656 C 56.228672 27.874656 55.954891 26.803594 55.212891 26.183594 L 52 23.498047 L 52 15 C 52 13.895 51.105 13 50 13 L 48 13 C 46.895 13 46 13.895 46 15 L 46 18.484375 L 34.564453 8.9296875 C 33.821953 8.3091875 32.91125 8 32 8 z M 32 16 L 12 32.705078 L 12 47 C 12 49.761 14.239 52 17 52 L 47 52 C 49.761 52 52 49.761 52 47 L 52 32.705078 L 32 16 z M 28 32 L 36 32 C 37.105 32 38 32.895 38 34 L 38 48 L 26 48 L 26 34 C 26 32.895 26.895 32 28 32 z"></path>
            </svg>
            <p
              onClick={() => {
                setLayout("Dashboard");
                setToggle(false);
              }}
            >
              <li className="text-align-center">Dashboard</li>
            </p>
          </div>

          <div className="d-grid">
            <div className="bo ">
              <li
                aria-controls="example-collapse-text d-flex"
                aria-expanded={open}
                className="pointer"
                onClick={() => setOpen(!open)}
              >
                <p>
                  Enrolled Classes{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={open ? "rotate" : "don"}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </p>
              </li>
            </div>
            <Collapse in={open} className="bord">
              <li id="example-collapse-text">
                <p>SS1A</p>
              </li>
            </Collapse>
          </div>
          <div className="flex">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#070707ff"
              viewBox="0 0 24 24"
            >
              {/* <!--Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
              <path d="m10,13h-2c-2.76,0-5,2.24-5,5v1c0,.55.45,1,1,1h10c.55,0,1-.45,1-1v-1c0-2.76-2.24-5-5-5Zm-5,5c0-1.65,1.35-3,3-3h2c1.65,0,3,1.35,3,3H5Z"></path>
              <path d="m12.73,6.51c-.08-.22-.19-.42-.3-.62,0,0,0,0,0-.01-.69-1.14-1.93-1.89-3.42-1.89-2.28,0-4,1.72-4,4s1.72,4,4,4c1.49,0,2.73-.74,3.42-1.89,0,0,0,0,0-.01.12-.2.22-.4.3-.62.02-.06.03-.12.05-.18.06-.17.11-.34.15-.52.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52-.02-.06-.03-.12-.05-.18Zm-3.73,3.49c-1.18,0-2-.82-2-2s.82-2,2-2,2,.82,2,2-.82,2-2,2Z"></path>
              <path d="m15,10c-.11,0-.22-.01-.33-.03-.22.66-.56,1.27-.98,1.81.41.13.84.22,1.31.22,2.28,0,4-1.72,4-4s-1.72-4-4-4c-.47,0-.9.09-1.31.22.43.53.76,1.14.98,1.81.11-.01.21-.03.33-.03,1.18,0,2,.82,2,2s-.82,2-2,2Z"></path>
              <path d="m16,13h-1.11c.6.58,1.08,1.27,1.44,2.03,1.5.17,2.67,1.43,2.67,2.97h-2v1c0,.35-.07.69-.18,1h3.18c.55,0,1-.45,1-1v-1c0-2.76-2.24-5-5-5Z"></path>
            </svg>
            <li
              onClick={() => {
                setLayout("Parents");
                setToggle(false);
              }}
            >
              <p>Parents</p>
            </li>
          </div>
          <div className="flex">
            <li
              onClick={() => {
                setLayout("Result");
                setToggle(false);
              }}
            >
              <p>Result</p>
            </li>
          </div>
          <div className="flex">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#0a0a0aff"
              viewBox="0 0 24 24"
            >
              {/* <!--Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
              <path d="m19,4h-2v-2h-2v2h-6v-2h-2v2h-2c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM5,20v-12h14v-2,14s-14,0-14,0Z"></path>
              <path d="M7 11H9V13H7z"></path>
              <path d="M11 11H13V13H11z"></path>
              <path d="M15 11H17V13H15z"></path>
              <path d="M7 15H9V17H7z"></path>
              <path d="M11 15H13V17H11z"></path>
              <path d="M15 15H17V17H15z"></path>
            </svg>
            <li>
              <p>Event</p>
            </li>
          </div>

          <div className="flex">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#131414ff"
              viewBox="0 0 24 24"
            >
              {/* <!--Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
              <path d="m19,12.59v-2.59c0-3.22-2.18-5.93-5.14-6.74-.29-.74-1.01-1.26-1.86-1.26s-1.56.52-1.86,1.26c-2.96.82-5.14,3.53-5.14,6.74v2.59l-1.71,1.71c-.19.19-.29.44-.29.71v2c0,.55.45,1,1,1h16c.55,0,1-.45,1-1v-2c0-.27-.11-.52-.29-.71l-1.71-1.71Zm0,3.41H5v-.59l1.71-1.71c.19-.19.29-.44.29-.71v-3c0-2.76,2.24-5,5-5s5,2.24,5,5v3c0,.27.11.52.29.71l1.71,1.71v.59Z"></path>
              <path d="m5.64,3.3l-1.41-1.41C2.14,3.97,1,6.73,1,9.67h2c0-2.4.94-4.66,2.64-6.36Z"></path>
              <path d="m18.36,3.3c1.7,1.7,2.64,3.96,2.64,6.36h2c0-2.94-1.14-5.7-3.22-7.78l-1.41,1.41Z"></path>
              <path d="m12,22c1.31,0,2.41-.83,2.82-2h-5.64c.41,1.17,1.51,2,2.82,2Z"></path>
            </svg>
            <li>
              {" "}
              <p>Notify</p>
            </li>
          </div>
        </OffcanvasBody>
      </Offcanvas>
      {personDetails === true ? <div>
        hello
      </div> : null}
      <div className="d-flex ">
        <div className="bg-color text-primary w-100 pl-1 d-grid vh-100 ">
          {/* Dashboard layout */}
          {layout === "Dashboard" && (
            <div className="sticky-lg-top">
              <div className="w-100 py-3 px-3 text-align-center height">
                <h3 className="float-start">DASHBOARD</h3>

                <p className="float-end">
                  {layout === "Dashboard" ? "Home > Dashboard" : null}
                </p>
              </div>
              <div className="bg-col">
                <p className="text-white">
                  "Live as if you were to die tomorrow. Learn as if you were to
                  live forever"
                </p>
              </div>

              <div className="d-flex container gap-4 px-4 pt-5 ">
                <div className=" w d-color">
                  <p className="text-center text-white cap">
                    Course Registered
                  </p>
                  <p>0 courses</p>
                </div>
                <div className="w bg-success cursor-pointer" onClick={() => setLayout('Parents')}>
                  <p className="text-align">Parents</p>
                  <span className="d-flex">
                    <p className="d-flex font-size">1 </p>
                    <p className="size">+</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="104"
                      fill="#0707078c"
                      viewBox="0 0 24 24"
                    >
                      {/* <!--Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
                      <path d="m10,13h-2c-2.76,0-5,2.24-5,5v1c0,.55.45,1,1,1h10c.55,0,1-.45,1-1v-1c0-2.76-2.24-5-5-5Zm-5,5c0-1.65,1.35-3,3-3h2c1.65,0,3,1.35,3,3H5Z"></path>
                      <path d="m12.73,6.51c-.08-.22-.19-.42-.3-.62,0,0,0,0,0-.01-.69-1.14-1.93-1.89-3.42-1.89-2.28,0-4,1.72-4,4s1.72,4,4,4c1.49,0,2.73-.74,3.42-1.89,0,0,0,0,0-.01.12-.2.22-.4.3-.62.02-.06.03-.12.05-.18.06-.17.11-.34.15-.52.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52-.02-.06-.03-.12-.05-.18Zm-3.73,3.49c-1.18,0-2-.82-2-2s.82-2,2-2,2,.82,2,2-.82,2-2,2Z"></path>
                      <path d="m15,10c-.11,0-.22-.01-.33-.03-.22.66-.56,1.27-.98,1.81.41.13.84.22,1.31.22,2.28,0,4-1.72,4-4s-1.72-4-4-4c-.47,0-.9.09-1.31.22.43.53.76,1.14.98,1.81.11-.01.21-.03.33-.03,1.18,0,2,.82,2,2s-.82,2-2,2Z"></path>
                      <path d="m16,13h-1.11c.6.58,1.08,1.27,1.44,2.03,1.5.17,2.67,1.43,2.67,2.97h-2v1c0,.35-.07.69-.18,1h3.18c.55,0,1-.45,1-1v-1c0-2.76-2.24-5-5-5Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="w bg-warning cursor-pointer" onClick={() => setLayout('Result')}>
                  <p className="text-center text-white cap">Result</p>
                </div>
                <div className="w bg-info">
                  <p className="text-center text-white cap">Profile</p>
                </div>
              </div>
            </div>
          )}
          {layout === "Parents" && (
            <div className="sticky-lg-top">
              <div className="w-100 py-3 px-3 h bg-white text-align-center">
                <h3 className="float-start">PARENTS</h3>
                <p className="float-end">
                  {layout === "Parents" && "Dashboard > parents"}
                </p>
              </div>
              <div className="result_width m-auto">
                <img src="" className="round-circle ms-5 mt-5" alt="" />
                <div>
                  <div className="w-100">
                    <div className="d-flex">
                      <label htmlFor="" >Full Name:</label> &nbsp;
                      <span >Anyanwu Isaac</span>
                    </div>
                    <div className="d-flex">
                      <label htmlFor="">Email</label> &nbsp;
                      <span>Chimmmmmm@gmail.com</span>
                      <input type="text" value='chhhimmm' disabled className="border-0" id="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {layout === "Result" && (
            <div className="bg-gray">
              <div className="w-100 py-3 px-5 bg-white h sticky-lg-top">
                <h3 className="float-start">Student Result</h3>
                <p className="float-end">
                  {layout === "Result" && "Dashboard > Result"}
                </p>
              </div>

              <div className="result_width m-auto">
                <h1 className="mt-0 fs-2">Your Academic Result</h1>
                <span className="d-flex ">
                  <label htmlFor="">Session:</label>
                  <select name="class" className="mx-2" id="">
                    <option value="Jss1">Jss1</option>
                    <option value="Jss1">Jss2</option>
                    <option value="Jss1">Jss3</option>
                    <option value="Jss1">Jss3</option>
                    <option value="Jss1">SS1</option>
                    <option value="Jss1">SS2</option>
                    <option value="Jss1">SS3</option>
                  </select>
                </span>


                {StudentData.map((student, index) => (

                  <div className={student.id === 0 ? 'd-grid' : 'd-none'}>
                    <h3 className="fs-4 text-primary-emphasis  text-shadow-0"> <strong className="text-primary">Name</strong> : {student.Student_name}</h3>
                    <table className="w-100">
                      <thead>
                        <tr>
                          <th className="bg-info text-black px-3 py-3 text-center border-end">Subjects</th>
                          <th className="bg-info text-black px-3 py-3 text-center border-end">Tests</th>
                          <th className="bg-info text-black px-3 py-3 text-center">Exam</th>
                        </tr>
                      </thead>
                      <tbody>
                        {student.Subjects.map((subjects, index) => (
                          <tr>
                            <td className="px-2 py-1 bg-black border-bottom border-end">{subjects.name}</td>
                            <td className="px-2 py-1 bg-black border-bottom border-end">{subjects.test_score}</td>
                            <td className="px-2 py-1 bg-black border-bottom">{subjects.Exam_score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}

              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}
export default Dashboard;
