import "./styles.css";

setTimeout(() => {
  console.log("api getting call");
  let roll_no = [1, 2, 3, 4, 5];
  console.log(roll_no);
  setTimeout(
    (rollno) => {
      const biodata = {
        name: "iron man",
        age: 50,
      };
      console.log(
        `roll_no is  ${rollno} and name is ${biodata.name} and age is ${biodata.age}`
      );

      setTimeout(
        (name) => {
          biodata.gender = "male";
          console.log(
            `this is rollno ${rollno} and name is ${biodata.name} and age is ${biodata.age} , he is ${biodata.gender}`
          );
        },
        2000,
        biodata.name
      );
    },
    2000,
    roll_no[2]
  );
}, 2000);
