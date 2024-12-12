import { useState } from 'react';
import StudentList from './components/StudentList';

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: 'Ada',
      emailData: 'ada@dev.org',
      isPresentData: false,
    },
    {
      id: 2,
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org',
      isPresentData: false,
    },
    {
      id: 3,
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org',
      isPresentData: true,
    },
  ]);

  const toggleStudentPresence = (studentId) => {
    const students = studentData.map(student => {
      if (student.id === studentId) {
        return { ...student, isPresentData: !student.isPresentData };
      } else {
        return student;
      }
    });

    setStudentData(students);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <StudentList
        students={studentData}
        onStudentPresenceToggle={toggleStudentPresence}
      ></StudentList>
    </main>
  );
}

export default App;
