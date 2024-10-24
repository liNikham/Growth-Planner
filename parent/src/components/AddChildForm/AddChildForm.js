import style from "./AddChildForm.module.css";
import ParentContext from "../../context/parentContext";
import { useContext, useState } from "react";
import Select from "react-select";
const AddChildForm = ({ setFormIsOpen, show, setShow }) => {
  const { parentData, updateParentData } = useContext(ParentContext);
  const [name, setName] = useState(" ");
  const ageOptions = [
    { value: "Toddler", label: "0-2(Toddler)" },
    { value: "Preschool", label: "3-6(PreSchool)" },
    { value: "Preteen", label: "7-12(PreTeen)" },
    { value: "Teen", label: "13-14(Teen)" },
  ];
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];
  const [ageGroup, setAgeGroup] = useState(null);
  const [gender, setGender] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormIsOpen(false);
    setShow(false);
    fetch(
      "http://localhost:4000/parent/add-child",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          ageGroup: ageGroup.value,
          gender: gender.value,
          parentId: parentData.id,
        }),
        headers: {
          "Content-type": "application/json"
        }
      }
    ).then((data) => {
      fetch(
        `http://localhost:4000/parent/data/${parentData.id}`,
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          updateParentData(res.data);
        });
    }).catch(err => {
      console.log(err);
    })

  };
  return (
    <div className={style.add_child_form}>
      {
        <div className={style.close_btn}>
          <img
            className={style.img}
            src={require("../../assets/x (1).svg")}
            alt=""
            onClick={() => {
              setShow(false);
              setFormIsOpen(false);
            }}
          />
        </div>
      }
      <p className={style.heading}>CHILD DETAILS</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className={style.name}>Name:</label>
        <input
          type="text"
          className={style.text_input}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <p className={style.catagory}>Age Group:</p>
        <Select
          defaultValue={ageGroup}
          onChange={setAgeGroup}
          options={ageOptions}
        />

        <p className={style.catagory}>Gender:</p>
        <Select
          defaultValue={gender}
          onChange={setGender}
          options={genderOptions}
        />
        <button className={style.btn}>Save</button>
      </form>
    </div>
  );
};

export default AddChildForm;
