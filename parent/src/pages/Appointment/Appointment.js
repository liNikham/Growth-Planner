import { useState } from "react";
import style from "./Appointment.module.css";
import Meeting from "../../components/Meeting/Meeting";

const Appointment = () => {
  const [meetingURL, setMeetingURL] = useState(null);
  const [doctors, setDoctors] = useState([
    {
      id: "1",
      name: "Dr. Placeholder1",
      qualifications: "MBBS (Pediatrician)",
      yoe: 5,
      meetingURL:
        "https://calendly.com/ishubham21/meet-doct?hide_event_type_details=1&hide_gdpr_banner=1",
    },
    {
      id: "2",
      name: "Dr. Placeholder2",
      qualifications: "MBBS (Pediatrician), MD",
      yoe: 5,
      meetingURL:
        "https://calendly.com/ishubham21/meet-doct?hide_event_type_details=1&hide_gdpr_banner=1",
    },
  ]);

  return (
    <>
      <h2>Select the pediatrician you want to meet</h2>
      <div className={style.available_doctors}>
        {doctors.map((doctor) => {
          return (
            <div
              key={doctor.id}
              className={style.doctor_card}
              onClick={() => {
                setMeetingURL(doctor.meetingURL);
              }}
            >
              <p>
                <span className={style.details}>Name:</span>{" "}
                {doctor.name}
              </p>
              <p>
                <span className={style.details}>Qualifications:</span>{" "}
                {doctor.qualifications}
              </p>
              <p>
                <span className={style.details}>
                  Years of experience:
                </span>{" "}
                {doctor.yoe}
              </p>
            </div>
          );
        })}
      </div>
      {/* {Only if a doctor is selected, pass on that link} */}
      {meetingURL && <Meeting url={meetingURL} />}
    </>
  );
};

export default Appointment;
