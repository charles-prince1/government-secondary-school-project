import SchoolLogo from "../images/School.png";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../Styles/History.css";
function History() {
  return (
    <div className="history_container">
    
      <section className="section  bg-secondary">
        <main className="main_container" style={{ padding: "20px 20px" }}>
         
            <h1 className="title1">GOVERNMENT SECONDARY SCHOOL OWERRI </h1>
            <h3 className="title1 sec"> P.M.B 1006 OWERRI, IMO STATE</h3>
            <h3 className="title1 sec">PHONE: 083-230131</h3>
             <span className="span">
            <h4>BRIEF HISTORY:</h4>
            <img className="school_logo" src={SchoolLogo} alt="" />
            <p className=".p">
              The School was established in 1950 as a primary school called
              Government School Owerri. it was built by the colonial
              administration to produce educated people who would help Mr. H.M
              Douglas in the administration of Owerri District, it started in a
              thatched house situated at the site of the present Owerri post
              office from where it was later relocated to occupy over 41
              heacters of land in its present site.
            </p>
            <p className=".p">
              Some of the buildings of the primary school are still in use
              today. in 1935, the primary school was upgraded to Owerri Middle
              School with Class IV as its highest class. A few pupils of the
              primary school were selected to continue in the Middle School
              including:{" "}
              <strong>
                {" "}
                <ul>
                  <li>F. I. Ike, Nnawuchi Dennis Obilobi,</li>{" "}
                  <li> Irechukwu Godwin, Dennis Anyadike,</li>{" "}
                  <li> Eugene Amaechi,</li> <li> Bernard Nzerem,</li>{" "}
                  <li>H. E. Ekewuba, Erasmus Philip </li>
                  <li>and Sunday Ezem.</li>
                </ul>
              </strong>{" "}
              The foundation houses were Royce, Njemanze and Aggrey. The school
              started with a hard core of very renowned and excellent teachers
              selected from across West Africa.{" "}
            </p>
            <p className=".p text-white">
              The foundation staff consist of:{" "}
              <ol className="ol">
                <li>Jumbo A. Herbet-Dick : a travelling teacher,</li>
                <li>Benneth Arnold Okafor: teaching scienec,</li>{" "}
                <li>Nathan Ejiogu: teaching Goegraphy Leopold B. Gram,</li>{" "}
                <li>
                  Charles Willam: Low teaching English, Literature in English
                  and Cricket.
                </li>
              </ol>
            </p>
            <p className=".p">
              In 1949, the school was further upgraded to the status of a full
              fledged secondary school, the Goverment Secondary School Owerri
              with Mr. M. C. English as the first officially designated
              principal. The school has been run by 30 officially designated
              principals. However in October 2004, the state governemnt came up
              with the idea of dual principalship of some schools of which
              Governemnt Secondary School, Owerri is one of the affected
              schools. This brought Nwaiche J. E annd Dr. O. A. Ewulonu as
              principal for senior and junior secondary schools respectively
            </p>
          </span>
          <span className="span">
            <h1 className="title1">GENERAL INFORMATION</h1>
            <p className=".p">
              {" "}
              The school has over the years savoured the euphoria of her noble
              foundations. She has consequently produced a frightening array of
              noble gentlemen, distiguished captains of industries, leading
              names in Engineering, Medicine, Administrative, Science and
              Technology, Teaching and law including a SAN. Since becoming a
              full secondary school, Government Secondary School, Owerri has
              grown from strength to strength. From a population of ne hundred
              and fifty (150) in 1956 we now have a population of four thousand
              (4,000) students in 2005/2006 session. The school won the First
              Runner up Best Public. Senior Secondary School 2020 President's
              Teachers and School Excellence Award (PTSEA) held at Eagle Square,
              FCT Abuja
            </p>
          </span>
        </main>
        <div className="">
        
      </div>
      </section>
      
    </div>
  );
}
export default History;
