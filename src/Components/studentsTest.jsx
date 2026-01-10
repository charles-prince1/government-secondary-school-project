import { useEffect, useState } from "react";
import StudentData from "./studensData";
import Dashboard from './Dashboard'
function StudentTest() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStudentsData() {
      setIsLoading(true);
      try {
        const Response = await fetch(StudentData);
        const Data = await Response.json();
        setStudents(Data);
        console.log(Data);
        console.log(students);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
      if (error) {
        return <div>Something went wrong</div>;
      }
    }
    fetchStudentsData();
  }, []);
  return <div>{isLoading ? <div> Loading....</div> :<Dashboard students={students} />}</div>;
}
export default StudentTest;
